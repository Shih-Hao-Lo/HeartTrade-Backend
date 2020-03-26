const mongoCollections = require("./mongoCollections");
const user_ = require('./user');
const orders = mongoCollections.orders;
const ObjectID = require('mongodb').ObjectID

/*
    in: 
        id: ID!
    ret:
        order = {
                _id: ID!
                user_id: String!
                prod: String!
                amt: Integer!
                wish: String!
                wish_amt: Integer!
            }

*/
async function get(id) {
    if(id === undefined){
        throw 'input is empty (in order.get)';
    }
    if(id.constructor != ObjectID){
        if(ObjectID.isValid(id)){
            id = new ObjectID(id);
        }
        else{
            throw 'Id is invalid!(in order.get)'
        }
    }

    const ordersCollections = await orders();
    const target = await ordersCollections.findOne({ _id: id });
    if(target == null) throw 'order not found'

    return target;
}

/*
    in: 
        uid: String!
    ret:
        order[] = [{
                _id: ID!
                user: {
                    _id: ID
                    username: String!
                    password: String!
                    Lat: Double!
                    Long_: Double!
                    email: String!
                },
                prod: String!
                amt: Integer!
                wish: String!
                wish_amt: Integer!
            }]

*/
async function getbyuser(uid) {
    if(uid == undefined) {
        throw "user id is empty! (in order.getbyuser)"
    }

    const ordersCollections = await orders();
    const targets = await ordersCollections.find({ user_id: uid.toString() }).toArray();
    for(x in targets) {
        targets[x]['user'] = await user_.get(targets[x].user_id);
        delete targets[x].user_id;
        // console.log(target);
    }
    return targets;
}

/*
    in:
        user_id: String!
        prod: String!
        amt: Integer!
        wish: String!
        wish_amt: Integer!
    ret:
        order = {
            _id: ID!
            user_id: String!
            prod: String!
            amt: Integer!
            wish: String!
            wish_amt: Integer!
        }
*/
async function addorders(user_id , prod , amt , wish , wish_amt) {
    if(user_id == undefined || prod == undefined || amt == undefined || wish == undefined || wish_amt == undefined) {
        throw "Input missing! (in order.addorders)"
    }

    const ordersCollections = await orders();

    let neworder = {
        user_id: user_id.toString(),
        prod: prod,
        amt: amt,
        wish: wish,
        wish_amt: wish_amt
    }

    const inserted = await ordersCollections.insertOne(neworder);
    if(inserted.insertedCount === 0) throw 'Insert fail! (in order.addorders)';

    return await get(inserted.insertedId);
}


/*
    in:
        post_id: ID!
        prod: String!
        amt: Integer!
        wish: String!
        wish_amt: Integer!
    ret:
        order = {
            _id: ID!
            user_id: String!
            prod: String!
            amt: Integer!
            wish: String!
            wish_amt: Integer!
        }
*/
async function updateorders(post_id , prod , amt , wish , wish_amt){
    if(post_id === undefined){
        throw 'input is empty (in user.get)';
    }
    if(post_id.constructor != ObjectID){
        if(ObjectID.isValid(post_id)){
            post_id = new ObjectID(post_id);
        }
        else{
            throw 'Id is invalid!(in order.updateorder)'
        }
    }

    let target = await get(post_id);
    const ordersCollections = await orders();
    if(prod == undefined) prod = target.prod;
    if(amt == undefined) amt = target.amt;
    if(wish == undefined) wish = target.wish;
    if(wish_amt == undefined) wish_amt = target.wish_amt;


    let updatedorder = {
        $set: {
            _id: target._id,
            user_id: target.user_id,
            prod: prod,
            amt: amt,
            wish: wish,
            wish_amt: wish_amt
        }
    }

    const updated = await ordersCollections.updateOne({ _id: post_id } , updatedorder);
    if(updated.modifiedCount === 0) throw 'Update fail! (in order.updateorders)';

    return await get(post_id);
}

module.exports = {
    get,
    getbyuser,
    addorders,
    updateorders
};
