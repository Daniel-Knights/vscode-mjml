import {
  Disposable,
  languages,
  LinkedEditingRanges,
  Range,
  Position,
  TextDocument,
} from "vscode";
import { isWithinRegex, getTagIndexes, reverseString } from "./utils";
import regex from "./resources/regex";

export default class LinkedEditing {
  constructor(subscriptions: Disposable[]) {
    const provider = languages.registerLinkedEditingRangeProvider("mjml", {
      provideLinkedEditingRanges: this.provideLinkedEditingRanges,
    });

    subscriptions.push(provider);
  }

  private provideLinkedEditingRanges(
    document: TextDocument,
    position: Position
  ) {
    const { styleBlock, htmlComment, typedOpeningTag, typedClosingTag } = regex;

    if (isWithinRegex(document, position, styleBlock)) return;
    if (isWithinRegex(document, position, htmlComment)) return;

    const openTagRange = document.getWordRangeAtPosition(
      position,
      typedOpeningTag
    );
    const closingTagRange = document.getWordRangeAtPosition(
      position,
      typedClosingTag
    );

    if (openTagRange) {
      const offset = document.offsetAt(openTagRange.start) - "<".length;
      const docText = document.getText().slice(offset);
      const typedText = document.getText(openTagRange);

      const tagIndexes = getTagIndexes(docText, {
        start: `<${typedText}(\\s+[^>]*)?>`,
        end: `(?<=</)${typedText}(?=\\s*>)`,
      });

      if (!tagIndexes) return;

      const endRange = new Range(
        document.positionAt(tagIndexes.nodeEnd.startIndex + offset),
        document.positionAt(tagIndexes.nodeEnd.endIndex + offset)
      );

      return new LinkedEditingRanges([openTagRange, endRange]);
    } else if (closingTagRange) {
      const offset = document.offsetAt(closingTagRange.end);
      const docText = document.getText();
      const reversedDocText = reverseString(docText.slice(0, offset));
      const reversedTypedText = reverseString(
        document.getText(closingTagRange)
      );

      // Account for extra whitespace
      const docTextFromOffset = docText.slice(offset);
      const closingTagBracket = docTextFromOffset.match(/\s*>/);
      if (!closingTagBracket) return;

      const fullText = reverseString(closingTagBracket[0]) + reversedDocText;
      const tagIndexes = getTagIndexes(fullText, {
        start: `>\\s*${reversedTypedText}/<`,
        end: `(?<=>([^<]*\\s+)?)${reversedTypedText}(?=<)`,
      });

      if (!tagIndexes) return;

      const { nodeEnd } = tagIndexes;
      const closingLength = closingTagBracket[0].length;

      const endRange = new Range(
        document.positionAt(offset - nodeEnd.startIndex + closingLength),
        document.positionAt(offset - nodeEnd.endIndex + closingLength)
      );

      return new LinkedEditingRanges([closingTagRange, endRange]);
    }

    return;
  }
}
