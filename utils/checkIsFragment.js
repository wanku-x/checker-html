const allowedTags = require('../constants/allowed-tags');
const isElementIn = require('hast-util-is-element');

const checkIsFragment = (hast) => {  
  let nodesNotAllowed = [];

  const recursive = (children) => {
    children.forEach((el) => {
      if (el.type === 'doctype' && el.hasOwnProperty(position)) {
        nodesNotAllowed.push({
          type: el.type,
          position: el.position,
        });
      }

      if (el.type === 'element' && el.hasOwnProperty(position) && )
    });
  }
}

module.exports = checkIsFragment;
