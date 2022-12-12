// Contains general info
//TODO: Contact e-mail should be a button with mailto
//TODO: Health inspection link should be a button

import React from "react";
import Divider from "../assets/divider.svg";
import './Info.css';

export default function Info() {
  return (
    <div className="info">
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
      <p>AARHUS@GEDULGT.DK</p>
      <img className="divider" src={Divider}/>
      <p>FURTHER INFORMATION</p>
      <a href="https://findsmiley.dk/962310">HEALTH INSPECTION REPORT</a>
      <img className="divider" src={Divider}/>
    </div>
  );
}
