const FS = require('fs');
const PATH = require('path');
const BIO_PATH = PATH.join(__dirname, '/bioDb.json');
const EP_PATH = PATH.join(__dirname, '/epDb.json');

let bioCollection = FS.readFileSync(BIO_PATH);
let epCollection = FS.readFileSync(EP_PATH);

epCollection = JSON.parse(epCollection.toString());
bioCollection = JSON.parse(bioCollection.toString());

module.exports = {
  epCollection,
  bioCollection
};