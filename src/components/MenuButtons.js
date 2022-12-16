import React from "react";
import MenuButton from "./MenuButton.js";
import DropdownButton from "./DropdownButton.js";
import SnacksIcon from "../assets/icon_snacks.svg"
import CocktailsIcon from "../assets/icon_cocktails.svg"
import OtherdrinksIcon from "../assets/icon_otherdrinks.svg"
import MerchIcon from "../assets/icon_merch.svg"

export default function MenuButtons() {
  return (
    <div className="menu-buttons">
      <MenuButton linksto="/products" imgsrc={SnacksIcon} text='Snacks' />
      <DropdownButton imgsrc={CocktailsIcon} text='Cocktails' />
      <DropdownButton imgsrc={OtherdrinksIcon} text='Other Drinks' />
      <MenuButton linksto="/products" imgsrc={MerchIcon} text='Merchandise' />
    </div>
  );
}
