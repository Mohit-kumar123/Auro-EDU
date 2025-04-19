import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-indigo-300 transition duration-300">
          AURO Voting
        </Link>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-indigo-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/history" className="hover:text-indigo-300 transition duration-300">
              Governance History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
