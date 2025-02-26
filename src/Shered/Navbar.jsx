import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { CiLogin } from "react-icons/ci";

import { CgLogOut } from "react-icons/cg";
import { IoCallOutline, IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";

import { HiOutlineMailOpen } from "react-icons/hi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(err => console.error(err));
  };

  const openMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          let url = `https://www.google.com/maps/dir//Q5J6%2BC8X+Abdur+Rahman%E2%80%99s+residence,+Mollahpur+Union/@24.7816126,92.1588094,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3751c92a80920069:0x4e750e27ef064252!2m2!1d92.1608619!2d24.7811086!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D&q=${lat},${lon}`;
          window.open(url, "_blank"); 
        },
        (err) => {
          console.log(err);
          alert("Unable to retrieve location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const navlink = (
    <>
      {user?.email ? (
        <>
          <li>
            <Link className="bg-orange-500 md:bg-white md:shadow-2xl" to="/">Home</Link>
          </li>
          <li>
            <Link className="bg-orange-500 md:bg-white md:shadow-2xl" to="/service/67a0d5e67328ad68c66948d2">Services</Link> 
          </li>
          <li>
            <Link className="bg-orange-500 md:bg-white md:shadow-2xl" to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link className="bg-red-600 text-white hover:bg-red-700" onClick={handleLogout}>LogOut <CgLogOut /></Link>
          </li>
        </>
      ) : (
        <>
          {/* <li>
            <Link className="bg-cyan-600 text-white hover:bg-cyan-700 w-25 font-bold" to="/register"> Register <span className="text-xl"><MdOutlineTouchApp /></span></Link>
          </li> */}
          <li>
          
            <Link className="bg-green-600 text-white hover:bg-green-700 w-25 font-bold" to="/login"><span className="text-xl"><CiLogin /></span> Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white font-semibold z-10">
      
      <div className="navbar-start z-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
          >
            {navlink}
            
          </ul>
        </div>
        <div className="md:hidden block">
            <Link to="/" className="text-xl font-bold">Car Doctor</Link>
          </div>
        <Link to="/" className="text-xl">
          <img className="hidden lg:block w-20" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navlink}</ul>
      </div>
      {/*  */}
      <div className="fixed z-50 bottom-0 w-full bg-white shadow-2xl lg:hidden block">
          <div className="flex justify-around items-center py-2">
            <a
              href="tel:+8801942432047 "
              className="flex flex-col items-center text-black"
            >
              <IoCallOutline className="w-6 h-6" />
              <p>Call</p>
            </a>
            <a
              href="mailto:aliahmedrahi75@gmail.com"
              className="flex flex-col items-center text-black"
            >
              <HiOutlineMailOpen className="w-6 h-6" />
              <p>Email</p>
            </a>

            <a
              href="https://wa.me/+8801942432047"
              className="flex flex-col items-center text-black"
            >
              <IoLogoWhatsapp className="w-6 h-6" />
              <p>WhatsApp</p>
            </a>
            <a onClick={openMyLocation} className="flex flex-col items-center text-black">
              <IoLocationOutline  className="w-7 h-7" />
              <p>Route</p>
            </a>
          </div>
        </div>
      
    </div>
  );
};

export default Navbar;
