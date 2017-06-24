const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'http://localhost:27017/workshop';
let database = null;

function mongoServiceInit() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    database = db;
  });
}

module.exports = mongoServiceInit;
