const fs = require('fs');
const labelmake = require('labelmake');
const template = require('./template');
const inputs = require('./inputs');
const font = require('./fonts');

labelmake({ inputs, template, font }).then((pdf) => {
  fs.writeFileSync(__dirname + "/index.pdf", pdf);
  console.log("Generated pdf in index.pdf")
});