import {
  Disposable,
  languages,
  DocumentLink,
  Range,
  TextDocument,
  Uri,
} from "vscode";
import path = require("path");

import { isWithinRegex } from "./utils";
import regex from "./resources/regex";

export default class PathLink {
  constructor(subscriptions: Disposable[]) {
    const provider = languages.registerDocumentLinkProvider("mjml", {
      provideDocumentLinks: this.provideDocumentLinks.bind(this),
    });

    subscriptions.push(provider);
  }

  private provideDocumentLinks(document: TextDocument) {
    const docText = document.getText();
    const attrMatches = docText.matchAll(regex.relativeAttrPaths);
    const cssMatches = docText.matchAll(regex.relativeCssPaths);

    const attrLinks = [...attrMatches]
      .map((match) => {
        if (!match.index) return;

        const position = document.positionAt(match.index);

        if (!isWithinRegex(document, position, regex.anyTag)) return;
        if (isWithinRegex(document, position, regex.htmlComment)) return;

        return this.locatePath(document, match);
      })
      .filter((link) => link);

    const cssLinks = [...cssMatches]
      .map((match) => {
        if (!match.index) return;

        const position = document.positionAt(match.index);

        if (!isWithinRegex(document, position, regex.styleBlock)) return;
        if (isWithinRegex(document, position, regex.cssComment)) return;
        if (!isWithinRegex(document, position, regex.cssValue)) return;

        return this.locatePath(document, match);
      })
      .filter((link) => link);

    return [...attrLinks, ...cssLinks] as DocumentLink[];
  }

  private locatePath(document: TextDocument, match: RegExpMatchArray) {
    if (!match.index) return;

    const startPos = document.positionAt(match.index);
    const endPos = document.positionAt(match.index + match[0].length);

    const matchSections = match[0].split("/");
    let level = 0;

    matchSections.forEach((section) => {
      if (section === "..") level += 1;
    });

    const rootPath = document.fileName.split(path.sep);

    if (!rootPath) return;

    rootPath.pop();

    for (let i = 0; i < level; i++) {
      rootPath.pop();
      matchSections.shift();
    }

    const uri = Uri.file(
      path.join(rootPath.join("/"), matchSections.join("/"))
    );

    return new DocumentLink(new Range(startPos, endPos), uri);
  }
}
