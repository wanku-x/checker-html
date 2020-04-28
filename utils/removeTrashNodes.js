const isWhitespace = require('hast-util-whitespace');

const removeTrashNodes = (hast) => {
  const recursive = (children) => (
    children.filter((el) => {
      if (el.hasOwnProperty('children')) {
        return (el.children = recursive(el.children))
      }
      if (
        !isWhitespace(el) &&
        (el.type !== 'comment')
      ) return true;
    })
  );

  return {
    ...hast,
    children: recursive(hast.children),
  }
};

module.exports = removeTrashNodes;
