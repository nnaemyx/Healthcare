import React from "react";

import { insurance } from "../data";

const Insurance = () => {
  const { title, paragraph, content } = insurance;
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <h1 className="lg:text-[25px] hidden mb-2 lg:flex font-semibold">{title}</h1>
        <h1 className="lg:hidden text-[25px] font-semibold mb-2">Our Health Insurance Plans </h1>
        <p className="lg:w-[44rem] lg:text-[18px]">{paragraph}</p>
        <div className="grid grid-cols-1 gap-x-5 lg:mx-4 mx-4 md:grid-cols-3 justify-center items-center lg:grid-cols-3 lg:gap-[30px]  mt-10">
          {content.map((items, index) => {
            return (
              <div key={index} className="items-center">
                <img src={items.image.type} alt="" className="mt-8 lg:mt-0" />
                <h1 className="lg:mb-12 mb-10 mt-2 lg:mt-4 lg:text-[20px] font-semibold">
                  {items.heading}
                </h1>
                <a
                  href="google.com"
                  className="text-center font-bold bg-primary/20 lg:px-20 px-12 py-3 lg:py-3 lg:text-[18px] text-primary"
                >
                  {items.button}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Insurance;
