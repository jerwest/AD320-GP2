var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

router.post('/', function(req, res, next){

//contact form
var sql = "INSERT INTO  contact_info (email, topic, message)"
+ "VALUES (?, ?, ?);"
var queParams = [
  req.body.contact_email,
  req.body.contact_topic,
  req.body.contact_message
  ];
  con.query(sql, queParams, function(err, result, fields){
    if(err) console.log(err);
    console.log("Connected");
    res.status(201).send("Thank you for contacting us, we'll be in touch with you shortly.");
  });
})

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
