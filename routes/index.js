var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

/* Logign function */
router.post('/', function(req, res, next){
    var query = "SELECT user_name, user_password " + "FROM user_login" + "WHERE user_login.user_name = '" + req.body.username + "';"
    
    
con.query(query, function(error, result, fields){
    if(error){
        console.log(error);
    }else {
        if(!result[0].user_password || String(result[0].user_password).trim() == String(req.body.password).trim()){
           
           req.session.user = result[0].UserName;
        req.session.admin = true;
        req.session.userID = result[0].UserID;
        console.log(req.session);
        res.redirect('/dashboard');
           }
    else {
        res.redirect('/home');
    }
    }
});    
});


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
