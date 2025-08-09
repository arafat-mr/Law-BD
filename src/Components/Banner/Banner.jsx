import React from "react";

const Banner = () => {
    
  return (
    <div className=" p-3  mulish   ">
      <div className='bg-[url("/banner-img-1.png")] text-white  p-5
       rounded-lg bg-cover bg-center h-80 flex flex-col items-center justify-center gap-5 md:h-[400px] md:bg-cover md:bg-center lg:w-11/12 lg:mx-auto lg:h-[500px]   shadow-xl '>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center opacity-90 ">
          It avoids subjective claims or <br />  exaggeration that might raise red <br className="" /> flags
          legally
        </h2>
        <p className="text-xs md:text-sm lg:text-sm font-semibold opacity-80 text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a  <br /> routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      {/* <img className="w-[1230px] rounded mx-auto" src="/public/banner-img-1.png" alt="" /> */}
    </div>
  );
};

export default Banner;
