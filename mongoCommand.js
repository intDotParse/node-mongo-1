const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/node-project';
const databasename = 'node-project';

let command = (commandType, document) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return console.log('cannot connect to mongoDB!');
        }
        console.log('Connected to server!');
        const db = client.db(databasename);
        //insert document
        if (commandType === 'insert') {
            db.collection('accounts').insertOne(document, (err, result) => {
                if (err) {
                    return console.log('unable to insert document!', err);
                }
                console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
            });
        }else if(commandType ==='delete'){
            console.llog('deleting',document);
        }
        client.close();
    });
}

module.exports = {
    command
}