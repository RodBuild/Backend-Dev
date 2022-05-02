const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const getAll = async (req, res) => {
  const data = await mongodb.getDb().db().collection('contacts').find();
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // can also use "send" instead of "json"
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({
    _id: userId
  });
  result.toArray().then((list) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(list[0]);
  });
};

module.exports = {
  getAll,
  getSingle
};
