import {
  Color,
  ColorInformation,
  ColorPresentation,
  Disposable,
  Range,
  TextDocument,
  languages,
} from "vscode";
import {
  isWithinRegex,
  colorToRGBA,
  colorToHex,
  colorToHsla,
  rgbaToColor,
  hexToColor,
  hslaToColor,
  nameToColor,
  ColorConversionFunction,
  RGBA,
} from "./utils";
import regex from "./resources/regex";

export default class ColorProvider {
  constructor(subscriptions: Disposable[]) {
    subscriptions.push(this.colorProvider);
  }

  private colorProvider = languages.registerColorProvider("mjml", {
    provideDocumentColors: this.provideDocumentColors,
    provideColorPresentations: this.provideColorPresentations,
  });

  private provideDocumentColors(document: TextDocument) {
    const colorInformation: ColorInformation[] = [];
    const docText = document.getText();

    const rgbaMatches = [...docText.matchAll(regex.rgba)];
    const hexMatches = [...docText.matchAll(regex.hex)];
    const hslaMatches = [...docText.matchAll(regex.hsla)];
    const nameMatches = [...docText.matchAll(regex.colorNames)];

    const { positionAt } = document;

    function createColorInformation(rgba: RGBA, match: RegExpMatchArray) {
      const { r, g, b, a } = rgba;

      if (r > 1 || g > 1 || b > 1 || a > 1) return;

      const index = match.index || 0;
      const endIndex = index + match[0].length;
      const startPos = positionAt(index);
      const isWithinCssValue =
        isWithinRegex(document, startPos, regex.styleBlock) &&
        isWithinRegex(document, startPos, regex.curlyBrackets) &&
        isWithinRegex(document, startPos, regex.cssValue);
      const isWithinColorAttr = isWithinRegex(
        document,
        startPos,
        regex.colorAttr
      );

      if (!isWithinCssValue && !isWithinColorAttr) return;

      const handleAlpha = (a: number) => (a !== undefined && !isNaN(a) ? a : 1);

      const range = new Range(startPos, positionAt(endIndex));
      const info = new ColorInformation(
        range,
        new Color(r, g, b, handleAlpha(a))
      );

      colorInformation.push(info);
    }

    function handleMatches(
      match: RegExpMatchArray,
      cb: ColorConversionFunction
    ) {
      const convertedMatch = cb(match);

      convertedMatch && createColorInformation(convertedMatch, match);
    }

    rgbaMatches.forEach((match) => handleMatches(match, rgbaToColor));
    hexMatches.forEach((match) => handleMatches(match, hexToColor));
    hslaMatches.forEach((match) => handleMatches(match, hslaToColor));
    nameMatches.forEach((match) => handleMatches(match, nameToColor));

    return colorInformation;
  }

  private provideColorPresentations(color: Color) {
    const rgbaPresentation = new ColorPresentation(colorToRGBA(color));
    const hexPresentation = new ColorPresentation(colorToHex(color));
    const hslaPresentation = new ColorPresentation(colorToHsla(color));

    return [rgbaPresentation, hexPresentation, hslaPresentation];
  }
}
