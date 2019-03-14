var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Home Page' });

});

module.exports = router;
/*
router.post('/login', passport.authenticate('login', {
    successRedirect : '/home', 
    failureRedirect : '/login', 
    failureFlash : true
}));

app.get('/home', function(request, response) {
        response.render('pages/home');
});
*/
