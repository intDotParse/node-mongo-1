const { MongoClient, ObjectID } = require('mongodb');
let obj = new ObjectID();
console.log(obj.getTimestamp());