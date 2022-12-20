import React from "react";
import DividerSvg from "../assets/divider.svg"
import "./Divider.css";

export default function Divider() {
  return (
    <div className="divider-container">
      <img style={{maxWidth: "100%"}}src={DividerSvg} />
    </div>
  );
}
