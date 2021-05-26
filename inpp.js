"use strict";

const csvF= process.env.CSV_NAME;
const csv = require('csvtojson');
const fs = require('fs');

csv()
.fromFile(csvF)
.then((jsonObj)=>{
  const data = `module.exports = ${JSON.stringify(jsonObj)};`;
  fs.writeFile(`${__dirname}/inputs.js`, data, 'utf-8', (err) => {
    if (err) throw err;
    console.log(`Saved! The  JS file is: '${data}'`);
  });
});