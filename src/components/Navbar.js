import { NavLink, BrowserRouter as Router } from "react-router-dom";
import '../assets/styles/Navbar.css';

const Nav = () => {
  return (
    <div>
      <div className="flex nav">
        <div className="text-white font-serif text-sm border-4 h-12 w-40 text-center pt-2 flex-none">
          THIS INTERIOR
        </div>
        <div className = "text-white nav-items font-serif font-bold text-sm flex flex-row flex-grow "> 
          <Router>
           <div className="nav-item  nav-item-h"> <NavLink to="/"> Home </NavLink> </div>

           <div className="nav-item nav-item-c"><NavLink to="/"> Collection </NavLink> </div>

           <div className="nav-item nav-item-a"><NavLink to="/"> About </NavLink></div>

           <div className="nav-item nav-item-co"> <NavLink to="/"> Contact </NavLink></div>
            </Router>
        </div>
      </div>
    </div>
  );
};
export default Nav;
