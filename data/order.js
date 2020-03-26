const mongoCollections = require("./mongoCollections");
const orders = mongoCollections.orders;

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
    const ordersCollections = await orders();
    const target = await ordersCollections.findOne({ _id: id });

    return target;
}

/*
    in: 
        uid: String!
    ret:
        order[] = [{
                _id: ID!
                user_id: String!
                prod: String!
                amt: Integer!
                wish: String!
                wish_amt: Integer!
            }]

*/
async function getbyuser(uid) {
    const ordersCollections = await orders();
    const targets = await ordersCollections.find({ user_id: uid });

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
    const ordersCollections = await orders();

    let neworder = {
        user_id: user_id.toString(),
        prod: prod,
        amt: amt,
        wish: wish,
        wish_amt: wish_amt
    }

    const inserted = await ordersCollections.insertOne(neworder);

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
function updateorders(post_id , prod , amt , wish , wish_amt){
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

    return await get(post_id);
}

module.exports = {
    get,
    getbyuser,
    addorders,
    updateorders
};
