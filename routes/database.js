var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../../credentials.json');
var connect = mysql.createConnection(credentials);
// connect to sql
connect.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
  // create database
  /*connect.query('CREATE DATABASE fitness_tracker', function(err, result) {
    if (err) throw err;
    console.log('Database created');*/

    // create table
    var sql = 'CREATE TABLE CUSTOMER(FirstName Char(20), LastName Char(20))';
    connect.query(sql, function(err, result) {
      console.log('table created');
    });

    var sql = 'ALTER TABLE CUSTOMER ADD COLUMN Weight Numeric(5,2)';
    connect.query(sql, function(err, result) {
      console.log('column added');
    });

    connect.query('INSERT INTO CUSTOMER SET ?', "weight", (err, result, fields) => {

        console.log('added')

    })


      console.log('weight added');

  });


module.exports = connect;
