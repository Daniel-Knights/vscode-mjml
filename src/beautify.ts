import {
  commands,
  Disposable,
  languages,
  Position,
  Range,
  TextDocument,
  TextEdit,
  TextEditor,
  TextEditorEdit,
  window,
} from "vscode";

import { beautifyHTML, isMJMLFile } from "./helper";

export default class Beautify {
  constructor(subscriptions: Disposable[]) {
    subscriptions.push(
      languages.registerDocumentFormattingEditProvider(
        { language: "mjml", scheme: "file" },
        {
          provideDocumentFormattingEdits(document: TextDocument): TextEdit[] {
            const docText = document.getText();
            const formattedDocument: string | undefined =
              beautifyHTML(docText) || docText;

            return [TextEdit.replace(getRange(document), formattedDocument)];
          },
        }
      ),

      commands.registerCommand("mjml.beautify", this.beautify)
    );
  }

  private beautify(): void {
    const activeTextEditor: TextEditor | undefined = window.activeTextEditor;

    if (activeTextEditor && isMJMLFile(activeTextEditor.document)) {
      activeTextEditor.edit((editBuilder: TextEditorEdit) => {
        const formattedDocument: string | undefined = beautifyHTML(
          activeTextEditor.document.getText()
        );

        if (!formattedDocument) return;

        editBuilder.replace(
          getRange(activeTextEditor.document),
          formattedDocument
        );
      });
    } else {
      window.showWarningMessage("This is not a MJML document!");

      return;
    }
  }
}

function getRange(document: TextDocument): Range {
  const lineCount = document.lineCount - 1;

  return new Range(
    new Position(0, 0),
    new Position(lineCount, document.lineAt(lineCount).text.length)
  );
}
