import {
  Disposable,
  languages,
  CompletionItem,
  SnippetString,
  MarkdownString,
  CompletionList,
  ProviderResult,
  Position,
  TextDocument,
  CompletionItemKind,
} from "vscode";
import {
  tagAttributes,
  cssProperties,
  htmlTags,
  mjmlSnippets,
} from "./snippets";
import { isWithinRegex } from "./utils";
import { workspaceConfig } from "./extension";
import regex from "./resources/regex";

interface Snippet {
  prefix: string;
  body: string;
  description?: string;
}

function createCompletionItem(snippet: Snippet, detail: string, kind?: number) {
  const snippetCompletion = new CompletionItem(snippet.prefix);

  snippetCompletion.detail = detail;
  snippetCompletion.documentation = new MarkdownString(snippet.description);
  snippetCompletion.insertText = new SnippetString(snippet.body);
  snippetCompletion.kind = kind;

  return snippetCompletion;
}

export default class Completion {
  constructor(subscriptions: Disposable[]) {
    const providers = [
      this.attributeProvider,
      this.cssPropertyProvider,
      this.cssValueProvider,
      this.htmlTagProvider,
      this.mjmlSnippetProvider,
    ];

    const disposables = providers.map((provider) => {
      return languages.registerCompletionItemProvider("mjml", {
        provideCompletionItems: provider.bind(this),
      });
    });

    subscriptions.push(...disposables);
  }

  private attributeProvider(document: TextDocument, position: Position) {
    const completionItems = tagAttributes.map((attr) => {
      const attrCopy = { ...attr };

      const { openingTag } = regex.dynamicPatterns;
      const tagNames = `${
        attr.noMjClass ? "" : "mj-class|mj-all|"
      }${attr.els.join("|")}`;
      const formattedRegex = new RegExp(
        openingTag.start + tagNames + openingTag.end,
        "g"
      );

      if (!isWithinRegex(document, position, formattedRegex)) return;

      return createCompletionItem(attrCopy, "MJML");
    });

    return completionItems.filter(
      (item) => item !== undefined
    ) as CompletionItem[];
  }

  private cssPropertyProvider(document: TextDocument, position: Position) {
    const { text: lineText } = document.lineAt(position);
    const lastLineChar = lineText[position.character];

    if (lastLineChar === ";") return;

    if (!isWithinRegex(document, position, regex.styleBlock)) return;
    if (!isWithinRegex(document, position, regex.curlyBrackets)) return;
    if (isWithinRegex(document, position, regex.cssValue)) return;
    if (isWithinRegex(document, position, regex.cssComment)) return;

    return cssProperties.map((prop) => {
      const propCopy = { ...prop };
      const snippetCompletion = createCompletionItem(propCopy, "MJML (CSS)");

      snippetCompletion.command = {
        command: "editor.action.triggerSuggest",
        title: "",
      };

      return snippetCompletion;
    });
  }

  private cssValueProvider(document: TextDocument, position: Position) {
    const isWithinComment = isWithinRegex(document, position, regex.cssComment);

    if (!workspaceConfig.snippetsInsideComments && isWithinComment) return;

    const snippetCompletions: ProviderResult<
      CompletionItem[] | CompletionList
    > = [];
    const range = document.getWordRangeAtPosition(
      position,
      regex.cssPropertyValue
    );

    if (!range) return;

    const typedText = document.getText(range);
    const addSemi = !typedText.includes(";");

    cssProperties.forEach((prop) => {
      const bodyRegex = new RegExp(
        `(?<!-)${prop.body.split(" $1").join("[^;]*")}?`
      );

      if (!bodyRegex.test(typedText)) return;

      prop.values.forEach((val) => {
        const body = addSemi ? val + ";" : val;
        const completionItem = createCompletionItem(
          { prefix: val, body },
          "",
          CompletionItemKind.Value
        );

        snippetCompletions.push(completionItem);
      });
    });

    return snippetCompletions;
  }

  private htmlTagProvider(document: TextDocument, position: Position) {
    if (!isWithinRegex(document, position, regex.htmlBlock)) return;
    if (isWithinRegex(document, position, regex.anyTag)) return;

    const isWithinComment = isWithinRegex(
      document,
      position,
      regex.htmlComment
    );

    if (!workspaceConfig.snippetsInsideComments && isWithinComment) return;

    return this.handleTagCompletion(
      document,
      position,
      htmlTags,
      "MJML (HTML)"
    );
  }

  private mjmlSnippetProvider(document: TextDocument, position: Position) {
    if (isWithinRegex(document, position, regex.styleBlock)) return;
    if (isWithinRegex(document, position, regex.htmlBlock)) return;
    if (isWithinRegex(document, position, regex.anyTag)) return;

    const isWithinComment = isWithinRegex(
      document,
      position,
      regex.htmlComment
    );

    if (!workspaceConfig.snippetsInsideComments && isWithinComment) return;

    return this.handleTagCompletion(
      document,
      position,
      mjmlSnippets,
      "MJML (Snippet)",
      CompletionItemKind.Snippet
    );
  }

  private handleTagCompletion(
    document: TextDocument,
    position: Position,
    tags: Snippet[],
    detail: string,
    kind?: number
  ) {
    const range = document.getWordRangeAtPosition(
      position,
      regex.typedOpeningTag
    );
    const typedText = range && document.getText(range);

    return tags.map((tag) => {
      const tagCopy = { ...tag };

      if (typedText && typedText[0] === "<") {
        tagCopy.body = tag.body.slice(1);
      }

      return createCompletionItem(tagCopy, detail, kind);
    });
  }
}
