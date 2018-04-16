const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017/testDB';
let db = null;
MongoClient.connect(url)
    .then(_client => {
        client = _client;
        const db = client.db();
        return db.collection('unicorns')
            .find({ name: 'whatever' })
            .toArray();
            // .insert({ name: 'nothing' })
            // .update({ "_id" : ObjectId("5acfdad821b7f91f1439f515") 
            // }, { 
            //     $set: {
            //         name: "some" 
            //     }
            // });
            // .remove({
            //     _id : ObjectId("5acfdad821b7f91f1439f515")
            // });
;
    })
    .then(unicorns => {
        console.log(unicorns);
    })
    .catch(err => {
        console.log('FAIL!', err);
    })
    .then(() => {
        client.close();
    });