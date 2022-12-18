import React from "react";
import MenuButton from "./MenuButton.js";
import DropdownButton from "./DropdownButton.js";
import SnacksIcon from "../assets/icon_snacks.svg"
import CocktailsIcon from "../assets/icon_cocktails.svg"
import OtherdrinksIcon from "../assets/icon_otherdrinks.svg"
import MerchIcon from "../assets/icon_merch.svg"

export default function MenuButtons( categories ) {
  return (
    <div className="menu-buttons">
      <MenuButton mainmenu={true} linksto="/products/18" imgsrc={SnacksIcon} text='Snacks' />
      <DropdownButton imgsrc={CocktailsIcon} categories={categories} text='Cocktails' type="cocktails"/>
      <DropdownButton imgsrc={OtherdrinksIcon} categories={categories} text='Other Drinks' type="otherdrinks"/>
      <MenuButton mainmenu={true} linksto="/products/19" imgsrc={MerchIcon} text='Merchandise' />
    </div>
  );
}
