import logo from './logo.svg';
import axios from "axios"
import './App.css';
import { useState } from 'react';
function App() {

  async function submit(e) 
  {
    //const [email,setEmail] = useState('')
    //const [password,setPassword] = useState('')
    try{
       await axios.post("http://localhost:5000/signup",{ 
        fullName:"XuningZhang",email:"xzha3789@uwo.ca",password:"Qwertyuiop21!"
       })
     }
     catch(e)
     {
      console.log(e);
     }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type = "submit" onClick = {submit}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
