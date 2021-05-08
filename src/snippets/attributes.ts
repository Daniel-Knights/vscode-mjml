const htmlTags = '(?!mj-)[a-z-]+'

export default [
  {
    prefix: 'align',
    body: 'align="$1"',
    description: 'align attribute: `align=""`',
    els: [
      'mj-button',
      'mj-carousel',
      'mj-divider',
      'mj-image',
      'mj-navbar',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'alt',
    body: 'alt="$1"',
    description: 'alt attribute: `alt=""`',
    els: ['mj-carousel-image', 'mj-image', 'mj-social-element', 'img', 'input'],
  },
  {
    prefix: 'background-color',
    body: 'background-color="$1"',
    description: 'background-color attribute: `background-color=""`',
    els: [
      'mj-body',
      'mj-accordion-element',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-carousel',
      'mj-column',
      'mj-group',
      'mj-hero',
      'mj-section',
      'mj-social-element',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'background-height',
    body: 'background-height="$1"',
    description: 'background-height attribute: `background-height=""`',
    els: ['mj-hero'],
  },
  {
    prefix: 'background-position',
    body: 'background-position="$1"',
    description: 'background-position attribute: `background-position=""`',
    els: ['mj-hero', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-position-x',
    body: 'background-position-x="$1"',
    description: 'background-position-x attribute: `background-position-x=""`',
    els: ['mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-position-y',
    body: 'background-position-y="$1"',
    description: 'background-position-y attribute: `background-position-y=""`',
    els: ['mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-repeat',
    body: 'background-repeat="$1"',
    description: 'background-repeat attribute: `background-repeat=""`',
    els: ['mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-size',
    body: 'background-size="$1"',
    description: 'background-size attribute: `background-size=""`',
    els: ['mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-url',
    body: 'background-url="$1"',
    description: 'background-url attribute: `background-url=""`',
    els: ['mj-hero', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'background-width',
    body: 'background-width="$1"',
    description: 'background-width attribute: `background-width=""`',
    els: ['mj-hero'],
  },
  {
    prefix: 'base-url',
    body: 'base-url="$1"',
    description: 'base-url attribute: `base-url=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'border',
    body: 'border="$1"',
    description: 'border attribute: `border=""`',
    els: [
      'mj-accordion',
      'mj-accordion-element',
      'mj-button',
      'mj-column',
      'mj-image',
      'mj-section',
      'mj-table',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'border-bottom',
    body: 'border-bottom="$1"',
    description: 'border-bottom attribute: `border-bottom=""`',
    els: ['mj-button', 'mj-column', 'mj-image', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'border-color',
    body: 'border-color="$1"',
    description: 'border-color attribute: `border-color=""`',
    els: ['mj-divider'],
  },
  {
    prefix: 'border-left',
    body: 'border-left="$1"',
    description: 'border-left attribute: `border-left=""`',
    els: ['mj-button', 'mj-column', 'mj-image', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'border-radius',
    body: 'border-radius="$1"',
    description: 'border-radius attribute: `border-radius=""`',
    els: [
      'mj-button',
      'mj-carousel',
      'mj-column',
      'mj-image',
      'mj-hero',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'border-right',
    body: 'border-right="$1"',
    description: 'border-right attribute: `border-right=""`',
    els: ['mj-button', 'mj-column', 'mj-image', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'border-style',
    body: 'border-style="$1"',
    description: 'border-style attribute: `border-style=""`',
    els: ['mj-divider'],
  },
  {
    prefix: 'border-top',
    body: 'border-top="$1"',
    description: 'border-top attribute: `border-top=""`',
    els: ['mj-button', 'mj-column', 'mj-image', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'border-width',
    body: 'border-width="$1"',
    description: 'border-width attribute: `border-width=""`',
    els: ['mj-divider'],
  },
  {
    prefix: 'cellpadding',
    body: 'cellpadding="$1"',
    description: 'cellpadding attribute: `cellpadding=""`',
    els: ['mj-table'],
  },
  {
    prefix: 'cellspacing',
    body: 'cellspacing="$1"',
    description: 'cellspacing attribute: `cellspacing=""`',
    els: ['mj-table'],
  },
  {
    prefix: 'class',
    body: 'class="$1"',
    description: 'class attribute: `class=""`',
    els: [htmlTags],
    noMjClass: true,
  },
  {
    prefix: 'color',
    body: 'color="$1"',
    description: 'color attribute: `color=""`',
    els: [
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'container-background-color',
    body: 'container-background-color="$1"',
    description: 'container-background-color attribute: `container-background-color=""`',
    els: [
      'mj-accordion',
      'mj-button',
      'mj-divider',
      'mj-image',
      'mj-social',
      'mj-spacer',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'css-class',
    body: 'css-class="$1"',
    description: 'css-class attribute: `css-class=""`',
    els: [
      'mj-body',
      'mj-accordion',
      'mj-accordion-element',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-carousel',
      'mj-carousel-image',
      'mj-column',
      'mj-divider',
      'mj-group',
      'mj-image',
      'mj-navbar',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'direction',
    body: 'direction="$1"',
    description: 'direction attribute: `direction=""`',
    els: ['mj-group', 'mj-section'],
  },
  {
    prefix: 'fluid-on-mobile',
    body: 'fluid-on-mobile="$1"',
    description: 'fluid-on-mobile attribute: `fluid-on-mobile=""`',
    els: ['mj-image'],
  },
  {
    prefix: 'font-family',
    body: 'font-family="$1"',
    description: 'font-family attribute: `font-family=""`',
    els: [
      'mj-accordion',
      'mj-accordion-element',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'font-size',
    body: 'font-size="$1"',
    description: 'font-size attribute: `font-size=""`',
    els: [
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'font-style',
    body: 'font-style="$1"',
    description: 'font-style attribute: `font-style=""`',
    els: [
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'font-weight',
    body: 'font-weight="$1"',
    description: 'font-weight attribute: `font-weight=""`',
    els: [
      'mj-accordion-text',
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-text',
    ],
  },
  {
    prefix: 'full-width',
    body: 'full-width="$1"',
    description: 'full-width attribute: `full-width=""`',
    els: ['mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'hamburger',
    body: 'hamburger="$1"',
    description: 'hamburger attribute: `hamburger=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'height',
    body: 'height="$1"',
    description: 'height attribute: `height=""`',
    els: [
      'mj-button',
      'mj-hero',
      'mj-image',
      'mj-spacer',
      'mj-text',
      'iframe',
      'img',
      'input',
      'object',
    ],
  },
  {
    prefix: 'href',
    body: 'href="$1"',
    description: 'href attribute: `href=""`',
    els: [
      'mj-font',
      'mj-button',
      'mj-carousel-image',
      'mj-image',
      'mj-navbar-link',
      'mj-social-element',
      'a',
    ],
  },
  {
    prefix: 'id',
    body: 'id="$1"',
    description: 'id attribute: `id=""`',
    els: [htmlTags],
    noMjClass: true,
  },
  {
    prefix: 'ico-align',
    body: 'ico-align="$1"',
    description: 'ico-align attribute: `ico-align=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-close',
    body: 'ico-close="$1"',
    description: 'ico-close attribute: `ico-close=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-color',
    body: 'ico-color="$1"',
    description: 'ico-color attribute: `ico-color=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-font-family',
    body: 'ico-font-family="$1"',
    description: 'ico-font-family attribute: `ico-font-family=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-font-size',
    body: 'ico-font-size="$1"',
    description: 'ico-font-size attribute: `ico-font-size=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-line-height',
    body: 'ico-line-height="$1"',
    description: 'ico-line-height attribute: `ico-line-height=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-open',
    body: 'ico-open="$1"',
    description: 'ico-open attribute: `ico-open=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-padding',
    body: 'ico-padding="$1"',
    description: 'ico-padding attribute: `ico-padding=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-padding-bottom',
    body: 'ico-padding-bottom="$1"',
    description: 'ico-padding-bottom attribute: `ico-padding-bottom=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-padding-left',
    body: 'ico-padding-left="$1"',
    description: 'ico-padding-left attribute: `ico-padding-left=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-padding-right',
    body: 'ico-padding-right="$1"',
    description: 'ico-padding-right attribute: `ico-padding-right=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-padding-top',
    body: 'ico-padding-top="$1"',
    description: 'ico-padding-top attribute: `ico-padding-top=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-text-decoration',
    body: 'ico-text-decoration="$1"',
    description: 'ico-text-decoration attribute: `ico-text-decoration=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'ico-text-transform',
    body: 'ico-text-transform="$1"',
    description: 'ico-text-transform attribute: `ico-text-transform=""`',
    els: ['mj-navbar'],
  },
  {
    prefix: 'icon-align',
    body: 'icon-align="$1"',
    description: 'icon-align attribute: `icon-align=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'icon-height',
    body: 'icon-height="$1"',
    description: 'icon-height attribute: `icon-height=""`',
    els: ['mj-accordion', 'mj-accordion-element', 'mj-social', 'mj-social-element'],
  },
  {
    prefix: 'icon-padding',
    body: 'icon-padding="$1"',
    description: 'icon-padding attribute: `icon-padding=""`',
    els: ['mj-social', 'mj-social-element'],
  },
  {
    prefix: 'icon-position',
    body: 'icon-position="$1"',
    description: 'icon-position attribute: `icon-position=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'icon-size',
    body: 'icon-size="$1"',
    description: 'icon-size attribute: `icon-size=""`',
    els: ['mj-social', 'mj-social-element'],
  },
  {
    prefix: 'icon-unwrapped-alt',
    body: 'icon-unwrapped-alt="$1"',
    description: 'icon-unwrapped-alt attribute: `icon-unwrapped-alt=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'icon-unwrapped-url',
    body: 'icon-unwrapped-url="$1"',
    description: 'icon-unwrapped-url attribute: `icon-unwrapped-url=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'icon-width',
    body: 'icon-width="$1"',
    description: 'icon-width attribute: `icon-width=""`',
    els: ['mj-accordion', 'mj-accordion-element', 'mj-carousel'],
  },
  {
    prefix: 'icon-wrapped-alt',
    body: 'icon-wrapped-alt="$1"',
    description: 'icon-wrapped-alt attribute: `icon-wrapped-alt=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'icon-wrapped-url',
    body: 'icon-wrapped-url="$1"',
    description: 'icon-wrapped-url attribute: `icon-wrapped-url=""`',
    els: ['mj-accordion', 'mj-accordion-element'],
  },
  {
    prefix: 'inline',
    body: 'inline="$1"',
    description: 'inline attribute: `inline=""`',
    els: ['mj-style'],
  },
  {
    prefix: 'inner-background-color',
    body: 'inner-background-color="$1"',
    description: 'inner-background-color attribute: `inner-background-color=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border',
    body: 'inner-border="$1"',
    description: 'inner-border attribute: `inner-border=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border-bottom',
    body: 'inner-border-bottom="$1"',
    description: 'inner-border-bottom attribute: `inner-border-bottom=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border-left',
    body: 'inner-border-left="$1"',
    description: 'inner-border-left attribute: `inner-border-left=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border-radius',
    body: 'inner-border-radius="$1"',
    description: 'inner-border-radius attribute: `inner-border-radius=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border-right',
    body: 'inner-border-right="$1"',
    description: 'inner-border-right attribute: `inner-border-right=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-border-top',
    body: 'inner-border-top="$1"',
    description: 'inner-border-top attribute: `inner-border-top=""`',
    els: ['mj-column'],
  },
  {
    prefix: 'inner-padding',
    body: 'inner-padding="$1"',
    description: 'inner-padding attribute: `inner-padding=""`',
    els: ['mj-button', 'mj-social'],
  },
  {
    prefix: 'lang',
    body: 'lang="$1"',
    description: 'lang attribute: `lang=""`',
    els: ['mjml', htmlTags],
  },
  {
    prefix: 'left-icon',
    body: 'left-icon="$1"',
    description: 'left-icon attribute: `left-icon=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'letter-spacing',
    body: 'letter-spacing="$1"',
    description: 'letter-spacing attribute: `letter-spacing=""`',
    els: ['mj-accordion-text', 'mj-button', 'mj-navbar-link', 'mj-text'],
  },
  {
    prefix: 'line-height',
    body: 'line-height="$1"',
    description: 'line-height attribute: `line-height=""`',
    els: [
      'mj-accordion-text',
      'mj-button',
      'mj-navbar-link',
      'mj-social',
      'mj-social-element',
      'mj-table',
      'mj-text',
    ],
  },
  {
    prefix: 'mj-class',
    body: 'mj-class="$1"',
    description: 'mj-class attribute: `mj-class=""`',
    els: ['mj-[a-z-]*?(?<!class)'],
    noMjClass: true,
  },
  {
    prefix: 'mode',
    body: 'mode="$1"',
    description: 'mode attribute: `mode=""`',
    els: ['mj-hero', 'mj-social'],
  },
  {
    prefix: 'name',
    body: 'name="$1"',
    description: 'name attribute: `name=""`',
    els: [
      'mj-font',
      'mj-group',
      'mj-image',
      'mj-social-element',
      'button',
      'fieldset',
      'form',
      'iframe',
      'input',
      'map',
      'object',
      'select',
      'textarea',
    ],
  },
  {
    prefix: 'owa',
    body: 'owa="$1"',
    description: 'owa attribute: `owa=""`',
    els: ['mjml'],
  },
  {
    prefix: 'padding',
    body: 'padding="$1"',
    description: 'padding attribute: `padding=""`',
    els: [
      'mj-accordion',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-hero',
      'mj-image',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'padding-bottom',
    body: 'padding-bottom="$1"',
    description: 'padding-bottom attribute: `padding-bottom=""`',
    els: [
      'mj-accordion',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-hero',
      'mj-image',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'padding-left',
    body: 'padding-left="$1"',
    description: 'padding-left attribute: `padding-left=""`',
    els: [
      'mj-accordion',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-hero',
      'mj-image',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'padding-right',
    body: 'padding-right="$1"',
    description: 'padding-right attribute: `padding-right=""`',
    els: [
      'mj-accordion',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-hero',
      'mj-image',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'padding-top',
    body: 'padding-top="$1"',
    description: 'padding-top attribute: `padding-top=""`',
    els: [
      'mj-accordion',
      'mj-accordion-title',
      'mj-accordion-text',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-hero',
      'mj-image',
      'mj-navbar-link',
      'mj-section',
      'mj-social',
      'mj-social-element',
      'mj-spacer',
      'mj-table',
      'mj-text',
      'mj-wrapper',
    ],
  },
  {
    prefix: 'path',
    body: 'path="$1"',
    description: 'path attribute: `path=""`',
    els: ['mj-include', 'mj-selector'],
  },
  {
    prefix: 'rel',
    body: 'rel="$1"',
    description: 'rel attribute: `rel=""`',
    els: [
      'mj-button',
      'mj-carousel-image',
      'mj-image',
      'mj-navbar-link',
      'mj-social-element',
      'a',
      'form',
    ],
  },
  {
    prefix: 'right-icon',
    body: 'right-icon="$1"',
    description: 'right-icon attribute: `right-icon=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'sizes',
    body: 'sizes="$1"',
    description: 'sizes attribute: `sizes=""`',
    els: ['mj-image', 'mj-social-element', 'img'],
  },
  {
    prefix: 'src',
    body: 'src="$1"',
    description: 'src attribute: `src=""`',
    els: ['mj-carousel-image', 'mj-image', 'mj-social-element', 'iframe', 'img', 'input'],
  },
  {
    prefix: 'srcset',
    body: 'srcset="$1"',
    description: 'srcset attribute: `srcset=""`',
    els: ['mj-image', 'mj-social-element', 'img'],
  },
  {
    prefix: 'style',
    body: 'style="$1"',
    description: 'style attribute: `style=""`',
    els: [htmlTags],
    noMjClass: true,
  },
  {
    prefix: 'table-layout',
    body: 'table-layout="$1"',
    description: 'table-layout attribute: `table-layout=""`',
    els: ['mj-table'],
  },
  {
    prefix: 'target',
    body: 'target="$1"',
    description: 'target attribute: `target=""`',
    els: [
      'mj-button',
      'mj-carousel-image',
      'mj-image',
      'mj-navbar-link',
      'mj-social-element',
      'a',
      'form',
    ],
  },
  {
    prefix: 'tb-border',
    body: 'tb-border="$1"',
    description: 'tb-border attribute: `tb-border=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'tb-border-radius',
    body: 'tb-border-radius="$1"',
    description: 'tb-border-radius attribute: `tb-border-radius=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'tb-hover-border-color',
    body: 'tb-hover-border-color="$1"',
    description: 'tb-hover-border-color attribute: `tb-hover-border-color=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'tb-selected-border-color',
    body: 'tb-selected-border-color="$1"',
    description: 'tb-selected-border-color attribute: `tb-selected-border-color=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'tb-width',
    body: 'tb-width="$1"',
    description: 'tb-width attribute: `tb-width=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'text-align',
    body: 'text-align="$1"',
    description: 'text-align attribute: `text-align=""`',
    els: ['mj-button', 'mj-section', 'mj-wrapper'],
  },
  {
    prefix: 'text-decoration',
    body: 'text-decoration="$1"',
    description: 'text-decoration attribute: `text-decoration=""`',
    els: ['mj-button', 'mj-navbar-link', 'mj-social', 'mj-social-element', 'mj-text'],
  },
  {
    prefix: 'text-padding',
    body: 'text-padding="$1"',
    description: 'text-padding attribute: `text-padding=""`',
    els: ['mj-social', 'mj-social-element'],
  },
  {
    prefix: 'text-transform',
    body: 'text-transform="$1"',
    description: 'text-transform attribute: `text-transform=""`',
    els: ['mj-button', 'mj-navbar-link', 'mj-text'],
  },
  {
    prefix: 'thumbnails',
    body: 'thumbnails="$1"',
    description: 'thumbnails attribute: `thumbnails=""`',
    els: ['mj-carousel'],
  },
  {
    prefix: 'thumbnails-src',
    body: 'thumbnails-src="$1"',
    description: 'thumbnails-src attribute: `thumbnails-src=""`',
    els: ['mj-carousel-image'],
  },
  {
    prefix: 'title',
    body: 'title="$1"',
    description: 'title attribute: `title=""`',
    els: ['mj-button', 'mj-carousel-image', 'mj-image', 'mj-social-element', htmlTags],
  },
  {
    prefix: 'usemap',
    body: 'usemap="$1"',
    description: 'usemap attribute: `usemap=""`',
    els: ['mj-image', 'img', 'object'],
  },
  {
    prefix: 'vertical-align',
    body: 'vertical-align="$1"',
    description: 'vertical-align attribute: `vertical-align=""`',
    els: ['mj-button', 'mj-column', 'mj-group', 'mj-hero', 'mj-social-element'],
  },
  {
    prefix: 'width',
    body: 'width="$1"',
    description: 'width attribute: `width=""`',
    els: [
      'mj-breakpoint',
      'mj-button',
      'mj-column',
      'mj-divider',
      'mj-group',
      'mj-hero',
      'mj-group',
      'mj-image',
      'mj-table',
      'iframe',
      'img',
      'input',
      'object',
    ],
  },
]
