import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .then(err=>console.error(err)
    )
  }
  const navlink = (
    <>
      {user?.email ? (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/bookings'>My Bookings</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>LogOut</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-white font-semibold ">
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img className="hidden lg:block w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
