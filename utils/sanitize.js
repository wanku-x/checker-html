const lodash = require('lodash');
const isElementIn = require('hast-util-is-element');

const allowedTags = require('../constants/allowed-tags');
const allowedAttrs = require('../constants/allowed-attrs');

const hasNotAllowedAttrs = (props, allowed) => {
  let filteredProps = props;
  
  lodash.forIn(props, (value, prop) => (
    null
  ));
  for (let prop in props) {
    if (allowed.includes(prop)) {
      delete filteredProps[prop];
    }
  }

  return (filteredProps === []) ? false : notAllowed; 
}

const sanitize = (hast) => {
  let nodesNotAllowed = [];
  let attrsNotAllowed = [];

  const recursive = (children) => {
    children.forEach((el) => {
      if (el.type === 'element' && !isElementIn(el, allowedTags)) {
        nodesNotAllowed.push({
          type: el.type,
          tagName: el.tagName,
          position: el.position,
        });
      }

      if (el.hasOwnProperty('properties') && hasNoPropertyIn(el, allowedAttrs)) {
        attrsNotAllowed.push({
          type: el.type,
          tagName: el.tagName,
          position: el.position,
        })
      }

      if (el.hasOwnProperty('children')) {
        recursive(el.children);
      }
    });
  };
  
  recursive(hast.children);

  if (!lodash.isEmpty(nodesNotAllowed)) {
    return {
      success: false,
      error: 'not_allowed_tags',
      nodes: nodesNotAllowed,
    };
  }

  if (!lodash.isEmpty(attrsNotAllowed)) {
    return {
      success: false,
      error: 'not_allowed_attrs',
      nodes: attrsNotAllowed,
    };
  }

  return {
    success: true,
  }
};

module.exports = sanitize;
