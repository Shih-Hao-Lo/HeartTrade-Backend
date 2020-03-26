const mongoCollections = require("./mongoCollections");
const orders = mongoCollections.orders;

/*
    in:
        user_id: String!
        prod: String!
        amt: Integer!
        wish: String!
        wish_amt: Integer!
    ret:
        obj = {
            _id: ID!
            user_id: String!
            prod: String!
            amt: Integer!
            wish: String!
            wish_amt: Integer!
        }
*/
function addorders(user_id , prod , amt , wish , wish_amt) {

}


/*
    in:
        post_id: ID!
        prod: String!
        amt: Integer!
        wish: String!
        wish_amt: Integer!
    ret:
        obj = {
            _id: ID!
            user_id: String!
            prod: String!
            amt: Integer!
            wish: String!
            wish_amt: Integer!
        }
*/
function updateorders(post_id , prod , amt , wish , wish_amt){

}