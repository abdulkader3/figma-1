import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Ad = () => {
  return (
    <>
       <div className=" w-[770px] h-[130px] midPageAdd absolute  left-[25%] bottom-[-200px] ">
          <div className=" flex gap-[10px] items-center justify-end pr-2 ">
            <p className=" text-[16px] text-[#cfcfcf] ">
              {" "}
              <IoIosInformationCircleOutline />{" "}
            </p>
            <p className=" text-[16px] text-[#cfcfcf] ">X</p>
          </div>


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



        </div>
    </>
  );
};

export default Ad;
