
const mongoose = require("mongoose")
const URL = "mongodb+srv://benben:zhaofubin@cluster0.pzxao6c.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
    console.log("mongoDB connected");
})
.catch((err)=>{
    console.log(err);
})
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