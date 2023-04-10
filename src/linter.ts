import {
  Diagnostic,
  DiagnosticCollection,
  DiagnosticSeverity,
  Disposable,
  languages,
  Position,
  Range,
  TextDocument,
  TextDocumentChangeEvent,
  TextEditor,
  window,
  workspace,
} from "vscode";

import { workspaceConfig } from "./extension";
import { getPath, mjmlToHtml } from "./helper";
export default class Linter {
  private diagnosticCollection!: DiagnosticCollection;

  constructor(subscriptions: Disposable[]) {
    if (!workspaceConfig.lintEnable) return;

    this.diagnosticCollection = languages.createDiagnosticCollection("mjml");

    subscriptions.push(
      this.diagnosticCollection,

      window.onDidChangeActiveTextEditor((editor?: TextEditor) => {
        if (!editor || !editor.document) return;

        this.lintDocument(editor.document);
      }),

      workspace.onDidChangeTextDocument((event?: TextDocumentChangeEvent) => {
        const { lintWhenTyping } = workspaceConfig;

        if (!event || !event.document || !lintWhenTyping) return;

        this.lintDocument(event.document);
      }),

      workspace.onDidCloseTextDocument((document?: TextDocument) => {
        if (!document) return;

        this.diagnosticCollection.delete(document.uri);
      }),

      workspace.onDidOpenTextDocument((document?: TextDocument) => {
        if (!document) return;

        this.lintDocument(document);
      }),

      workspace.onDidSaveTextDocument((document?: TextDocument) => {
        if (!document) return;

        this.lintDocument(document);
      })
    );

    // Lint all open mjml documents
    workspace.textDocuments.forEach(this.lintDocument, this);
  }

  public dispose(): void {
    this.diagnosticCollection.clear();
    this.diagnosticCollection.dispose();
  }

  private lintDocument(document: TextDocument): void {
    if (document.languageId !== "mjml") return;

    const diagnostics: Diagnostic[] = [];

    try {
      const docText = document.getText();
      const errors = mjmlToHtml(
        docText,
        false,
        false,
        getPath(),
        "strict"
      ).errors;

      if (errors.length) {
        errors.forEach((error) => {
          const line: number = error.line - 1;
          const lineText: string = document.lineAt(line).text;

          diagnostics.push(
            new Diagnostic(
              new Range(
                new Position(line, lineText.indexOf("<")),
                new Position(line, lineText.length)
              ),
              error.message,
              DiagnosticSeverity.Error
            )
          );
        });
      }

      this.diagnosticCollection.set(document.uri, diagnostics);
    } catch (ex) {
      this.diagnosticCollection.set(document.uri, diagnostics);
    }
  }
}
