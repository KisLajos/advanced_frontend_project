// The dropdown menus on the menu page

import React, { useState } from "react";
import DownArrow from "../assets/down_arrow.svg";
import DropdownSubbutton from "./DropdownSubbutton.js";
import parse from "html-react-parser";
import "./MenuButtons.css";
import "./DropdownButton.css";

export default function DropdownButton( props ) {
  const [open, setOpen] = useState(false);
  const categories = props.categories.categories;
  const current_category = props.type;
  const [showSubbutton, setShowSubbutton] = useState(false);
  const [className, setClassName] = useState("");

  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      setShowSubbutton(open);
    }

    setClassName(open ? "openAnim" : "closeAnim");
  };

  return (
    <>
      <button onClick={handleOpen} className="button-container dropdown-button">
        <div className="grid-icon">
          <img src={props.imgsrc} />
        </div>
        <div className="grid-text"> {props.text} </div>
        <div className="grid-arrow">
          <img alt="Down arrow" src={DownArrow} />
        </div>
      </button>
      {open ? (
        <div className="dropdown-content">
          {console.log(categories)}
          {categories?.length > 0
            ? categories.map((category) =>
                category.slug.split("-")[0] === current_category ? (
                  <DropdownSubbutton
                    className={className}
                    onClose={setShowSubbutton}
                    key={category.id}
                    linksto={
                      "/products/" +
                      category.id
                    }
                    text={parse(category.name)}
                  />
                ) : null
              )
            : "Loading..."}
        </div>
      ) : null}
    </>
  );
}
