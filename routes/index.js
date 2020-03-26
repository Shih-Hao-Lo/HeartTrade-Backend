const constructorMethod = app => {
    app.get("/" , (req , res) => {
        res.sendStatus(200);
    });

    app.get('/register', function(req, res) {
        res.send('register', { });
    });

    app.post('/register', function(req, res) {
        Account.register(new Account({username: req.body.username}), req.body.password, function(err, account) {
            if (err) {
                return res.send('register', {account: account});
            }

            passport.authenticate('local')(req, res, function() {
                res.redirect(301, '/');
            });
        })
    });

    app.get('/login', function(req, res) {
        res.send('login', {user: req.user});
    });

    app.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.direct('/');
    });

}

module.exports = constructorMethod;