import React from "react";
import ButtomPart from "./subComponet/videoPart/ButtomPart";
import IndividualPart from "./subComponet/videoPart/IndividualPart";
import { FaRegClock } from "react-icons/fa6";

const VideoPart = () => {
  return (
    <>
      <div className=" w-full h-[720px] pt-[56px] pb-[64px] flex bg-brand justify-center ">
        <div className="w-[1170px] h-full ">
          {/* top part */}
          <div className="w-full flex mb-[19px] items-center gap-[14px] text-[25px] font-WorkSans font-semibold text-white ">
            <h2>Video</h2>
            <div className="w-full h-[1px] bg-white "></div>
          </div>

          {/* buttom part */}
          <div className="flex w-full justify-between">
            {/* right video */}
            <ButtomPart />

            {/* left video list */}
            <div className="w-[470px] pt-5 h-[539px] border border-[rgba(134,134,134,0.5)] flex flex-col items-center gap-[10px] ">
              {/* Individual part */}

              <IndividualPart photo="photos/Image(4)1.png" date={'July 02, 2021'} icon={<FaRegClock/>} taitel={'Brings big changes in peoples lives.'} />
              <IndividualPart photo="photos/Image(4)1.png" date={'July 02, 2021'} icon={<FaRegClock/>} taitel={'Brings big changes in peoples lives.'} />
              <IndividualPart photo="photos/Image(4)1.png" date={'July 02, 2021'} icon={<FaRegClock/>} taitel={'Brings big changes in peoples lives.'} />
              <IndividualPart photo="photos/Image(4)1.png" date={'July 02, 2021'} icon={<FaRegClock/>} taitel={'Brings big changes in peoples lives.'} />
              <IndividualPart photo="photos/Image(4)1.png" date={'July 02, 2021'} icon={<FaRegClock/>} taitel={'Brings big changes in peoples lives.'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPart;
