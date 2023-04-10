import { Disposable, IndentAction, languages } from "vscode";
import regex from "./resources/regex";

const { increaseIndentPattern, decreaseIndentPattern, wordPattern } = regex;

// Adapted from https://tinyurl.com/u8274e3x
export default class LanguageConfig {
  constructor(subscriptions: Disposable[]) {
    subscriptions.push(this.configDisposable);
  }

  private readonly ignoreTags =
    "area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr";

  private configDisposable = languages.setLanguageConfiguration("mjml", {
    indentationRules: { increaseIndentPattern, decreaseIndentPattern },
    wordPattern,
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${this.ignoreTags}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>/i,
        action: { indentAction: IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${this.ignoreTags}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        action: { indentAction: IndentAction.Indent },
      },
    ],
  });
}
