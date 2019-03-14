var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

router.post('/', function(req, res, next){



var sql = "INSERT INTO NEWUSER(username, passowrd, confirmpassword)" + "VALUES(?, ?, ?);"
var queParams = [
  req.body.newuser_Username,
  req.body.newuser_Password,
  req.body.newuser_Confirmpassword
];

con.query(sql, queParams, function(err, result, fields){
    if(err) console.log(err)
    console.log("Connected");
    res.status(201).send("Welcome to the Liteweight Fitness Tracker!");
});

})

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('newuser', { title: 'New User' });

});

module.exports = router;
