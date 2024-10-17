import React from "react";
import { FaRegClock } from "react-icons/fa6";

const IndividualPart = ({taitel , icon , date , photo}) => {
  return (
    <>
      <div className="w-[430px] h-[100px] flex items-center pl-[10px] bg-transparent hover:bg-[rgba(130,130,130,0.5)] transition-all ">
        <div className=" w-[80px] h-[80px]">
          <img
            className="w-full h-full"
            src={photo}
            alt="video"
          />
        </div>
        <div className=" ml-[10px] text-white">
          <h2 className=" text-[17px] font-WorkSans font-semibold ">
            {taitel}
          </h2>
          <span className=" text-[13px] font-medium font-WorkSans flex gap-1 mt-[11px] ">
            {" "}
            {icon} {date} {" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default IndividualPart;
