import React from "react";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import Divider from "../assets/divider.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img className="divider" src={Divider} />
      <span className="footer-text">Find us out there</span>
      <div className="social-icons">
        <img src={FacebookIcon} /><a href="https://facebook.com/gedulgt">facebook.com/gedulgt</a>
        <img src={InstagramIcon} /><a href="https://instagram.com/gedulgt">@gedulgtdk</a>
      </div>
      <span className="footnote">2022, Gedulgt, Hajs ApS</span>
    </footer>
  );
}
