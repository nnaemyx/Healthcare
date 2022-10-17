import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../slider.css'
// import required modules
import { Autoplay, Navigation } from "swiper";

import { testimonials } from "../data";

const TestimonialSlider = () => {
  const { contents } = testimonials;
  return (
    <Swiper className="testimonialSlider" modules={[Autoplay, Navigation]} navigation={true} autoplay={true}>
      {contents.map((content, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-x-5  lg:mx-4 mx-4 md:mx-0  md:grid-cols-2 justify-center items-center lg:grid-cols-3 lg:gap-[30px] mb-20  mt-10">
              {content.testimonialList.map((items, index) => {
                return (
                  <div key={index} className='bg-primary/5 mt-6 lg:mt-0 rounded-md px-8 py-6'>
                    <div className="mb-4 ">
                      <img src={items.avartar.type} alt="" />
                    </div>
                    <div className="space-y-4">
                      <h1 className="font-bold">{items.heading}</h1>
                      <p className="font-medium  text-[16px]">{items.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
