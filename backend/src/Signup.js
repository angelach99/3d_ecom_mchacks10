import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link }  from "react-router-dom";

function Signup() {
    const history=useNavigate()
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassWord]=useState('')
    async function submit(e){
    
        try{
            await axios.post("http://localhost:8000/signup",{
                fullName,email,password
            })
            .then(res=>{
                if(res.data==="notexist"){

                    history("/home",{state:{id:fullName}})
                }else if(res.data==="exist"){
                    alert("User exists!")
                }
            })
        }
        catch(e){
                console.log(e);
        }
        
        
    }
    return(
        <div className="Signup">

            <h1>Sign up</h1>

                <input type="fullName" onChange={(e)=>{setFullName(e.target.value)}} placeholder="fullName" name="" id="" />
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassWord(e.target.value)}} placeholder="password" name="" id="" />
                <input type="submit" onClick={submit}/> 
                
            <br />
            <p>OR</p>
            <br/>
            <Link to="/">Log in</Link>
        </div>
    )
}
export default Signup
