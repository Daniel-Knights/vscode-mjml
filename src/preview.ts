import {
  commands,
  Disposable,
  TextDocument,
  TextDocumentChangeEvent,
  TextEditor,
  ViewColumn,
  WebviewPanel,
  window,
  workspace,
} from "vscode";
import { basename } from "path";

import { fixImages, isMJMLFile, mjmlToHtml } from "./helper";
import { workspaceConfig } from "./extension";

export default class Preview {
  private openedDocuments: TextDocument[] = [];
  private previewOpen = false;
  private webview: WebviewPanel | undefined;

  constructor(private subscriptions: Disposable[]) {
    this.subscriptions.push(
      commands.registerCommand("mjml.previewToSide", () => {
        if (window.activeTextEditor) {
          if (this.openedDocuments.length) this.openedDocuments = [];

          this.previewOpen = true;
          this.displayWebView(window.activeTextEditor.document);
        } else {
          window.showErrorMessage(
            "Active editor doesn't show a MJML document."
          );
        }
      }),

      workspace.onDidOpenTextDocument((document?: TextDocument) => {
        const { autoPreview } = workspaceConfig;

        if (!document || !this.previewOpen || !autoPreview) return;

        this.displayWebView(document);
      }),

      window.onDidChangeActiveTextEditor((editor?: TextEditor) => {
        const { autoPreview } = workspaceConfig;

        if (!editor || !this.previewOpen || !autoPreview) return;

        this.displayWebView(editor.document);
      }),

      workspace.onDidChangeTextDocument((event?: TextDocumentChangeEvent) => {
        const { updateWhenTyping } = workspaceConfig;

        if (!event || !this.previewOpen || !updateWhenTyping) return;

        this.displayWebView(event.document);
      }),

      workspace.onDidSaveTextDocument((document?: TextDocument) => {
        if (!document || !this.previewOpen) return;

        this.displayWebView(document);
      }),

      workspace.onDidCloseTextDocument((document?: TextDocument) => {
        if (!document || !this.previewOpen || !this.webview) return;

        this.removeDocument(document.fileName);

        const { autoClosePreview } = workspaceConfig;

        if (this.openedDocuments.length !== 0 || !autoClosePreview) return;

        this.dispose();
      })
    );
  }

  public dispose(): void {
    if (this.webview === undefined) return;

    this.webview.dispose();
  }

  private displayWebView(document: TextDocument): void {
    if (!isMJMLFile(document)) return;

    const activeTextEditor: TextEditor | undefined = window.activeTextEditor;
    if (!activeTextEditor || !activeTextEditor.document) return;

    const { switchOnSeparateFileChange, preserveFocus } = workspaceConfig;
    const originalFilename =
      this.openedDocuments[0] &&
      this.openedDocuments[0].fileName.split(/.*\//)[1];
    const newFilename = basename(activeTextEditor.document.fileName);
    const content: string = this.getContent(document);
    const label = `MJML Preview - ${
      switchOnSeparateFileChange ? newFilename : originalFilename || newFilename
    }`;

    if (!this.webview) {
      this.webview = window.createWebviewPanel(
        "mjml-preview",
        label,
        { viewColumn: ViewColumn.Two, preserveFocus },
        { retainContextWhenHidden: true }
      );

      this.webview.webview.html = content;

      this.webview.onDidDispose(
        () => {
          this.webview = undefined;
          this.previewOpen = false;
        },
        null,
        this.subscriptions
      );
    } else {
      this.webview.title = label;
      this.webview.webview.html = content;
    }
  }

  private getContent(document: TextDocument): string {
    if (!workspaceConfig.switchOnSeparateFileChange) {
      document = this.openedDocuments[0] || document;
    }

    const docText = this.wrapInMjmlTemplate(document.getText());
    const html: string = mjmlToHtml(
      docText,
      false,
      false,
      document.uri.fsPath
    ).html;

    if (html) {
      this.addDocument(document);

      return this.setBackgroundColor(fixImages(html, document.uri.fsPath));
    }

    return this.error("Active editor doesn't show a MJML document.");
  }

  private wrapInMjmlTemplate(docText: string): string {
    if (/<!--\s*mjml-render\s*-->/.test(docText)) {
      const mjHead = docText.match(/(?<=<!-- mj-head-render)(\s|\S)*?(?=-->)/);

      return `<mjml>${
        mjHead ? `<mj-head>${mjHead[0]}</mj-head>` : ""
      }<mj-body>${docText}</mj-body></mjml>`;
    }

    return docText;
  }

  private setBackgroundColor(html: string): string {
    const { previewBackgroundColor } = workspaceConfig;

    if (previewBackgroundColor) {
      const tmp: RegExpExecArray | null = /<.*head.*>/i.exec(html);

      if (tmp && tmp[0]) {
        html = html.replace(
          tmp[0],
          `${tmp[0]}\n<style>
            html, body { background-color: ${previewBackgroundColor}; }
          </style>`
        );
      }
    }

    return html;
  }

  private error(error: string): string {
    return `<body>${error}</body>`;
  }

  private addDocument(document: TextDocument): void {
    if (this.openedDocuments.indexOf(document) !== -1) return;

    this.openedDocuments.push(document);
  }

  private removeDocument(fileName: string): void {
    this.openedDocuments = this.openedDocuments.filter(
      (file: TextDocument) => file.fileName !== fileName
    );
  }
}
