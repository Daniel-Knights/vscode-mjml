import { Color } from "vscode";
import colors from "../resources/colors";

export type ColorConversionFunction = (match: RegExpMatchArray) => RGBA | void;
export type RGBA = { r: number; g: number; b: number; a: number };

export function colorToRGBA(rgba: Color): string {
  const { red, green, blue, alpha } = rgba;

  const convertColor = (col: number) => +(col * 255);

  const methodName = alpha < 1 ? "rgba(" : "rgb(";
  const r = convertColor(red) + ", ";
  const g = convertColor(green) + ", ";
  const b = convertColor(blue);
  const a = alpha === 1 ? ")" : !alpha ? ", 0)" : `, ${alpha.toFixed(2)})`;

  return methodName + r + g + b + a;
}

export function colorToHex(rgba: Color): string {
  const { red, green, blue, alpha } = rgba;

  const formatLength = (hex: string) =>
    !hex ? "00" : hex.length > 1 ? hex : hex + "0";
  const convertColor = (col: number) => (+(col * 255)).toString(16);

  const r = formatLength(convertColor(red));
  const g = formatLength(convertColor(green));
  const b = formatLength(convertColor(blue));
  const a = formatLength((+alpha.toPrecision(3)).toString(16).slice(2, 4));

  return `#${r}${g}${b}${alpha !== 1 ? a : ""}`;
}

// Adapted from https://gist.github.com/mjackson/5311256
export function colorToHsla(rgba: Color): string {
  const { red, green, blue, alpha } = rgba;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case red:
        h = (green - blue) / d + (green < blue ? 6 : 0);
        break;
      case green:
        h = (blue - red) / d + 2;
        break;
      case blue:
        h = (red - green) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  const methodName = "hsl" + (alpha < 1 ? "a(" : "(");
  const formattedAlpha =
    alpha === 1 ? ")" : alpha === 0 ? ", 0)" : `, ${alpha.toFixed(2)})`;

  return `${methodName}${h}, ${s}%, ${l}%${formattedAlpha}`;
}

export function rgbaToColor(match: RegExpMatchArray): RGBA {
  const formatRgbaValue = (num: string) => +num / 255;

  const r = formatRgbaValue(match[1]);
  const g = formatRgbaValue(match[2]);
  const b = formatRgbaValue(match[3]);
  const a = +match[4];

  return { r, g, b, a };
}

const formatHexSection = (hex: string) => parseInt(hex, 16) / 255;

export function hexToColor(match: RegExpMatchArray): RGBA {
  const splitCapture = match[1].split("");

  for (let i = 0; i <= 6; i += 2) {
    splitCapture.splice(i, 0, splitCapture[i]);
  }

  // 3 = #abcabc, 4 = #aabbccdd, 6 = #abcdef
  const handledLength =
    match[1].length === 3
      ? match[1] + match[1]
      : match[1].length === 4
      ? splitCapture.join("")
      : match[1];

  const r = formatHexSection(handledLength.slice(0, 2));
  const g = formatHexSection(handledLength.slice(2, 4));
  const b = formatHexSection(handledLength.slice(4, 6));
  const a = formatHexSection(handledLength.slice(6, 8));

  return { r, g, b, a };
}

// Adapted from https://gist.github.com/mjackson/5311256
export function hslaToColor(match: RegExpMatchArray): RGBA | void {
  const h = +match[1] / 360;
  const s = +match[2] / 100;
  const l = +match[3] / 100;
  const a = +match[4];
  let r;
  let g;
  let b;

  if (h > 1) return;

  function hue2rgb(p: number, q: number, t: number) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r, g, b, a };
}

export function nameToColor(match: RegExpMatchArray): RGBA {
  const hex = colors[match[0] as keyof typeof colors];

  const r = formatHexSection(hex.slice(1, 3));
  const g = formatHexSection(hex.slice(3, 5));
  const b = formatHexSection(hex.slice(5, 7));

  return { r, g, b, a: 1 };
}
