import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
// import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
  // console.log(window.location.pathname);
  return (
    <nav className="md:lg:nav-larger  bottom-8 rounded-full bg-text p-6 bg-opacity-20 left-1/2 -translate-x-1/2 z-50 fixed">
      <NavLink to="/">
        <h1 className="font-bold text-text hidden lg:md:block text-4xl">
          Wesley Curry
        </h1>
      </NavLink>

      <ul className="flex flex-row gap-24 text-bg lg:md:text-text text-opacity-80 text-2xl font-heading font-light hover:cursor-pointer items-center">
        <NavLink className="" to="/">
          <li>
            <AiFillHome className="text-4xl lg:md:hidden" />
            <p className="hidden md:lg:block">Home</p>
          </li>
        </NavLink>

        <NavLink className="" to="/portfolio">
          <li>
            <BsImages className="text-4xl lg:md:hidden" />
            <p className="hidden md:lg:block">Gallary</p>
          </li>
        </NavLink>

        <NavLink to="/contact" className="">
          <li>
            <AiFillContacts className="text-4xl lg:md:hidden" />
            <p className="hidden md:lg:block">Contact</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
