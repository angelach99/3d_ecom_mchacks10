const express = require("express")
const cors = require("cors")
const user = require("./user")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{
    console.log("BENBEN");
})

app.post("/",async(req,res)=>{
    
    const{email,password}=req.body
    
    try{
        
        const checkEmail = await user.findOne({email:email})
        if(checkEmail){
            const checkPassword = await user.findOne({password:password})
            if(checkPassword){
                res.json("exist")
            }else{
                res.json("notexist")
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
    const{fullName,email,password}=req.body
    const data={
        fullName:fullName,
        email:email,
        password:password
    }
    try{
        const checkEmail = await user.findOne({email:email})
        if(checkEmail){
            res.json("exist")
        }else{
            await user.insertMany([data])
            res.json("notexist")
        }
    }
    catch(e){
            res.json(e)
    }
})

app.listen(8000,()=>{
    console.log("Port connected");
})