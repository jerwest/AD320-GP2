var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

router.post('/', function(req, res, next){

var sql = "INSERT INTO  CUSTOMER_METRICS (weight, calorie_intake, calories_burned, workout_type, length_workout, hours_slept)"
+ "VALUES (?, ?, ?, ?, ?, ?);"
var queParams = [
  req.body.activity_weight,
  req.body.activity_calIn,
  req.body.activity_calBurn,
  req.body.activity_type,
  req.body.activity_length,
  req.body.activity_sleep
  ];

  con.query(sql, queParams, function(err, result, fields){
    if(err) console.log(err)
      console.log('Please go back and enter correct values');
    console.log("Connected");
    res.status(201).send("Thank you. Your activity has been recorded.");
  });
})
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('activity', { title: 'Activity Page' });

});

module.exports = router;

//adding data validation




