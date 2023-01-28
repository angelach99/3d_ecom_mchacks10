const mongoose = require("mongoose")
mongoose.connect("mongodb://benben:<Zfb010420!>@cluster0.pzxao6c.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongoDB connected");
})
.catch(()=>{
    console.log("Failed to connect mongoDB");
})

const newSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user = mongoose.model("user",newSchema);

module.exports = user