var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/newuser', function(req, res, next) {

  res.render('newuser', { title: 'Express' });

});

module.exports = router;
