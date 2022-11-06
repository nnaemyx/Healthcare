import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.svg";
import { CgClose } from "react-icons/cg";
import {AiOutlineMenu} from "react-icons/ai"
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div className="container mx-auto">
      <nav
        className={`${
          // if bg is true
          bg
            ? "bg-gray-100 py-4 lg:py-6"
            : // if bg is false
              "bg-none"
        }
        py-2  fixed top-0 left-0 z-10 w-full transition-all duration-200`}
      >
        <div class="container flex gap-4 flex-wrap justify-between items-center mx-auto">
          <div className="">
            <a href="google.com" class="flex items-center">
              <img
                src={Logo}
                class="mr-3 lg:w-40 w-[6rem]  sm:h-9"
                alt="Logo"
              />
              
            </a>
          </div>
          <div class="flex justify-between space-x-3 md:order-2 ">
            <button
              type="button"
              className="border-primary border-solid border-[1.5px] lg:text-[18px] text-primary font-[600] py-2 px-3 text-[14px]  lg:py-3 lg:px-10 rounded-sm"
            >
              Get started
            </button>
            <div
              onClick={() => setMobileNav(!mobileNav)}
              className="lg:hidden text-2xl lg:text-3xl text-primary py-2 cursor-pointer"
            >
              {mobileNav ? <CgClose /> : <AiOutlineMenu />}
            </div>
          </div>
          {/* <div
            class="hidden justify-between  items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          > */}
          <ul class="lg:flex hidden flex-col p-4  mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li className="text-[18px]">
              <Link
                to="/"
                class="block py-2 pr-4 pl-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="text-[18px]">
              <a
                href="google.com"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li className="text-[18px]">
              <a
                href="google.com"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Plans
              </a>
            </li>
            <li className="text-[18px]">
              <a
                href="google.com"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </a>
            </li>
            <li className="text-[18px]">
              <Link
                to="/articles"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Articles
              </Link>
            </li>
            <li className="text-[18px]">
              <a
                href="google.com"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimonials
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </nav>
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } lg:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
      >
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
