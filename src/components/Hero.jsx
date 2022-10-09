import React from "react";
import Heroimage from "../images/Group 27.svg";
import Group from "../images/Hero-Avartar.svg";

const Hero = () => {
  return (
    <div className="container mt-[10rem] mx-auto">
      <div className="flex flex-col items-center lg:flex-row md:flex-row lg:gap-[15.7rem] ">
        <div className="lg:w-[518px] md:w-[350px] -mt-16 lg:mt-0">
          <h1 className="text-[20px] lg:-mt-16 lg:text-[48px] md:text-[25px] mb-4 font-semibold ">
            Simplified and <span className="text-primary">Assessible</span>{" "}
            Healthcare for you an your Family
          </h1>
          <p className="lg:text-[21px] text-[15.6px]">
            Access better Healthcare facilities. Join now to insure your health
            and future for you and your families. Health care is your human
            right.{" "}
          </p>

          <div className="flex mt-8 mb-8">
            <div className="w-[150px] lg:w-[180px]">
              <a
                href="google.com"
                className="border-primary bg-primary border-solid border-[1.5px] text-[14px] text-white font-[600] py-2 px-5   lg:py-3 lg:px-10 rounded-sm"
              >
                Get Started
              </a>
            </div>
            <div className="w-[150px] lg:w-auto">
              <a
                href="google.com"
                className="lg:text-[17.5px] text-[14px] text-center font-medium text-primary font-secondary"
              >
                Choose Pricing Plan
              </a>
            </div>
          </div>

          <div className="lg:flex md:flex hidden items-center mt-10 md:gap-2  gap-6 ">
            <div className="w-52 md:w-32">
              <img src={Group} alt="" />
            </div>

            <div>
              <h1 className="font-[600]">1000+</h1>
              <p className="font-secondary font-thin md:text-[10px] lg:text-[15px]">
                Have insured their families with us
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <img
            src={Heroimage}
            className="lg:w-[445px] w-[285px] -z-10 lg:mt-[-4rem] md:-mt-8"
            alt=""
          />
          <div className="flex mt-4 gap-4 md:hidden lg:hidden ">
            <div className="w-52">
              <img src={Group} alt="" />
            </div>

            <div className="">
              <h1 className="font-[600] text-sm">1000+</h1>
              <p className="font-secondary font-thin text-[12px]">
                Have insured their families with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
