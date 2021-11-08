import React from 'react';
import background from './Images/5282d04a5446e70d3851fca036b7a0f9.jpg'
import logo from './Images/unnamed.png';
import Typewriter from 'typewriter-effect';
import {
  Link
} from "react-router-dom";

const text = 'Do More of the Things that Matter Most...!';


export default function Main() {
    return (
        <div>
         <div className="App w-100 col-12">
        <div className="mynavbar">
          <img src={logo} style={{width:"10%"}} alt="#"/>
          <Link to="/Register"><i class="far fa-user-circle" style={{fontSize:"45px"}}></i></Link>
        </div>
      <div className="body-container">
        <h1>TODO LIST!</h1>
        <p>{<Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
  onInit={(typewriter) => {
typewriter.typeString(text)
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/>}</p>
        <Link to="/Register" className="hbtn hpill hb-fill-on">Get Started</Link>
      </div>
      <div className="bg-container" ><img src={background} alt="#"/></div>   
        </div></div>
    )
}
