import React from "react";
import Logo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  mt-4 justify-between">
        <img src={Logo} className="w-40" alt="logo" />
        <div className="lg:flex hidden active:text-primary">
          <ul className="flex gap-9 mt-4 ">
            <li className="active:text-primary">Home</li>
            <li className="active:text-primary">Services</li>
            <li className="active:text-primary">Plans</li>
            <li className="active:text-primary">Team</li>
            <li className="active:text-primary">Articles</li>
            <li className="active:text-primary">Testimonials</li>
          </ul>
        </div>
        <div className="lg:flex hidden">
          <a
            href="google.com"
            className="border-primary border-solid border-[1.5px] text-primary font-[600]  py-3 px-10 rounded-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
