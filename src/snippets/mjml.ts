const mjmlBlock = {
  open: "```mjml\n",
  close: "\n```",
};

export default [
  {
    prefix: "mj-all",
    body: "<mj-all $1 />",
    description: `${mjmlBlock.open}<mj-all $1 />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-attributes",
    body: "<mj-attributes>$1</mj-attributes>",
    description: `${mjmlBlock.open}<mj-attributes>$1</mj-attributes>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-body",
    body: "<mj-body>$1</mj-body>",
    description: `${mjmlBlock.open}<mj-body>$1</mj-body>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-breakpoint",
    body: '<mj-breakpoint width="$1" />',
    description: `${mjmlBlock.open}<mj-breakpoint width="$1" />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-button",
    body: "<mj-button>$1</mj-button>",
    description: `${mjmlBlock.open}<mj-button>$1</mj-button>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-carousel",
    body: "<mj-carousel>$1</mj-carousel>",
    description: `${mjmlBlock.open}<mj-carousel>$1</mj-carousel>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-carousel-image",
    body: '<mj-carousel-image src="$1" />',
    description: `${mjmlBlock.open}<mj-carousel-image src="$1" />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-class",
    body: '<mj-class name="$1" $2/>',
    description: `${mjmlBlock.open}<mj-class name="$1" $2/>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-column",
    body: "<mj-column>$1</mj-column>",
    description: `${mjmlBlock.open}<mj-column>$1</mj-column>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-divider",
    body: "<mj-divider $1 />",
    description: `${mjmlBlock.open}<mj-divider $1 />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-font",
    body: '<mj-font name="$1" href="$2" />',
    description: `${mjmlBlock.open}<mj-font name="$1" href="$2" />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-group",
    body: "<mj-group>$1</mj-group>",
    description: `${mjmlBlock.open}<mj-group>$1</mj-group>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-head",
    body: "<mj-head>$1</mj-head>",
    description: `${mjmlBlock.open}<mj-head>$1</mj-head>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-hero",
    body: "<mj-hero>$1</mj-hero>",
    description: `${mjmlBlock.open}<mj-hero>$1</mj-hero>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-image",
    body: '<mj-image src="$1" alt="$2" />',
    description: `${mjmlBlock.open}<mj-image src="$1" alt="$2" />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-include",
    body: '<mj-include path="$1" />',
    description: `${mjmlBlock.open}<mj-include path="$1" />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-raw",
    body: "<mj-raw>$1</mj-raw>",
    description: `${mjmlBlock.open}<mj-raw>$1</mj-raw>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-section",
    body: "<mj-section>$1</mj-section>",
    description: `${mjmlBlock.open}<mj-section>$1</mj-section>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-social",
    body: "<mj-social>$1</mj-social>",
    description: `${mjmlBlock.open}<mj-social>$1</mj-social>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-social-element",
    body: "<mj-social-element>$1</mj-social-element>",
    description: `${mjmlBlock.open}<mj-social-element>$1</mj-social-element>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-style",
    body: "<mj-style>$1</mj-style>",
    description: `${mjmlBlock.open}<mj-style>$1</mj-style>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-table",
    body: "<mj-table>$1</mj-table>",
    description: `${mjmlBlock.open}<mj-table>$1</mj-table>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-text",
    body: "<mj-text>$1</mj-text>",
    description: `${mjmlBlock.open}<mj-text>$1</mj-text>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-title",
    body: "<mj-title>$1</mj-title>",
    description: `${mjmlBlock.open}<mj-title>$1</mj-title>${mjmlBlock.close}`,
  },
  {
    prefix: "mjml",
    body: "<mjml>$1</mjml>",
    description: `${mjmlBlock.open}<mjml>$1</mjml>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-preview",
    body: "<mj-preview>$1</mj-preview>",
    description: `${mjmlBlock.open}<mj-preview>$1</mj-preview>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-spacer",
    body: "<mj-spacer />",
    description: `${mjmlBlock.open}<mj-spacer />${mjmlBlock.close}`,
  },
  {
    prefix: "mj-wrapper",
    body: "<mj-wrapper>$1</mj-wrapper>",
    description: `${mjmlBlock.open}<mj-wrapper>$1</mj-wrapper>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-accordion",
    body: "<mj-accordion>$1</mj-accordion>",
    description: `${mjmlBlock.open}<mj-accordion>$1</mj-accordion>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-accordion-element",
    body: "<mj-accordion-element>\n  <mj-accordion-title>$1</mj-accordion-title>\n  <mj-accordion-text>$2</mj-accordion-text>\n</mj-accordion-element>",
    description: `MJML Accordion Element with title and text\n\n${mjmlBlock.open}<mj-accordion-element>\n  <mj-accordion-title>$1</mj-accordion-title>\n  <mj-accordion-text>$2</mj-accordion-text>\n</mj-accordion-element>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-navbar",
    body: "<mj-navbar>$1</mj-navbar>",
    description: `${mjmlBlock.open}<mj-navbar>$1</mj-navbar>${mjmlBlock.close}`,
  },
  {
    prefix: "mj-navbar-link",
    body: "<mj-navbar-link>$1</mj-navbar-link>",
    description: `${mjmlBlock.open}<mj-navbar-link>$1</mj-navbar-link>${mjmlBlock.close}`,
  },
  {
    prefix: "mjml-boilerplate",
    body: "<mjml>\n  <mj-head>\n    <mj-title>$0</mj-title>\n    <mj-attributes>\n      $1\n    </mj-attributes>\n  </mj-head>\n  <mj-body>\n    <mj-section>\n      <mj-column>\n        $2\n      </mj-column>\n    </mj-section>\n  </mj-body>\n</mjml>",
    description: `Basic MJML Template\n\n${mjmlBlock.open}<mjml>\n  <mj-head>\n    <mj-title>$0</mj-title>\n    <mj-attributes>\n      $1\n    </mj-attributes>\n  </mj-head>\n  <mj-body>\n    <mj-section>\n      <mj-column>\n        $2\n      </mj-column>\n    </mj-section>\n  </mj-body>\n</mjml>${mjmlBlock.close}`,
  },
  {
    prefix: "mjml-render",
    body: "<!-- mjml-render -->",
    description: `${mjmlBlock.open}<!-- mjml-render -->${mjmlBlock.close}\n\nMagic comment to render components without \`mjml\` and \`mj-body\` tags`,
  },
  {
    prefix: "mj-head-render",
    body: "<!-- mj-head-render\n$1\n-->",
    description: `${mjmlBlock.open}<!-- mj-head-render\n$1\n-->${mjmlBlock.close}\n\nMagic comment to dynamically insert \`mj-head\` elements when using \`mjml-render\``,
  },
  {
    prefix: "mj-section-column-text",
    body: "<mj-section>\n  <mj-column>\n    <mj-text>$1</mj-text>\n  </mj-column>\n</mj-section>",
    description: `Nested \`mj-text\` inside \`mj-column\` and \`mj-section\`\n\n${mjmlBlock.open}<mj-section>\n  <mj-column>\n    <mj-text>$1</mj-text>\n  </mj-column>\n</mj-section>${mjmlBlock.close}`,
  },
];
