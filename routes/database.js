var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../credentials.json');
var connect = mysql.createConnection(credentials);
// connect to sql
connect.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
  // create database
  /*connect.query('CREATE DATABASE fitness_tracker', function(err, result) {
    if (err) throw err;
    console.lot('Database created');*/

    // create table
    var sql = 'CREATE TABLE CUSTOMER(FirstName Char(20), LastName Char(20))';
    connect.query(sql, function(err, result) {
      console.log('table created');
    });
  });


module.exports = connect;
