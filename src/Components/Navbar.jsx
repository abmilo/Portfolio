import React from "react";
import logo from "../Images/logo.png"
const Navbar = () => {
  const navStyle = "text-white bg-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold rounded-lg main"
  return (
    <nav className="bg-gray-500 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a className="flex flex-shrink-0 items-center mrß-4" to="/">
              <a href="/"><img href="/" src={logo} className="h-12 no-click" alt="" /></a>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a href="/" className={navStyle} >
                  Home
                </a>
                <a href="/hire" className={navStyle}>
                  Contact
                </a>
                <a href="./resume" className={navStyle}>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;