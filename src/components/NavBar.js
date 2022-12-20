import { useEffect, useState } from "react";
import DownArrow from "../assets/down_arrow.svg";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    setToggleMenu(false);
  }, [pathname]);

  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);
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
    <nav className={"navbar"}>
      <span onClick={toggleNavbar} className="navbtn">
        {toggleMenu ? (
          <div className="togglebtn">
            Close <img className="closeimg" src={DownArrow} />
          </div>
        ) : (
          <div className="togglebtn">
            Gedulgt <img className="openimg" src={DownArrow} />
          </div>
        )}
      </span>
      {(toggleMenu || screenWidth > 768) && (
        <ul className="list">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
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
