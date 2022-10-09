import React from "react";
import Logo1 from "../images/Logo1.svg";
import {Link} from "react-router-dom"

const NavMobile = () => {
  return (
    <nav className="bg-primary z-0 shadow-2xl w-[60%] h-full">
      <ul className="text-center h-full flex flex-col items-center active:dark:text-primary justify-center gap-y-6">
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white rounded hover:bg-primary/20 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-white   dark:hover:text-white "
          >
            Services
          </a>
        </li>
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white rounded hover:bg-primary/20 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white  "
          >
            Plans
          </a>
        </li>
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white rounded hover:bg-primary/20 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white"
          >
            Team
          </a>
        </li>
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white rounded hover:bg-primary/20 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white"
          >
            Articles
          </a>
        </li>
        <li className="text-[18px]">
          <a
            href="google.com"
            class="block py-2 pr-4 pl-3 text-white rounded hover:bg-primary/20 md:hover:bg-transparent md:hover:text-primary md:p-0  dark:hover:text-white"
          >
            Testimonials
          </a>
        </li>
        <Link to='/'>
          <a href="/" className="flex mt-12 items-center">
            <img src={Logo1} className=" lg:w-40 w-[8rem]  sm:h-9" alt="Logo" />
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMobile;
