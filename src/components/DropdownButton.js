// The dropdown menus on the menu page

import React from "react";
import DownArrow from "../assets/down_arrow.svg";
import './MenuButtons.css';
import './DropdownButton.css';

export default function DropdownButton( props ) {
  return (

    <button className="button-container dropdown-button">
      <div className="grid-icon">
        <img src={ props.imgsrc } />
      </div>
      <div className="grid-text"> { props.text } </div>
      <div className="grid-arrow">
      <img alt="Down arrow" src={DownArrow} />        
      </div>
    </button>
  );
}
