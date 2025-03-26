import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
