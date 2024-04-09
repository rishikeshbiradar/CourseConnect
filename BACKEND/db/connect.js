const mongoose = require("mongoose")

const ConnectToDatabase = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected To Database");
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = ConnectToDatabase;