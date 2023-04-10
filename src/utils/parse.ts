import { TextDocument, Position } from "vscode";

type Delimiters = { start: string; end: string };
type TagIndex = { startIndex: number; endIndex: number };
type NodeIndex = { nodeStart: TagIndex; nodeEnd: TagIndex };

/**
 * Determines if the given position is within any matched portion of text.
 */
export function isWithinRegex(
  document: TextDocument,
  position: Position,
  regex: RegExp
): boolean {
  const docText = document.getText();
  const matches = [...docText.matchAll(regex)];

  if (!matches) return false;

  const offset = document.offsetAt(position);

  let isWithin = false;

  matches.forEach((block) => {
    if (isWithin) return;

    const blockIndex = block.index || docText.indexOf(block[0]);
    const blockLength = blockIndex + block[0].length;

    isWithin = offset >= blockIndex && offset <= blockLength;
  });

  return isWithin;
}

/**
 * Recursively match nested tags.
 *
 * Adapted from https://blog.stevenlevithan.com/archives/javascript-match-nested
 *
 * @param delimiters - `{ start: string, end: string }`
 * @returns the matched indexes of each tag
 */
export function getTagIndexes(
  matchString: string,
  delimiters: Delimiters
): NodeIndex | void {
  const { start, end } = delimiters;
  const iterator = new RegExp(`${start}|${end}`, "g");

  let openTokens = 0;
  let nodeStart;
  let match;

  while ((match = iterator.exec(matchString))) {
    if (new RegExp(delimiters.start).test(match[0])) {
      if (!openTokens) {
        nodeStart = { startIndex: match.index, endIndex: iterator.lastIndex };
      }

      openTokens += 1;
    } else if (openTokens) {
      openTokens -= 1;

      if (!openTokens && nodeStart) {
        const nodeEnd = {
          startIndex: match.index,
          endIndex: iterator.lastIndex,
        };

        return { nodeStart, nodeEnd };
      }
    }
  }
}
