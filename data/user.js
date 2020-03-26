const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;

/*
    in:
        username: String!
        password: String!
        Lat: Double!
        Long_: Double!
        email: String!
    ret:
        obj = {
            _id: ID
            username: String!
            password: String!
            Lat: Double!
            Long_: Double!
            email: String!
        }
*/
function adduser(username , password , Lat , Long_ , email) {

}


/*
    in:
        _id: ID!
        username: String
        password: String
        Lat: Double
        Long_: Double
        email: String
    ret:
        obj = {
            _id: ID!
            username: String!
            password: String!
            Lat: Double!
            Long_: Double!
            email: String!
        }
*/
function updtaeuser(username , password , Lat , Long_ , email){

}