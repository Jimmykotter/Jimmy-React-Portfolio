// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Navbar from "./Pages/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
    {path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Resume",
    element: <Resume />,
  },
  {
    path: "/Navbar",
    element: <Navbar />,
  },]
}]);

// function App() {
//   return (
//     <>
//     {/* <div><Navbar/></div> */}
//       <RouterProvider router={router} />
//     </>
//   );
// }
      
createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />
)
