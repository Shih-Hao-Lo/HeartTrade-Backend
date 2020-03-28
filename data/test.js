const userf = require('./user');
const orderf = require('./order');

async function main(){
    // console.log("adding user1...");
    // var user1 = await userf.adduser("hoho" , "hoho112" , 0.0 , 0.0 , "hoho@email.com");
    // console.log("added user:");
    // console.log(user1);

    // console.log("changing password for user1..");
    // var user1_mod = await userf.updateuser(user1._id , undefined , "hoho12345" , undefined , undefined);
    // console.log("updated user:");
    // console.log(user1_mod);

    // console.log("adding user2...");
    // var user2 = await userf.adduser("Ping" , "Ping112" , 0.0 , 0.0 , "Ping@email.com");
    // console.log("added user:");
    // console.log(user2);

    // console.log("adding 3 orders for user1...");
    // var o1 = await orderf.addorders(user1._id , "mask" , 2 , "instant noodle" , 1);
    // var o2 = await orderf.addorders(user1._id , "water" , 1 , "coke" , 2);
    // var o3 = await orderf.addorders(user1._id , "dog" , 1 , "cat" , 2);
    // console.log("added order:");
    // console.log(o1);
    // console.log(o2);
    // console.log(o3);

    // console.log("adding 2 orders for user2...");
    // var o4 = await orderf.addorders(user2._id , "hp computer" , 1 , "ps4 slim" , 1);
    // var o5 = await orderf.addorders(user2._id , "wathc dog" , 1 , "tomb rider" , 2);
    // console.log("added order:");
    // console.log(o4);
    // console.log(o5);

    // console.log("reserve item 3 to Ping")
    // var o3_ass = await orderf.updateorders(o3._id , undefined , undefined , undefined , undefined , "Pending" , user2._id)

    // console.log("changing order...");
    // var o1_mod = await orderf.updateorders(o1._id , undefined , 100 , undefined , undefined , undefined , undefined);
    // var o2_mod = await orderf.updateorders(o2._id , "beer" , 1000 , undefined , undefined , undefined , undefined);
    // console.log("updated order:");
    // console.log(o1_mod);
    // console.log(o2_mod);
    
    var user1 = await userf.get("5e7eaa2280d72a6060225c55");
    console.log("list all order for user1:")
    var orders = await orderf.getbyuser(user1._id);
    console.log(orders);

    // console.log("error checking...");
    // try {
    //     var err1 = await userf.get(undefined);
    //     console.log("u should not see this");
    // } catch(e) {
    //     console.log("error:");
    //     console.log(e);
    // }

    // try {
    //     var err2 = await userf.get("asd");
    //     console.log("u should not see this");
    // } catch(e) {
    //     console.log("error:");
    //     console.log(e);
    // }

    // try {
    //     var err3 = await orderf.addorders(undefined , undefined , undefined , undefined , undefined);
    //     console.log("u should not see this");
    // } catch(e) {
    //     console.log("error:");
    //     console.log(e);
    // }
}

main();