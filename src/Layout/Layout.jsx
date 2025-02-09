import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
     <div className="min-h-screen max-w-7xl mx-auto">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;