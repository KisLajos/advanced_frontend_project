// The simple buttons on the menu page

import React, { useEffect, useRef } from "react";
import RightArrow from "../assets/right_arrow.svg";
import "./DropdownSubbutton.css";

export default function DropdownSubbutton(props) {
  const subbuttonRef = useRef();
  const onClose = props.onClose;
  const className = props.className;

  useEffect(() => {
    subbuttonRef.current.addEventListener(
      "animationend",
      () => {
        if (className === "closeAnim") {
          onClose(false);
        }
      },
      { once: true }
    );
  }, [className, onClose]);

  return (
    <div ref={subbuttonRef} className={`subbuttons-container ${className}`}>
      <a href={props.linksto} className="subbutton-container">
        <div className="grid-text">{props.text}</div>
        <img src={RightArrow} alt="Right arrow" />
      </a>
    </div>
  );
}
