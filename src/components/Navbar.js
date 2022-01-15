import { NavLink, BrowserRouter as Router } from "react-router-dom";
import '../assets/styles/Navbar.css';
import {ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import { useState } from 'react';
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="flex nav">
        <div className=" nav-tp text-white font-serif text-sm border-4 h-12 w-40 text-center pt-2 flex-none">
          THIS INTERIOR
        </div>
        <div className = "text-white nav-items font-serif font-bold text-sm flex flex-row flex-grow "> 
          <Router>
            <div className = {click ? "nav-item" : "mobile nav-items"}>
           <div className="nav-item  nav-item-h " onClick={closeMobileMenu}> <NavLink to="/"> Home </NavLink> </div>

           <div className="nav-item nav-item-c"onClick={closeMobileMenu}><NavLink to="/"> Collection </NavLink> </div>

           <div className="nav-item nav-item-a"onClick={closeMobileMenu}><NavLink to="/"> About </NavLink></div>

           <div className="nav-item nav-item-co"onClick={closeMobileMenu}> <NavLink to="/"> Contact </NavLink></div>
           </div>
            </Router>
              <div className="mobile-menu block " onClick={handleClick}>
                      {click ? (
                        <XIcon />
                      ) : (
                        <ThreeBarsIcon/>
                      )}
                    </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
