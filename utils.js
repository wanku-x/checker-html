const validator = require('html-validator');
const isWhitespace = require('hast-util-whitespace');

const validate = async (html) => {
  const options = {
    validator: 'WHATWG',
    data: html ? html : ' ',
    format: 'json',
    isFragment: true,
  }
  
  try {
    const result = await validator(options)
    return result
  } catch (error) {
    return error
  }
}

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

const checkStructure = (decision, answer) => {
  if (!decision.hasOwnProperty('children') && !answer.hasOwnProperty('children')) {
    return {
      success: true,
    };
  }
  if (!decision.hasOwnProperty('children')) {
    return {
      success: false,
      error: 'must_be_element',
      amountChildrens: answer.children.length,
      type: decision.type,
      tagName: decision.tagName,
      position: decision.position,
    }
  }
  if (!answer.hasOwnProperty('children')) {
    return {
      success: false,
      error: 'must_be_empty',
      amountChildrens: 0,
      type: decision.type,
      tagName: decision.tagName,
      position: decision.position,
    }
  }
  if (decision.children.length !== answer.children.length) {
    return {
      success: false,
      error: 'must_include_different_amount_childrens',
      type: decision.type,
      tagName: decision.tagName,
      position: decision.position,
    }
  }
  if (decision.children.length === answer.children.length) { 
    decision.children.every((el, index) => (
      checkStructure(el.children, answer.children[index].children)
    ));
  } else {
    return {
      success: false,
      error: '',
      type: decision.type,
      tagName: decision.tagName,
      position: decision.position,
    }
  }
};

const checkTypes = (decision, answer) => (
  null
);

module.exports = {
  validate,
  removeTrashNodes,
  checkStructure,
  checkTypes,
}