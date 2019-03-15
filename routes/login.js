var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var credentials = require('../../credentials.json');
var con = mysql.createConnection(credentials);

router.get('/', function(req, res, next) {
  res.render('login', { title: 'LOGIN' });
});



  //res.render('login', { title: 'Express' });

//});




// Access login function 
router.post('/', function(req, res, next) {
    
    
    var query = "SELECT user_name, user_password"
        + " FROM user_login"
        + " WHERE user_name = '" + req.body.username + "';"

    con.query(query, function(error, result, fields) {
	if (error) {
            // Web result of DB error possible?
	    //res.status(500.send(error));
	    console.log(error);
	} else {
        //console.log(result);
	    if(!result[0].user_password || String(result[0].user_password).trim() == String(req.body.password).trim()) {
		// I believe session code should be added here:
        req.session.user = result[0].user_name;
        req.session.admin = true;
        //req.session.userID = result[0].UserID;
        console.log(req.session);
		res.redirect('/dashboard')
	    } else {
		res.redirect('/')
	    }
	    
	}
    });
});

module.exports = router;




