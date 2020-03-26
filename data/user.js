const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;


/*
    in: 
        id: ID!
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
    const usersCollections = await users();
    const target = await usersCollections.findOne({ _id: id });

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
function adduser(username, password, Lat, Long_, email) {
    const usersCollections = await users();

    let newuser = {
        username: username,
        password: password,
        Lat: Lat,
        Long_: Long_,
        email: email
    }

    const inserted = await usersCollections.insertOne(newuser);

    return await get(inserted.insertedId);
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
        user = {
            _id: ID!
            username: String!
            password: String!
            Lat: Double!
            Long_: Double!
            email: String!
        }
*/
function updateuser(_id , username, password, Lat, Long_, email) {
    let target = await get(_id);
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

    return await get(_id);
}

module.exports = {
    get,
    adduser,
    updateuser
};