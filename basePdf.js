"use strict";

const fs = require('fs');
const pdfDataURI = 'data:application/pdf;base64,' + fs.readFileSync(`${__dirname}/${process.env.BASE_PDF}`, 'base64');
console.log("Saved the basePdf!")

module.exports = pdfDataURI;