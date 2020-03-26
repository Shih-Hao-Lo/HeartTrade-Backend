
const constructorMethod = app => {
    app.get("/" , (req , res) => {
        res.sendStatus(200);
    });
}

module.exports = constructorMethod;