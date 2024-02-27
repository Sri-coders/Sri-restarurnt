import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/HomeStyles.css";
import axios from "axios";

function Login(){

   const[details,setdetails]=useState({
    username:"",
    password:"",
   })
   const handlechange=(e)=>{
       const {name,value} = e.target;
       setdetails((prev)=>{
        return{...prev,[name]:value};
       })
   } 
   const handlebutton=()=>{
    axios
    .post("http://localhost:8400/api", details)
    .then((response) => {
      window.alert(JSON.stringify(response.data));
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
    });

   }
   console.log(details)
return(
<Layout>
<h1 className="login">Login page</h1>
      <div className="div">
<br></br>
<br></br>

<label className="Emailname">Email</label>
<input  className="Email"type="text" placeholder="Enter your name" name="username" onChange={handlechange}/>

<label className="passwordname">Password</label>
<input className="password" type="password"  placeholder="Enter your password" name="password" onChange={handlechange}/>

<button className="submit"onClick={handlebutton}>on click</button>

</div>
</Layout>
)}
export default Login;




