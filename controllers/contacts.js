// RESPONSE_CODES
// 200(ok)
// 202(accepted)
// 204(no content)
// 404(not found)

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const data = await mongodb.getDb().db().collection('contacts').find();
    data.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); // can also use "send" instead of "json"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({
      _id: userId
    });
    result.toArray().then((list) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(list[0]);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createContact = async (req, res) => {
  // console.log(req.body); // for debugging
  try {
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            `Something went wrong while attempting to create new contact ${newContact.firstName}`
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, newContact);
    // console.log(response);
    // if at least one modification happened
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error ||
            `Something went wrong while attempting to update contact with id ${userId}`
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteContact = async (req, res) => {
  try {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          `Something went wrong while attempting to delete contact with id ${userId}`
      );
  }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};
