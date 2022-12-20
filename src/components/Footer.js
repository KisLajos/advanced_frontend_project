import React from "react";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import Divider from "../assets/divider.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img className="divider" src={Divider} />
      Find us out there
      <div className="social-icons">
        <img src={FacebookIcon} />
        <img src={InstagramIcon} />
      </div>
      <span className="footnote">2022, Gedulgt, Hajs ApS</span>
    </footer>
  );
}
