/*var fs = require('fs'); 
var d;
var parse = require('csv-parse');
var parser = parse({columns: true}, function (err, records) {
	d = records;
	console.log(d)
});
console.log(d)
fs.createReadStream(__dirname+'/data.csv').pipe(parser);
console.log(d)
const csv = require('csvtojson')
const csvFilePath = 'data.csv';
const array = csv().fromFile(csvFilePath);

console.log(array)
const fs = require('fs');
const getStream = require('get-stream');
const parse = require('csv-parse');

readCSVData = async (filePath): Promise<any> => {
  const parseStream = parse({delimiter: ','});
  const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
  return data.map(line => line.join(',')).join('\n');
}

console.log(readCSVData('data.csv'));
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile='data.csv';

var parser = parse({delimiter: ','}, function (err, data) {
  async.eachSeries(data, function (line, callback) {
    // do something with the line
    callback ()
  })
});
fs.createReadStream(inputFile).pipe(parser);

const csv = require('async-csv');
const fs = require('fs').promises;

(async() => {
  // Read file from disk:
  const csvString = await fs.readFile('./data.csv', 'utf-8');
  console.log(csvString)
 
  // Convert CSV string into rows:
  const rows = await csv.parse(csvString);
  const data = () => {
    return rows;
  };
  exports.data = data;
  console.log(module)
})();
const parse = require('csv-parse');
const fs = require('fs');

const dataBuffer = parse(fs.readFileSync('data.csv'), {columns: true});
const dataFile = parse(`serial,name
1,Albert Einstein
2,Sir Isaac Newton
3,Marie Curie
4,Galilé`, {columns: true})
console.log(dataFile)
//import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx').default;
var fs = require('fs');
// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/data.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/data.xlsx`);
console.log(workSheetsFromFile[0].data[0][0], workSheetsFromBuffer)*/
const csvFilePath = './data.csv';
const csv = require('csvtojson');
const fs = require('fs');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  console.log(`"${jsonObj.toString()}"`)
  fs.writeFile(`${__dirname}/json/index.txt`, JSON.stringify(jsonObj), 'utf-8', (err) => {
    if (err) throw err;
  })
})
