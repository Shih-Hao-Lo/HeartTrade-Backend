const constructorMethod = app => {
    app.post('/register', function(req, res) {        
        let userName = req.body.username;
        let password = req.body.password;
        let lat = req.body.Lat;
        let long = req.body.Long_;
        let email = req.body.email;

        // TODO: Check input format
        // ...

        let userObject = adduser(userName,  password,  lat,  long, email);
        if (userObject) {
            res.send(userObject);
        }
        else {
            res.send('error-page', {});
        }
    });

    app.post('/update_order', function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        updateorders(post_id , prod , amt , wish , wish_amt)
    });

}

module.exports = constructorMethod;