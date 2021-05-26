"use strict";

const basePdf = require('./basePdf');
const template = {
    fontName: "FontToAdd",
    basePdf,
    schemas: [
      {
        name:{
            type:"text",
            position:{
               x: 46.83,
               y: 257.13
            },
            width: 600,
            height: 35,
          alignment: "left",
          fontSize: 97.7,
          fontColor: "#424242"
        }
      }
    ]
  };
  
module.exports = template