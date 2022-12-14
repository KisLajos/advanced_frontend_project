// The small navigation icons on the menu subpages

import React from "react";
import "./NavIcons.css";
import SnacksIcon from "../assets/icon_snacks.svg"
import CocktailsIcon from "../assets/icon_cocktails.svg"
import OtherdrinksIcon from "../assets/icon_otherdrinks.svg"
import MerchIcon from "../assets/icon_merch.svg"

export default function NavIcons() {
  return (
    <div className="navicons">
      <div className="icon-container">
        <img alt="Snacks" src={SnacksIcon}/>
      </div>
      <div className="icon-container">
        <img alt="Cocktails" src={CocktailsIcon}/>
      </div>
      <div className="icon-container">
        <img className="otherdrinks-img" alt="Other drinks" src={OtherdrinksIcon}/>
      </div>
      <div className="icon-container">
        <img alt="Merchandise" src={MerchIcon}/>
      </div>
    </div>
  );
}
