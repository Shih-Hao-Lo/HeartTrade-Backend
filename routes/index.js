const user_ = require('../data/user');
const order_ = require('../data/order');

const constructorMethod = app => {
    /*

    User Routers

    */
    
    app.get('/get_user_by_id', async function(req, res) {
        let id = req.body.userId;
        let getUser = await user_.get(id);
        if (getUser) {
            res.status(200).json(getUser);
        }
        else {
            res.status(500).json("Get user fail");
        }
    });

    app.get('/get_user_by_email', async function(req, res) {
        let id = req.body.userId;
        let getByEmail = await user_.getbyemail(email)
        if (getByEmail) {
            res.status(200).json(getByEmail);
        }
        else {
            res.status(500).json("Get user by email fail");
        }
    });

    app.post('/add_user', async function(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        let email = req.body.email;
        console.log(req.body);
        //console.log(password);
        let addUser = await user_.adduser(username, password, Lat, Long_, email)
        if (addUser) {
            res.status(200).json(addUser);
        }
        else {
            res.status(500).json("Post new user fail");
        }
    });

    app.put('/update_user', async function(req, res) {
        let _id = req.body.userId;
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        let email = req.body.email;

        let updateUser = await user_.updateuser(_id , username, password, Lat, Long_, email);
        if (updateUser) {
            res.status(200).json(updateUser);
        }
        else {
            res.status(500).json("Update user fail");
        }
    });


    /*

    Order Routers

    */

    app.get('/get_orders_by_user', async function(req, res) {
        let uid = req.body.userUid;
        let getOrdersByUser = await order_.getbyuser(uid);
        if (getOrdersByUser) {
            res.status(200).json(getOrderByUser);
        }
        else {
            res.status(500).json("Get orders by user fail");
        }
    });

    app.post('/add_order', async function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        let addOrder = await order_.addorders(user_id , prod , amt , wish , wish_amt);
        if (addOrder) {
            res.status(200).json(addOrder);
        }
        else {
            res.status(500).json("Add Order Fail");
        }
    });

    app.put('/update_order', async function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        let updatedOrder = await order_.updateorders(post_id , prod , amt , wish , wish_amt)
        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        }
        else {
            res.status(500).json("Update Order Fail");
        }
    });

}

module.exports = constructorMethod;