import React from "react";

const Ad = () => {
  return (
    <>
      {/* add */}
      <div className=" w-full flex justify-between items-center  ">
        <div className=" ml-[30px] w-[147px] text-[15px] font-semibold font-WorkSans text-white h-[44px] ">
          <p> Smart & Responsive ADVERTISEMENT </p>
        </div>
        <div className=" w-[185px] text-[28px] font-semibold font-WorkSans text-white h-[70px] ">
          <p> Get 35% Off Limited Offer </p>
        </div>
        <button className=" w-[118px] mr-[41px] h-[40px] bg-[#E12127] flex text-[15px] font-semibold font-WorkSans text-white justify-center items-center ">
          {" "}
          Shop Now{" "}
        </button>
      </div>
      {/* add */}
    </>
  );
};

export default Ad;
