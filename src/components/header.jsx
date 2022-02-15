import React  from "react";

import "../assets/css/root.css"
import "../assets/css/header.css"

import logo from "../assets/img/Rockstar_Games_Logo.png"

function Header(){
    return(
        <header>
            <img src={logo} alt="" />
        </header>
        
    )
}
export default Header; 