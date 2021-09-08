import { NavLink, BrowserRouter as Router } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="flex">
        <div className="text-white font-serif text-sm border-4 h-12 w-40 mx-28  text-center pt-2 mt-10">
          {" "}
          THIS INTERIOR{" "}
        </div>
        <div>
          <Router>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/"> Collection </NavLink>
            <NavLink to="/"> About </NavLink>
            <NavLink to="/"> Contact </NavLink>
            </Router>
        </div>
      </div>
    </div>
  );
};
export default Nav;
