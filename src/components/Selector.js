// The selector button on the products page, which allows the user to switch around different menus

import React from "react";
import "./Selector.css";
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

export default function Selector({ current_menu }) {
  return (
    <div className="selector-container">
        <div className="selector">
            <img className="leftarrow" src={LeftArrow} />
                <p className="selector_text">{current_menu}</p>
            <img className="rightarrow" src={RightArrow} />
        </div>
    </div>
  );
}
