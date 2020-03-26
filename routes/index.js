const constructorMethod = app => {
    /*

    User

    */
    
    app.get('/get_user', function(req, res) {
        let id = req.body.userId;
        let getUser = get(id);
        if (getUser) {
            res.send(getUser);
        }
        else {
            res.send(500, "Get user fail");
        }
    });

    app.get('/get_user_by_email', function(req, res) {
        let id = req.body.userId;
        let getByEmail = getbyemail(email)
        if (getByEmail) {
            res.send(getByEmail);
        }
        else {
            res.send(500, "Get user by email fail");
        }
    });

    app.post('add_user', function(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        let email = req.body.email;

        let addUser = adduser(username, password, Lat, Long_, email)
        if (addUser) {
            res.send(addUser);
        }
        else {
            res.send(500, "Post new user fail");
        }
    });

    app.put('update_user', function(req, res) {
        let _id = req.body.userId;
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        let email = req.body.email;

        let updateUser = updateuser(_id , username, password, Lat, Long_, email);
        if (updateUser) {
            res.send(updateUser);
        }
        else {
            res.send(500, "Update user fail");
        }
    });


    /*

    Order

    */

    app.get('/get_orders_by_user', function(req, res) {
        let uid = req.body.userUid;
        let getOrdersByUser = getbyuser(uid);
        if (getOrdersByUser) {
            res.send(getOrderByUser);
        }
        else {
            res.send(500, "Get orders by user fail");
        }
    });

    app.post('/add_order', function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        let addOrder = addorders(user_id , prod , amt , wish , wish_amt);
        if (addOrder) {
            res.send(addOrder);
        }
        else {
            res.send(500, "Add Order Fail");
        }
    });

    app.put('/update_order', function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        let updatedOrder = updateorders(post_id , prod , amt , wish , wish_amt)
        if (updatedOrder) {
            res.send(updatedOrder);
        }
        else {
            res.send(500, "Update Order Fail");
        }
    });

}

module.exports = constructorMethod;