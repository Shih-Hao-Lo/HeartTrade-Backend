const user_ = require('../data/user');
const order_ = require('../data/order');

const constructorMethod = app => {
    /*

    User Routers

    */
    
    app.get('/get_user_by_id', async function(req, res) {
        let id = req.body.userId;
        try {
            let getUser = await user_.get(id);
            res.status(200).json(getUser);
        } catch(e) {
            res.status(500).json(e);
        }
    });

    app.get('/get_user_by_email', async function(req, res) {
        let email = req.body.email;
        try {
            let getByEmail = await user_.getbyemail(email);
            res.status(200).json(getByEmail);
        } catch(e) {
            res.status(500).json(e);
        }
    });

    app.post('/add_user', async function(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        let email = req.body.email;
        try {
            let addUser = await user_.adduser(username, password, Lat, Long_, email);
            res.status(200).json(addUser);
        } catch(e) {
            res.status(500).json(e);
        }
    });

    app.put('/update_user', async function(req, res) {
        let _id = req.body.userId;
        let username = req.body.username;
        let password = req.body.password;
        let Lat = req.body.Lat;
        let Long_ = req.body.Long_;
        try {
            let updateUser = await user_.updateuser(_id , username, password, Lat, Long_);
            res.status(200).json(updateUser);
        } catch(e) {
            res.status(500).json(e);
        }
    });


    /*

    Order Routers

    */

    app.get('/get_orders_by_user', async function(req, res) {
        let uid = req.body.userUid;
        try {
            let getOrdersByUser = await order_.getbyuser(uid);
            res.status(200).json(getOrderByUser);
        } catch(e) {
            res.status(500).json(e);
        }
    });

    app.post('/add_order', async function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        try {
            let addOrder = await order_.addorders(user_id , prod , amt , wish , wish_amt);
            res.status(200).json(addOrder);
        } catch(e) {
            res.status(500).json(e);
        }
    });

    app.put('/update_order', async function(req, res) {
        let prod = req.body.prod;
        let amt = req.body.amt;
        let wish = req.body.wish;
        let wish_amt = req.body.wish_amt;
        try {
            let updatedOrder = await order_.updateorders(post_id , prod , amt , wish , wish_amt);
            res.status(200).json(updatedOrder);
        } catch(e) {
            res.status(500).json(e);
        }
    });

}

module.exports = constructorMethod;