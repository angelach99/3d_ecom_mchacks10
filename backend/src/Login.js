import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link }  from "react-router-dom";

function Login() {
    const history=useNavigate()
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassWord]=useState('')
    async function submit(e){
        
        console.log("bb");
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:fullName}})
                }else if(res.data=="notexist"){
                    alert("Log in failed, please sign up first.")
                }
            })
        }
        catch(e){
                console.log(e);
        }
        
        
    }
    return(
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassWord(e.target.value)}} placeholder="password" name="" id="" />
            <input type="submit" onClick={submit}/> 
                
            </form>
            <br />
            <p>OR</p>
            <br/>
            <Link to="/signup">Sign up</Link>
        </div>
    )
}
export default Login
