const express = require("express")
const cors = require("cors")
const user = require("./user")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        
        const checkEmail = await user.findOne({email:email})
        if(checkEmail){
            const checkPassword = await user.findOne({password:password})
            if(checkPassword){
                res.json("Log in successfully!")
            }else{
                res.json("Incorrect password")
            }
            
        }else{
            res.json("The email has not been signed up")
        }
    }
    catch(e){
            res.json(e)
    }
})

app.post("/signup",async(req,res)=>{
    res.header( "Access-Control-Allow-Origin" );
    const{fullName,email,password}=req.body
    const data={
        fullName:fullName,
        email:email,
        password:password
    }
    try{
        console.log(email);
        const checkEmail = await user.findOne({email:email})
        console.log(checkEmail);
        if(checkEmail){
            console.log("2");
            res.json("Email already exists!")
        }else{
            await user.insertMany({data})
            console.log("1");
            res.json("Sign up successfully")
        }
    }
    catch(e){
            res.json(e)
    }
})

app.listen(5000,()=>{
    console.log("Port connected");
})