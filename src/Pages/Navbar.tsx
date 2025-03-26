import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to ="/">Jimmy Kotter</Link>
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

// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/pricing">Pricing</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//       </ul>
//     </nav>
//   )
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }