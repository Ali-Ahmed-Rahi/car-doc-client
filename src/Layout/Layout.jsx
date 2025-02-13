import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";
import DirectCon from "../components/DirectCon";


const Layout = () => {
  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <DirectCon></DirectCon>
     <div className="min-h-screen max-w-7xl mx-auto ">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;