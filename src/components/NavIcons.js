// The small navigation icons on the menu subpages

import React from "react";
import "./NavIcons.css";
import SnacksIcon from "../assets/icon_snacks.svg"
import CocktailsIcon from "../assets/icon_cocktails.svg"
import OtherdrinksIcon from "../assets/icon_otherdrinks.svg"
import MerchIcon from "../assets/icon_merch.svg"
import { NavLink } from "react-router-dom";

export default function NavIcons( props ) {
  console.log(props.selectedIcon);
  const selectedId = props.selectedIconId;

  return (
    <div className="navicons">
      <div className={`icon-container${selectedId === 18 ? " selected-icon-container active-animation" : ""}`}>
        <NavLink to="/products/18"><img alt="Snacks" src={SnacksIcon}/></NavLink>
      </div>
      <div className={`icon-container${selectedId === 11 ? " selected-icon-container active-animation" : ""}`}>
        <NavLink to="/products/11"><img alt="Cocktails" src={CocktailsIcon}/></NavLink>
      </div>
      <div className={`icon-container${selectedId === 22 ? " selected-icon-container active-animation" : ""}`}>
        <NavLink to="/products/22"><img className="otherdrinks-img" alt="Other drinks" src={OtherdrinksIcon}/></NavLink>
      </div>
      <div className={`icon-container${selectedId === 19 ? " selected-icon-container active-animation" : ""}`}>
        <NavLink to="/products/19"><img alt="Merchandise" src={MerchIcon}/></NavLink>
      </div>
    </div>
  );
}
