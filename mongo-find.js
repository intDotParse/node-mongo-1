const { MongoClient, ObjectID } = require('mongodb');

const dburl = 'mongodb://localhost:27017/node-project';
const dbname = 'node-project';
MongoClient.connect(dburl, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    console.log('connected to database!');
    const db = client.db(dbname);
    db.collection('accounts').findOneAndDelete({username:'art123'}).then((result)=>{
        console.log(result);
    });
    // db.collection('accounts').deleteOne({username:'art123'}).then((result) => {
    //    console.log('result: ', result);
    // }, (err) => {
    //     console.log('Unable to delete docs', err);
    // }); 
    // db.collection('accounts').find({
    //     _id:new ObjectID('5b66d3145df0d933303d5a29')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });
});