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
 let db_connect = dbo.getDb("Submissions");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   building: req.body.building,
   time:req.body.time,
   gender:req.body.gender,
   level: req.body.level,
   description: req.body.description,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
  
      sendMail(req.body.description, req.body.building, req.body.level, req.body.time, req.body.gender)
      .then((result) => console.log('Email sent...', result))
      .catch((error) => console.log(error.message));

   console.log("1 document created");
   response.json(res);
 });
});

const nodemailer = require('nodemailer')
const json = require('./tokens.json');


async function sendMail(description, building, level, time, gender) {
try {

  const transport = nodemailer.createTransport({
    service: json.type,
    auth: {
     user: json.user_email,
      pass: json.user_pass,
      secure: false,
      logger: true,
      debug: true,
      ignoreTLS: true
    },
  });
  const mailOptions = {
    from: json.user_email,
    to: json.client_email,
    subject: 'Vape Form',
    text: 'form',
    html: '<h3>A Vaping form has been submitted.</h3>\n  There was a submission in the '+gender+' restroom of the '+building+' building \n the type is: '+level+'.\n And the given description is: '+ description+'\n The time was '+time
  };
  const result = await transport.sendMail(mailOptions);
  return result;
} catch (error) {
  return error;
}
}

module.exports = recordRoutes;