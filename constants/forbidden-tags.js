const forbiddenTags = [
  // The document element
  'html',

  // Document metadata
  'head',
  'title',
  'base',
  'link',
  'meta',
  'style',

  // Sections
  'body',

  // Embedded content
  'picture',
  'source',
  'iframe',
  'embed',
  'object',
  'param',
  'video',
  'audio',
  'track',
  'map',
  'area',

  // Scripting
  'script',
  'noscript',
  'template',
  'slot',
  'canvas',
];

module.exports = forbiddenTags;
