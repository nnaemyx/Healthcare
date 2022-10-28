import React from "react";
import Logo1 from "../images/Logo1.svg";
import { AiOutlineTwitter } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import {FaLinkedinIn} from 'react-icons/fa'
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="bg-primary container mx-auto">
      <div className="text-white flex lg:flex-row md:flex-row md:gap-[4rem] flex-col lg:gap-[16rem] mt-10">
        <div className="mt-10">
          <img src={Logo1} alt="" />
          <p className="py-4 lg:w-[20rem] md:w-[20rem]">
            Healthcare is your human right, you have access to health care
            facilties. Join and insure yourelf and your family members
          </p>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col gap-[2rem] md:gap-[4rem] lg:gap-[10rem] mb-8 mt-10">
          <div>
            <h6 className="font-medium">About Us</h6>
            <ul>
              <li className="py-2 text-sm">Plans </li>
              <li className="py-2 text-sm">Doctors</li>
              <li className="py-2 text-sm">Articles </li>
              <li className="py-2 text-sm">Testimonials </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium">Contact Us </h6>
            <ul>
              <li className="py-2 text-sm">+1 (456) 345-4560</li>
              <li className="py-2 text-sm">contact@lademedics.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center items-center flex lg:flex-row flex-col lg:gap-[2rem] gap-[1rem] mx-auto justify-center">
        <div>
          <p className=" ml-4 text-gray-100">
            © 2022 Lade Medics All rights reserved.
          </p>
        </div>

        <div className="flex gap-[1rem] text-white">
          <IconContext.Provider value={{ color: '#009A56', size:'32px',} } >
            <AiOutlineTwitter className="border bg-white p-2 rounded-full" />
            <ImFacebook className="border p-2 bg-white rounded-full" />
            <FaLinkedinIn className="border p-2 bg-white rounded-full"/>
          </IconContext.Provider>
        </div>

      </div>
    </div>
  );
};

export default Footer;
