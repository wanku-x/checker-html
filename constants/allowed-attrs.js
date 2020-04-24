const allowedAttrs = [
  // Global attrs
  'class',
  'id',
  'dir',
  'hidden',
  'lang',
  'style',
  'tabindex',
  'title',

  // Aria attrs
  'aria-describedby',
  'aria-hidden',
  'aria-label',
  'aria-labelledby',

  // List attrs
  'reversed',
  'start',
  'type',
  'value',

  // Link attrs
  'href',
  'hreflang',
  'rel',

  // Text-level attrs
  'cite',
  'datetime',

  // Tabular attrs
  'colspan',
  'rowspan',
  'headers',

  // Image attrs
  'src',
  'alt',
  'height',
  'width',
  'sizes',
  'srcset',

  // Form attrs
  'disabled',
  'checked',
  'placeholder',
  'size',
  'for',
  'multiple',
  'label',
  'selected',
  'cols',
  'rows',
  'open',
  'span',
  'list',
  'name',
  'form',
  'max',
  'min',
  'maxlength',
  'minlength',
  'readonly',
  'required',
  'step',
  'wrap',
  'high',
  'low',
  'optimum',
];

module.exports = allowedAttrs;
