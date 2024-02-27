import React from "react";
import {Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const Header =()=>{

  return (
    <>
   
        <div style={{backgroundColor:"black"}}>
            <div style={{color:"red", height:"90px", paddingTop:"40px", paddingLeft:"700px"}}>
              <ul  className="navigation-menu"   >

                <li className="navigation-menu"><Link  to={"/"}>Home </Link> </li>
                <li><Link  to={"/menu"}>Menu </Link> </li>
                <li><Link  to={"/about"}>About </Link> </li>
                <li><Link  to={"/contact"}>Contact </Link> </li>
                <li><Link  to={"/Login"}>Login </Link> </li>
              </ul>
            </div>
            </div>
          
    </>
  );
};

export default Header;
