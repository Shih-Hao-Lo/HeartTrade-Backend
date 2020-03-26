const userf = require('./user');
const orderf = require('./order');

async function main(){
    console.log("adding user1...");
    var user1 = await userf.adduser("hoho" , "hoho112" , 0.0 , 0.0 , "hoho@email.com");
    console.log("added user:");
    console.log(user1);

    console.log("changing password for user1..");
    var user1_mod = await userf.updateuser(user1._id , undefined , "hoho222" , undefined , undefined);
    console.log("updated user:");
    console.log(user1_mod);

    console.log("adding 2 orders for user1...");
    var o1 = await orderf.addorders(user1._id , "mask" , 2 , "instant noodle" , 1);
    var o2 = await orderf.addorders(user1._id , "water" , 1 , "coke" , 2);
    console.log("added order:");
    console.log(o1);
    console.log(o2);

    console.log("changing order...");
    var o1_mod = await orderf.updateorders(o1._id , undefined , 100 , undefined , undefined);
    var o2_mod = await orderf.updateorders(o2._id , "beer" , 1000 , undefined , undefined);
    console.log("updated order:");
    console.log(o1_mod);
    console.log(o2_mod);
    
    console.log("list all order for user1:")
    var orders = await orderf.getbyuser(user1._id.toString());
    console.log(orders);

    console.log("error checking...");
    try {
        var err1 = await userf.get(undefined);
        console.log("u should not see this");
    } catch(e) {
        console.log("error:");
        console.log(e);
    }

    try {
        var err2 = await userf.get("asd");
        console.log("u should not see this");
    } catch(e) {
        console.log("error:");
        console.log(e);
    }
}

main();