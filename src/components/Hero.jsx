import React from "react";
import Heroimage from "../images/Group 27.svg";
import Group from "../images/Hero-Avartar.svg";

const Hero = () => {
  return (
    <div className="container mt-24 mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:gap-[15.7rem]">
        <div className="lg:w-[518px] -mt-16 lg:mt-0">
          <h1 className="text-[20px] lg:-mt-16 lg:text-[48px] mb-4 font-semibold ">
            Simplified and <span className="text-primary">Assessible</span>{" "}
            Healthcare for you an your Family
          </h1>
          <p className="lg:text-[21px] text-[15.6px]">
            Access better Healthcare facilities. Join now to insure your health
            and future for you and your families. Health care is your human
            right.{" "}
          </p>

          <div className="flex mt-8 mb-8 lg:gap-12">
            <div className="w-[150px] lg:w-auto">
              <a
                href="google.com"
                className="border-primary bg-primary border-solid border-[1.5px] text-[14px] text-white font-[600] py-2 px-5  lg:py-3 lg:px-10 rounded-sm"
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

          <div className="lg:flex hidden mt-12 gap-6 ">
            <div className="w-52">
              <img src={Group} alt="" />
            </div>

            <div >
              <h1 className="font-[600]">1000+</h1>
              <p className="font-secondary font-thin lg:text-[15px] text-[10px]">
                Have insured their families with us
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={Heroimage}
            className="lg:w-[445px] w-[285px] -z-10 lg:mt-[-4rem]"
            alt=""
          />
          <div className="flex mt-12 gap-6 lg:hidden ">
            <div className="w-52">
              <img src={Group} alt="" />
            </div>

            <div>
              <h1 className="font-[600]">1000+</h1>
              <p className="font-secondary font-thin">
                Have insured their families with us{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
