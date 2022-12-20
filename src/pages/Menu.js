import React, { useEffect, useState } from "react";
import MenuButtons from "../components/MenuButtons.js";
import Logo from "../assets/logo_transparent.png";
import "./Menu.css";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        "https://wordpress.lajoskis.dk/wp-json/wp/v2/categories"
      );
      const data = await response.json();
      console.log(data);
      if (data.data?.status !== 404) {
        setCategories(data);
      }
    }
    getCategories();
  }, []);

  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="Gedulgt" className="logo" />
      </div>
      [geˈdulˀd] 1) (l. br.) skjult; gemt; dulgt (3.1). Sæd og Høst.(1905).196.
      i forb. holde noget gedulgt: vi (maatte) holde voris Elskov gedulgt, og
      icke tales ved derom uden om Natten. 2) (især jy.) om person:
      hemmelighedsfuld. Feilb. jf.: jeg kan ikke blive klog paa den Dreng, han
      gaaer saa gedulgt af med Alting.Baud.HS.178.
      
      <MenuButtons categories={categories} />
    </div>
  );
}
