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
      <img src={SnacksIcon}/>
      <img src={CocktailsIcon}/>
      <img src={OtherdrinksIcon}/>
      <img src={MerchIcon}/>
    </div>
  );
}
