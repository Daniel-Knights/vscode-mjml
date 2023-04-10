import { ExtensionContext, workspace } from "vscode";

import Beautify from "./beautify";
import Copy from "./copy";
import Export from "./export";
import Linter from "./linter";
import Preview from "./preview";
import Version from "./version";
import Completion from "./completion";
import Color from "./color";
import LanguageConfig from "./language";
import LinkedEditing from "./linked";
import PathLink from "./path";

export let workspaceConfig = workspace.getConfiguration("mjml");

workspace.onDidChangeConfiguration((e) => {
  if (!e.affectsConfiguration("mjml")) return;

  workspaceConfig = workspace.getConfiguration("mjml");
});

export function activate(context: ExtensionContext): void {
  const { subscriptions } = context;

  new Beautify(subscriptions);
  new Copy(subscriptions);
  new Export(subscriptions);
  new Linter(subscriptions);
  new Preview(subscriptions);
  new Version(subscriptions);
  new Completion(subscriptions);
  new Color(subscriptions);
  new LanguageConfig(subscriptions);
  new LinkedEditing(subscriptions);
  new PathLink(subscriptions);
}
