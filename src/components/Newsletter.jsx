import React from "react";

const Newsletter = () => {
  return (
    <div className="container mx-auto mt-12 ">
      <div className="bg-primary rounded-md -ml-3 sm:ml-0 w-[110%] md:w-[100%] lg:w-[90%] py-4 sm:py-6 lg:mx-2">
        <div className="flex lg:flex-row space-y-4  sm:space-y-0 md:flex-row flex-col px-2  justify-between">
          <div className=" lg:mx-6  text-[12px] md:text-[16px] md:mx-2 lg:text-[18px] w-[100%] md:w-[47%]  text-white lg:w-[35%]">
            <h1>
              Subcribe to our News letter to stay updated with our new health
              insurance plans{" "}
            </h1>
          </div>

          <div className="flex justify-between px-2  rounded-md py-1 sm:py-3 md:w-[50%] lg:w-[40%] bg-white">
            <div className="lg:py-2 lg:mx-2">
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                className="focus:outline-none text-[12px]"
              />
            </div>
            <div className="bg-primary rounded-sm text-[12px] md:text-[16px] lg:text-[18px] text-white">
              <button className="lg:px-6  md:px-4 md:py-1 py-1 px-3 lg:py-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
