import React from "react";
import { content } from "../data";

const LatestPost = () => {
  return (
    <div className="container mx-auto mt-[7rem]">
      <div>
        <div className="bg-hero invert-[30%] sepia-[63%] saturate-[3241%] hue-rotate-[139deg] brightness-[100%] contrast-[100%] w-full bg-right bg-cover bg-no-repeat text-white pt-[25px] pb-[80px] relative mb-12 lg:bg-center">
          <div className="text-center mx-auto mt-[3rem] ">
            <h1 className="text-xl font-semibold  text-primary  lg:text-[44px]">
              Articles
            </h1>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Latest Post</h1>
        <div className="grid grid-cols-1 gap-x-5  lg:mx-4 mx-4 md:mx-0  md:grid-cols-3 justify-center items-center lg:grid-cols-3 lg:gap-[30px] mt-10">
          {content.map((items, index) => {
            return (
              <div key={index} className="space-y-4">
                <div className="mt-6 lg:mt-0">
                  <img src={items.image.type} alt="" />
                </div>
                <div className="space-y-2 mb-4">
                  <h1 className='text-[18px] font-semibold'>{items.heading}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
