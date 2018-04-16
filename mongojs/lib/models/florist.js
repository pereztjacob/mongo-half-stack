const mongo = require('../mongodb');

module.exports = {
    insert(florist) {
        return mongo.then(db => {
            return db.collection('florists')
                .insert(florist)
                .then(result => result.ops[0]);
        });
    },
    find() {
        return mongo.then(db => {
            return db.collection('florists')
                .find()
                .toArray();
        });
    }
};