const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;
const ObjectID = require('mongodb').ObjectID

/*
    in: 
        id: ID! or String!
    ret:
        user = {
                _id: ID
                username: String!
                password: String!
                Lat: Double!
                Long_: Double!
                email: String!
            }

*/
async function get(id) {
    if(id === undefined){
        throw 'input is empty (in user.get)';
    }
    if(id.constructor != ObjectID){
        if(ObjectID.isValid(id)){
            id = new ObjectID(id);
        }
        else{
            throw 'Id is invalid!(in user.get)'
        }
    }

    const usersCollections = await users();
    const target = await usersCollections.findOne({ _id: id });
    if(target == null) throw 'user not found'

    return target;
}

/*
    in: 
        email: String!
    ret:
        user = {
                _id: ID
                username: String!
                password: String!
                Lat: Double!
                Long_: Double!
                email: String!
            }

*/
async function getbyemail(email) {
    const usersCollections = await users();
    const target = await usersCollections.findOne({ email: email });
    if(target == null) throw 'user email not found'

    return target;
}

/*
    in:
        username: String!
        password: String!
        Lat: Double!
        Long_: Double!
        email: String!
    ret:
        user = {
            _id: ID
            username: String!
            password: String!
            Lat: Double!
            Long_: Double!
            email: String!
        }
*/
async function adduser(username, password, Lat, Long_, email) {
    if(username == undefined || password == undefined || Lat == undefined || Long_ == undefined || email == undefined) {
        throw "Input missing! (in user.addusers)"
    }

    const usersCollections = await users();

    let newuser = {
        username: username,
        password: password,
        Lat: Lat,
        Long_: Long_,
        email: email
    }

    const inserted = await usersCollections.insertOne(newuser);
    if(inserted.insertedCount === 0) throw 'Insert fail! (in user.addusers)';

    return await get(inserted.insertedId);
}


/*
    in:
        _id: ID! or String!
        username: String
        password: String
        Lat: Double
        Long_: Double
    ret:
        user = {
            _id: ID!
            username: String!
            password: String!
            Lat: Double!
            Long_: Double!
            email: String!
        }
*/
async function updateuser(_id , username, password, Lat, Long_) {
    if(_id === undefined){
        throw 'input is empty (in user.get)';
    }
    if(_id.constructor != ObjectID){
        if(ObjectID.isValid(_id)){
            _id = new ObjectID(_id);
        }
        else{
            throw 'Id is invalid!(in user.updateuser)'
        }
    }
    
    let target = await get(_id);
    console.log("in updateuser")
    console.log(target);

    const usersCollections = await users();

    if(username == undefined) username = target.username;
    if(password == undefined) password = target.password;
    if(Lat == undefined) Lat = target.Lat;
    if(Long_ == undefined) Long_ = target.Long_;


    let updateuser = {
        $set: {
            _id: target._id,
            username: username,
            password: password,
            Lat: Lat,
            Long_: Long_,
            email: target.email
        }
    }

    const updated = await usersCollections.updateOne({ _id: _id } , updateuser);
    if(updated.modifiedCount === 0) throw 'Update fail! (in user.addusers)';

    return await get(_id);
}

module.exports = {
    get,
    getbyemail,
    adduser,
    updateuser
};