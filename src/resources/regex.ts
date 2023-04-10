export default {
  rgba: /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(?:\d|\.)+)?\)/g,
  hex: /(?:#)((?:[a-fA-F0-9]{2}){3,4}|[a-fA-F0-9]{3,4})(?=\s|;|"|,|\))/g,
  hsla: /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*(?:\d|\.)+)?\)/g,
  colorNames:
    /\b(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|goldenrod|gold|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b(?!-|:)/g,
  anyTag:
    /(?<=<(?!!--)\/?)(?:"[^"]*?"['"]*?|'[^']*?'['"]*?|[^'"<>])*?\/?(?=>)/g,
  typedOpeningTag: /(?<=<)[a-z-]+/,
  typedClosingTag: /(?<=<\/)[a-z-]+/,
  curlyBrackets: /(?<={)[^}]*(?=})/g,
  cssValue: /(?<=:)[^;]*(?=;)/g,
  cssPropertyValue: /(?:\w|-)*:[^;]*;/,
  colorAttr:
    /(?<=<[a-z][^>]*?[-\s](?:color|style|-?border(?:-(?:top|left|right|bottom))?)\s*?=\s*?")[^"]*?(?="[^>]*?>)/g,
  htmlBlock:
    /(?<=<mj-t(?:ext|able)(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])*(?<!\/)>)[\s\S]*?(?=<\/mj-t(?:ext|able)\s*>)/g,
  styleBlock:
    /(?<=<mj-style(?:\s+inline\s*=\s*"\s*[a-z]*\s*")?\s*>)[^<]*?(?=<\/mj-style>)/g,
  htmlComment: /(?<=<!--)[\s\S]*?(?=-->)/g,
  cssComment: /(?<=\/\*)[\s\S]*?(?=\*\/)/g,
  relativeAttrPaths:
    /(?<=\b(?:path|(?:thumbnails-)?src|(?:background|base|icon-(?:un)?wrapped)-url|(?:left|right)-icon)\b="(?:\.\.|\.)?)(?!https?:\/\/|www\.)[^"]+(?=")/g,
  relativeCssPaths: /(?<=url\(["']?)(?!https?:\/\/|www\.)[^)"'}]+(?=["']?\))/g,
  increaseIndentPattern:
    /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|keygen|link|menuitem|meta|param|source|track|wbr)\b|[^>]*\/>)([-_.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
  decreaseIndentPattern: /^\s*(<\/(?!html)[-_.A-Za-z0-9]+\b[^>]*>|-->|\})/,
  wordPattern: /(-?\d*\.\d\w*)|([^`~!@$^&*()=+[{\]}\\|;:'",.<>/\s]+)/g,

  /* `start` and `end` patterns to be joined around dynamic values */
  dynamicPatterns: {
    openingTag: {
      start: `(?<=<(?:`,
      end: `)(?!\\/)\\s)(?:"[^"]*?"['"]*?|'[^']*?'['"]*?|[^'">])*?(?=\\/?>)`,
    },
  },
};
