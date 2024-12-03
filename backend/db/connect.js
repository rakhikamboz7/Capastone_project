const mongoose = require("mongoose");


uri= "mongodb+srv://dmy63473:KbFFQskgOsOlIbyo@travle-ease.teoa7.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = () => {
    console.log("conncted db");
    return mongoose.connect(uri, {
        
    });
};
``
module.exports =connectDB