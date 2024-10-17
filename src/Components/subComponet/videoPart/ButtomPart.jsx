import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { RiPlayListAddFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

const ButtomPart = () => {
  return (
    <>
      <div className="w-[670px] h-[546px] ">
        <div className="w-full h-[460px] bg-black relative ">
          <img src="photos/VideoPartImage.png" alt="video" />
          <img
            className=" absolute top-[42%] left-[44%]"
            src="photos/PlayButton.png"
            alt="play"
          />
        </div>
        <div className="w-full mt-[17px] text-[17px] font-semibold font-WorkSans text-white ">
          <h2>
            Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It
            All
          </h2>
          <div className="w-full flex justify-between mt-[12px]">
            <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
              {" "}
              <FaRegClock className="text-[18px]" /> July 02, 2021{" "}
            </span>
            <div className=" flex gap-[18px] ">
              <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
                {" "}
                <AiFillLike className="text-[18px]" /> 2.36M{" "}
              </span>
              <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
                {" "}
                <BiSolidDislike className="text-[18px]" /> 520K{" "}
              </span>
              <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
                {" "}
                <IoIosShareAlt className="text-[18px]" /> SHARE{" "}
              </span>
              <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
                {" "}
                <RiPlayListAddFill className="text-[18px]" /> SAVE{" "}
              </span>
              <span className=" text-[13px] font-medium font-WorkSans flex gap-1 ">
                {" "}
                <SlOptions className="text-[18px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtomPart;
