'use strict'

const vfile = require('vfile');
const parse5 = require('parse5');
const fromParse5 = require('hast-util-from-parse5');
const inspect = require('unist-util-inspect');
const h = require('hastscript');

const checkIsFragment = require('./utils/checkIsFragment');
const sanitize = require('./utils/sanitize');
const validate = require('./utils/validate');

const answer = {
  type: 'root',
  children: [
    h('footer.footer', { hidden: true }, [
      h('img.image', { src: 'qwe', alt: 'rty' }),
      h('ul.list', [
        h('li.item'),
        h('li.item'),
        h('li.item'),
      ]),
    ])
  ],
}

const HTML =`
<!DOCTYPE html>
<head>
  <title>Title</title>
</head>
<body>
  <p>Ntfsdfsd</p>
</body>
`;

const file = vfile({contents: HTML});
const ast = parse5.parse(HTML, { sourceCodeLocationInfo: true });
const hast = fromParse5(ast, file);

console.log(hast)
// const resultSanitize = sanitize(hast);

// if (!resultSanitize.success) {
//   console.log(resultSanitize);
//   return;
// }

// validate(HTML).then((validateResult) => {
//   if (!validateResult.isValid) {
//     console.log(validateResult);
//     return;
//   }
// });





// const decision = removeTrashNodes(hast);