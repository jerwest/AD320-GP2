var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('activity', { title: 'Activity Page' });

});

module.exports = router;
