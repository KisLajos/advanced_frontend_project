import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
/* import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md" */;

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState("closed-nav-height");

  const changeHeight = (toggled) => {
    if (toggled) {
      setHeight("opened-nav-height");
    } else {
      setHeight("closed-nav-height");
    }
  };

  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);

    changeHeight(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={"navbar " + height}>
      <span onClick={toggleNavbar} className="btn">
        {toggleMenu ? "Close" : "> Gedulgt"}
      </span>

      {(toggleMenu || screenWidth > 768) && (
        <ul className="list">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
          <li>
            <a href="https://gedulgt.dinesuperb.com/">Booking</a>
          </li>
          <li>
            <a href="https://giftcard.dinesuperb.com/gedulgt">Gift card</a>
          </li>
          <li>
            <NavLink to="/cocktailworkshops">Cocktail Workshops</NavLink>
          </li>
          <li>
            <NavLink to="/gedulgtprivate">Gedulgt Private</NavLink>
          </li>
          <li>
            <NavLink to="/gedulgtdining">Gedulgt Dining</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}