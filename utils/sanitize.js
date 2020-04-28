const lodash = require('lodash');
const isElementIn = require('hast-util-is-element');

const allowedTags = require('../constants/allowed-tags');
const allowedAttrs = require('../constants/allowed-attrs');

const hasNotAllowedAttrs = (el, allowed) => {
  if (!el.hasOwnProperty('properties')) return false
  
  let props = el.properties;
  
  for (let prop in props) {
    if (allowed.includes(prop)) {
      delete props[prop];
    }
  }

  return lodash.isEmpty(props) ? false : props;
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

      const filteredProps = hasNotAllowedAttrs(el, allowedAttrs);

      if (filteredProps) {
        attrsNotAllowed.push({
          type: el.type,
          tagName: el.tagName,
          properties: filteredProps,
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
