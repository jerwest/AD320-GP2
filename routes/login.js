var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

/* GET home page. */
router.post('/', function(req, res, next) {
    var sql = "INSERT INTO  user_login  (user_username, user_password)"
+ "VALUES (?, ?);"
    var logParams =[
    req.body.username,
    req.body.password
    ];
    
    con.query(sql, logParams, function(err, result, fields){
        if(err)  console.log(err)
            
    console.log("Connected");
    res.status(201).send("Thank you for logging in");
  });
})

  //res.render('login', { title: 'Express' });

//});

module.exports = router;
