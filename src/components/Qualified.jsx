import React from "react";
import { qualified } from "../data";

const Qualified = () => {
  const { title, paragraphs, content } = qualified;
  return (
    <div className="container mx-auto">
      <div className="mt-16">
        <h1 className="text-[25px] font-semibold">{title}</h1>
        <p className="text-[18px]">{paragraphs}</p>
        <div className="grid grid-cols-1 gap-x-5  lg:mx-4 mx-4 md:mx-0  md:grid-cols-3 justify-center items-center lg:grid-cols-3 lg:gap-[30px]  mt-10">
          {content.flatMap((items, index) =>
            index === 1 ? (
              <div key={index} className="bg-primary/10 py-6 md:py-6 md:px-2 mb-8 lg:mb-0 px-6">
                <img src={items.image.type} alt="" />
                <div className="leading-9">
                  <h1 className="text-[20px] font-semibold">{items.heading}</h1>
                  <p className="text-[15px] font-medium">{items.paragraph}</p>
                </div>
                <div className="text-center mt-8 ">
                  <a
                    href="google.com"
                    className="bg-primary text-[18px] font-semibold py-3 px-10  lg:py-3 lg:px-12 text-white"
                  >
                    {items.button}
                  </a>
                </div>
              </div>
            ) : (
              <div className="">
                <img src={items.image.type} alt="" />
                <div className="leading-9">
                  <h1 className="text-[20px] font-semibold">{items.heading}</h1>
                  <p className="text-[15px] font-medium">{items.paragraph}</p>
                </div>
                <div className="text-center mt-8 mb-8 lg:mb-0">
                  <a
                    href="google.com"
                    className="bg-primary/20 text-primary text-[18px] font-semibold py-3 px-10 lg:py-3 lg:px-12 text-center"
                  >
                    {items.button}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Qualified;
