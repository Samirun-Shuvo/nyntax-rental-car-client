import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="font-bold mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold mx-2">
        <Link to="">Products</Link>
      </li>
      <li className="font-bold mx-2">
        <Link to="">Services</Link>
      </li>
      <li className="font-bold mx-2">
        <Link to="" className="bg-[#000000] text-white rounded-2xl">
          <span className="">Login</span>
        </Link>
      </li>
      <li className="font-bold mx-2">
        <div className="indicator">
          <span className="indicator-item badge bg-[#2F6E59] text-white">
            0
          </span>
          <div className="grid place-items-center">
            <IoCartOutline className="text-xl font-bold" />
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="w-20" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
