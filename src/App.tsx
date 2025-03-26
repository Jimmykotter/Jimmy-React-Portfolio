import "./App.css";
import { createBrowserRouter} from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Portfolio from "./Pages/Portfolio";
// import Resume from "./Pages/Resume";
import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/About",
//     element: <About />,
//   },
//   {
//     path: "/Contact",
//     element: <Contact />,
//   },
//   {
//     path: "/Portfolio",
//     element: <Portfolio />,
//   },
//   {
//     path: "/Resume",
//     element: <Resume />,
//   },
//   {
//     path: "/Navbar",
//     element: <Navbar />,
//   },
// ]);

// function App() {
//   return (
//     <>
//     {/* <div><Navbar/></div> */}
//       <RouterProvider router={router} />
//     </>
//   );
// }
function App() {
  return (<>
        <Navbar/>
          <Outlet/>
        {/* // <Footer /> */}
        </>
  );
}
export default App;
