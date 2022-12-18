// The simple buttons on the menu page

import React, { useEffect, useRef } from "react";
import RightArrow from "../assets/right_arrow.svg";
import "./DropdownSubbutton.css";
import { motion } from "framer-motion";

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
    <motion.div initial={{opacity: 0, scale: 0, x: -50}} animate={{opacity: 1, scale: 1, x: 0}} exit={{opacity: 0}} ref={subbuttonRef} className={`subbuttons-container ${className}`}>
        
      
      <a href={props.linksto} className="subbutton-container">
          <div className="grid-text">{props.text}</div>
          <motion.img src={RightArrow} alt="Right arrow" />
        </a>
    
        
      </motion.div>
    
  );
}
