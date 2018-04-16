require('dotenv').config({ path: './test/.env' });
const mongo = require('../lib/mongodb');
const chai = require('chai');
const chaiHtp = require('chai-http');

chai.use(chaiHttp);
const { assert } = chai;

describe('Florists API', () => {

    before(() => {
        return mongo.then(db => db.collection('florists').remove);
    });

    let florist = {
        name: 'New Orleans',
        category: '4'
    };

    it('add a florist', () => {
        return chai.request(app)
            .post('/florists')
            .send(florist)
            .then(({body}) => {
                assert.ok(body._id);
                assert.equal(body.name, florist.name);
                florist = body;
            });
    });

    it('gets florist', () => {
        return chai.request(app)
            .get('/florists')
            .then(({ body }) => {
                assert.deepEqual(body, [florist]);
            });
    });

    after(() => mongo.client.close());
});