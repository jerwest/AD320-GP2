// var express = require('express');
// var mysql = require('mysql');
// var router = express.Router();
// var credentials = require('../../credentials.json');
// var con = mysql.createConnection(credentials);
//
// router.post('/', function(req, res, next){
//
// //invite friend form
// var sql = "INSERT INTO  invite_friend (email, message)"
// + "VALUES (?, ?);"
// var queParams = [
//   req.body.invite_email,
//   req.body.invite_message
//   ];
//   con.query(sql, queParams, function(err, result, fields){
//     if(err) console.log(err);
//     console.log("Connected");
//     res.status(201).send("Thank you for inviting your friend!");
//   });
// })
//
// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Home' });
// });
//
// module.exports = router;
