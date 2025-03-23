import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-4">
      {/* Left: Logo */}
      <NavLink to="/" className="text-2xl font-bold">
        Artist John
      </NavLink>

      {/* Center: Navigation Links */}
      <nav className="flex-1">
        <ul className="flex justify-center items-center list-none gap-9 font-medium text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-4 py-2 rounded-full transition"
                  : "hover:bg-green-400 px-4 py-2 rounded-full transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-4 py-2 rounded-full transition"
                  : "hover:text-green-400 transition"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-4 py-2 rounded-full transition"
                  : "hover:text-green-400 transition"
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Right: Placeholder (if needed) */}
      <div>Contact Me</div>
    </header>
  );
};

export default Navbar;
