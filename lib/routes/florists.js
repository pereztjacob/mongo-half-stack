const notFound = require('./not-found');
const florist = require('../models/florist');

const get = (req, res) => {
    const id = req.paths[1];
    id ? getOne(id, req, res) : getAll(req, res);
};

const getOne = (id, req, res) => {
    florist.selectOne(id)
        .then(one => {
            res.send(one);
        });
};

const getAll = (req, res) => {
    florist.find().then(florists => {
        res.send(florists);
    }).catch(err => console.log('HERE', err)); //eslint-disable-line
};

const post = (req, res) => {
    florist.insert(req.body).then(saved => {
        res.send(saved);
    });
};

const put = (req, res) => {
    florist.update(req.body).then(updated => {
        res.send(updated);
    });
};

const del = (req, res) => {
    florist.delete(req.paths[1])
        .then(() => res.send({ removed: true }));
};

const methods = { get, post, put, delete: del };


module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    method(req, res);
};