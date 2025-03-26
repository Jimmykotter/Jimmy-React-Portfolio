import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Jimmy Kotter</Link>
      <ul>
        <li className="active">
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li className="active">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="active">
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
        <li className="active">
          {" "}
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

//navbar includes a link to all the pages.