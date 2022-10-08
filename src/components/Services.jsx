import React from "react";

import { services } from "../data";

const Services = () => {
  const { title, paragraphs, content } = services;
  return (
    <div className="container items-center mx-auto">
      <div className="mt-12">
        <h1 className="text-[25px] font-semibold">{title}</h1>
        <p className="lg:w-[43rem] lg:text-[18px] w-[18rem] md:w-[28rem]">{paragraphs}</p>
        <div className="grid grid-cols-1 gap-x-5  lg:mx-12  md:mx-6 md:grid-cols-3 justify-center items-center lg:grid-cols-3 lg:gap-[30px]  mt-10">
          {content.map((items, index) => (
                <div key={index} className='leading-7'>
                  <div>
                    <img src={items.Icons.type} className='mb-4 mt-6' alt="" />
                    <h1 className="mb-4 lg:text-[20px] font-[600]">{items.heading}</h1>
                    <p className="mb-12 lg:w-[265px] md:text-[13px] lg:text-[15px]">{items.paragraph}</p>
                  </div>
                </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
