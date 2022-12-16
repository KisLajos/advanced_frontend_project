// The simple buttons on the menu page

import React from "react";
import "./MenuButtons.css";

export default function MenuButton( props ) {
  return (
    <a href={ props.linksto } className="button-container-two-slots">
      <div className="grid-icon">
        <img src={ props.imgsrc } />  
      </div>
      <div className="grid-text">{ props.text }</div>
      
    </a>
  );
}
