const allowedAttrs = [
  // Global attrs
  'className',
  'id',
  'dir',
  'hidden',
  'lang',
  'style',
  'tabIndex',
  'title',

  // Aria attrs
  'ariaDescribedby',
  'ariaDidden',
  'ariaLabel',
  'ariaLabelledby',

  // List attrs
  'reversed',
  'start',
  'type',
  'value',

  // Link attrs
  'href',
  'hrefLang',
  'rel',

  // Text-level attrs
  'cite',
  'dateTime',

  // Tabular attrs
  'colSpan',
  'rowSpan',
  'headers',

  // Image attrs
  'src',
  'alt',
  'height',
  'width',
  'sizes',
  'srcSet',

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
  'maxLength',
  'minLength',
  'readOnly',
  'required',
  'step',
  'wrap',
  'high',
  'low',
  'optimum',
];

module.exports = allowedAttrs;
