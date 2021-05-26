"use strict";

const fs = require('fs');
const font = fs.readFileSync(`${__dirname}/${process.env.FONT_FILE}`);
const FontToAdd = font.buffer.slice(font.byteOffset, font.byteOffset + font.byteLength);
console.log("Saved the fontFile!")

module.exports = { FontToAdd };