'use strict'

const utils = require('./utils');
const vfile = require('vfile');
const parse5 = require('parse5');
const fromParse5 = require('hast-util-from-parse5');
const inspect = require('unist-util-inspect');
const h = require('hastscript');

const sanitize = require('./utils/sanitize');

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
<FOOTER class="footer" hidden="hidden">
  <img class="image" src="qwe" alt="rty">
  <ul>
    <script>кукукукуку</script>
    <li></li>
  </ul>
</FOOTER>
`;

const file = vfile({contents: HTML});
const ast = parse5.parseFragment(HTML, {sourceCodeLocationInfo: true});
const hast = fromParse5(ast, file);

console.log(hast.children[1]);
// const resultSanitize = sanitize(hast);

// if (!resultSanitize.success) {
//   console.log(resultSanitize);
//   return;
// }




// const decision = removeTrashNodes(hast);

// validate(HTML).then((validateResult) => {
//   if (!validateResult.isValid) {
//     console.log(validateResult);
//     return;
//   }
// });