import React from "react";
import Logo from "../assets/logo_transparent.png";
import "./Menu.css";
import Products from "./Products";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <img src={Logo} alt="Gedulgt" className="logo" />
      [geˈdulˀd] 1) (l. br.) skjult; gemt; dulgt (3.1). Sæd og Høst.(1905).196.
      i forb. holde noget gedulgt: vi (maatte) holde voris Elskov gedulgt, og
      icke tales ved derom uden om Natten. 2) (især jy.) om person:
      hemmelighedsfuld. Feilb. jf.: jeg kan ikke blive klog paa den Dreng, han
      gaaer saa gedulgt af med Alting.Baud.HS.178.
      <Link to ="/products">Products</Link>
    </div>
  );
}
