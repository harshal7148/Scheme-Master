const concat = require('concat');
(async function build() {
  const files = [
    './dist/scheme-master/runtime.js',
    './dist/scheme-master/polyfills.js',
    './dist/scheme-master/main.js'
  ]
  await concat(files, "./dist/scheme-master/schemeMaster_micro-fe.js")
})();