// Contains general info

import React from "react";
import Divider from "../assets/divider.svg";
import Logo from "../assets/logo_transparent.png";
import Footer from "../components/Footer.js";
import './Info.css';

export default function Info() {
  return (
    <div className="info">
      <div className="logo-container">
        <img src={Logo} alt="Gedulgt" className="logo" />
      </div>
      <p>ADDRESS</p>
      <p>FREDENSGADE 41</p>
      <p>8000 AARHUS</p>
      <img className="divider" src={Divider}/>
      <p>FIND US</p>
      <p>BACKYARD - GREEN DOOR</p>
      <img className="divider" src={Divider}/>
      <p>OPEN</p>
      <p>THURSDAY</p>
      <p>18.00 - 00:00</p>
      <p>FRIDAY & SATURDAY</p>
      <p>16.00 - 02:00</p>
      <img className="divider" src={Divider}/>
      <p>CONTACT</p>
      <a className="info-button" href="mailto:aarhus@gedulgt.dk">AARHUS@GEDULGT.DK</a>
      <img className="divider" src={Divider}/>
      <p>FURTHER INFORMATION</p>
      <a className="info-button" href="https://findsmiley.dk/962310">HEALTH INSPECTION REPORT</a>
      <Footer/>
    </div>
  );
}
