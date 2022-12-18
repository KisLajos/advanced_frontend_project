// The selector button on the products page, which allows the user to switch around different menus

import React from "react";
import parse from "html-react-parser";
import "./Selector.css";
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Selector({ current_menu, prevpageId, nextpageId }) {
  return (
    <motion.div initial={{opacity: 0, scale: 0, y: -50}} animate={{opacity: 1, scale: 1, y: 0}} className="selector-container">
      <div className="selector">
        <NavLink to={`/products/${prevpageId}`}>
          <img className="leftarrow" alt="Left arrow" src={LeftArrow} />
        </NavLink>
        <p className="selector_text">{parse(current_menu)}</p>
        <NavLink to={`/products/${nextpageId}`}>
          <img className="rightarrow" alt="Right arrow" src={RightArrow} />
        </NavLink>
      </div>
    </motion.div>
  );
}
