import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { CiLogin } from "react-icons/ci";
import { MdOutlineTouchApp } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(err => console.error(err));
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
          <li>
            <Link className="bg-cyan-600 text-white hover:bg-cyan-700 w-25 font-bold" to="/register"> Register <span className="text-xl"><MdOutlineTouchApp /></span></Link>
          </li>
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
            <h2 className="text-xl font-bold">Car Doctor</h2>
          </div>
        <Link to="/" className="text-xl">
          <img className="hidden lg:block w-20" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navlink}</ul>
      </div>
      
    </div>
  );
};

export default Navbar;
