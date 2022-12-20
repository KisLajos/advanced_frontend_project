// Contains the door selector for the different Gedulgt bars
// Saves which one was selected, so later based on that selection
// we can load the correct data for viewing

import React from "react";
import { Link } from "react-router-dom";
import RedDoor from "../assets/reddoor.webp";
import GreenDoor from "../assets/greendoor.webp";
import "./Home.css";

export default function Home() {
  return (
    <div className="doors">
      <div className="door-container">
        <span>Aarhus</span>
        <Link to={"/menu/Aarhus"}>
          <img src={GreenDoor} />
        </Link>
      </div>
      <div className="door-container">
        <span>Aalborg</span>
        <Link to={"/menu/Aalborg"}>
          <img src={RedDoor} />
        </Link>
      </div>
    </div>
  );
}
