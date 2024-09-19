import React from 'react'
import { FaRegClock } from 'react-icons/fa6'

const TrandingNews = () => {
  return (
    <>

    <div className=" w-full h-full flex justify-center mt-[57px] ">
        <div className=" w-[1170px] h-full ml-5 ">
            <div className=" flex items-center gap-[9px] mb-[21px] ">
                <h3 className=' text-[25px] font-WorkSans font-semibold text-[#000D39] '>Trending News</h3>
                <div className=" w-[979px] h-[1px] bg-[#EEEEEE] "></div>
            </div>
            <div className=" w-full flex gap-[30px] ">
                {/* one */}
                <div className=" w-[270px] h-[328px] bg-white shadow-lg ">
                    <div className=" w-[270px] h-[215px] bg-[#ccc] flex justify-end ">
                        <div className=" w-[100px] h-[30px] flex justify-center mt-[19px] mr-[20px] items-center text-white text-[15px] font-WorkSans font-semibold bg-[#10D0FA] ">
                            <p> Technology </p>
                        </div>
                    </div>
                    <div className="w-full p-5 ">
                    <span className=" text-[13px] font-medium font-WorkSans flex gap-1 "> <FaRegClock className="text-[18px]"/> July 02, 2021 </span>
                    <p className=' text-[18px] font-semibold font-WorkSans '>The secret to moving this
                    ancient sphinx</p>
                    </div>
                </div>
                {/* one */}

                {/* tow */}

                <div className=" w-[270px] h-[328px] bg-white shadow-lg ">
                    <div className=" w-[270px] h-[215px] bg-[#ccc] flex justify-end ">
                    <div className=" w-[80px] h-[30px] flex justify-center mt-[19px] mr-[20px] items-center text-white text-[15px] font-WorkSans font-semibold bg-[#07B404] ">
                            <p> Sports </p>
                        </div>
                    </div>
                    <div className="w-full p-5 ">
                    <span className=" text-[13px] font-medium font-WorkSans flex gap-1 "> <FaRegClock className="text-[18px]"/> July 02, 2021 </span>
                    <p className=' text-[18px] font-semibold font-WorkSans '>Nancy multi Chinese
                    business woman trying</p>
                    </div>
                </div>
                {/* tow */}


                {/* three */}

                <div className=" w-[270px] h-[328px] bg-white shadow-lg ">
                    <div className=" w-[270px] h-[215px] bg-[#ccc] flex justify-end ">
                    <div className=" w-[80px] h-[30px] flex justify-center mt-[19px] mr-[20px] items-center text-white text-[15px] font-WorkSans font-semibold bg-[#818EFE] ">
                            <p> Worlds </p>
                        </div>
                    </div>
                    <div className="w-full p-5 ">
                    <span className=" text-[13px] font-medium font-WorkSans flex gap-1 "> <FaRegClock className="text-[18px]"/> July 02, 2021 </span>
                    <p className=' text-[18px] font-semibold font-WorkSans '>Bestwood death prompts
                    police investigation</p>
                    </div>
                </div>
                {/* three */}

                {/* four */}

                <div className=" w-[270px] h-[328px] bg-white shadow-lg ">
                    <div className=" w-[270px] h-[215px] bg-[#ccc] flex justify-end ">
                    <div className=" w-[80px] h-[30px] flex justify-center mt-[19px] mr-[20px] items-center text-white text-[15px] font-WorkSans font-semibold bg-[#5200FF] ">
                            <p> Travel </p>
                        </div>
                    </div>
                    <div className="w-full p-5 ">
                    <span className=" text-[13px] font-medium font-WorkSans flex gap-1 "> <FaRegClock className="text-[18px]"/> July 02, 2021 </span>
                    <p className=' text-[18px] font-semibold font-WorkSans '>The secret to moving this
                    ancient sphinx</p>
                    </div>
                </div>
                {/* four */}
            </div>
        </div>
    </div>
      
    </>
  )
}

export default TrandingNews
