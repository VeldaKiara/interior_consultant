import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { ThreeBarsIcon, XIcon } from "@primer/octicons-react";
import { useState } from "react";
const Nav = () => {
  const [showMenu,  setshowMenu] = useState(false);
  // handle menu
  const handleMenu = (event)=> {
    event.preventDefault();
    setshowMenu(!showMenu);
  }
  return (
    <div>
      <div className="flex nav">
        <div className=" nav-tp text-white font-serif text-sm border-4 h-12 w-40 text-center pt-2 flex-none">
          THIS INTERIOR
        </div>
        <div className="text-white nav-items font-serif font-bold text-sm flex flex-row flex-grow ">
          <Router>
          <div className="nav-items">  
          <div className={ showMenu ? "mobile" : "desktop" }>   
          <NavLink  exact to="/" className="nav-item" activeClassName="nav-item-active"> Home </NavLink>
          <NavLink exact to="/collection" className="nav-item" activeClassName="nav-item-active"> Collection </NavLink>
          <NavLink exact to="/about" className="nav-item" activeClassName="nav-item-active"> About </NavLink>
          <NavLink exact to="/contact" className="nav-item" activeClassName="nav-item-active"> Contact </NavLink>
          </div>   
            </div>
          </Router>
          <div className="mobile-menu block " onClick={handleMenu}>
            {showMenu ? <XIcon size={24} /> : <ThreeBarsIcon size={24} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
