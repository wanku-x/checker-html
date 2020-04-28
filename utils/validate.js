const validator = require('html-validator');

const validate = async (html) => {
  const options = {
    // validator: 'WHATWG',
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

module.exports = validate;
