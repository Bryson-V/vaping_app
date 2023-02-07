const express = require("express");

 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("employees");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   building: req.body.building,
   level: req.body.level,
   description: req.body.description,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   sendMail(req.body.description, req.body.building, req.body.level)
   .then((result) => console.log('Email sent...', result))
   .catch((error) => console.log(error.message));
   console.log("1 document created");
   response.json(res);
 });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     building: req.body.building,
     level: req.body.level,
     description: req.body.description,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
const nodemailer = require('nodemailer')
const {google} = require ('googleapis')
const json = require('./tokens.json');


async function sendMail(description, building, level) {
try {

  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: 'vaping-submission@vape-app-371517.iam.gserviceaccount.com',
      serviceClient:json.client_id,
      privateKey: json.private_key

    },
  });
  const mailOptions = {
    from: 'vaping-submission@vape-app-371517.iam.gserviceaccount.com',
    to: 'bvil536@gmail.com',
    subject: 'Vape Form',
    text: 'form',
    html: '<h3>A Vaping form has been submitted.</h3>\n  The building is: '+building+".\n the type is: "+level+".\n And the given description is: "+ description,
  };

  const result = await transport.sendMail(mailOptions);
  return result;
} catch (error) {
  return error;
}
}
module.exports = recordRoutes;