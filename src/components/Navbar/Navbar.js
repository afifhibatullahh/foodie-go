import React from "react";

const Navbar = () => {
  return (
    <div
      className={
        "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
      }
    >
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow">
          <img
            className="w-12 cursor-pointer"
            src={
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80"
            }
            alt="logo"
          />
        </div>

        <>
          <div className="flex items-center justify-end space-x-6">
            <button className="poppins">Sign In</button>
            <button className=" bg-primary px-6 py-3 text-white poppins rounded-full bg-red-500 ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
              Sign Up
            </button>
          </div>
        </>
      </nav>
    </div>
  );
};

export default Navbar;
