import React from "react";
import PastGiveawaysImg1 from "../../assets/PastGiveawaysImg/PastGiveawaysImg1.png";
import PastGiveawaysImg2 from "../../assets/PastGiveawaysImg/PastGiveawaysImg2.jpg";
import PastGiveawaysImg3 from "../../assets/PastGiveawaysImg/PastGiveawaysImg3.jpg";
import PastGiveawaysImg4 from "../../assets/PastGiveawaysImg/PastGiveawaysImg4.jpg";
import PastGiveawaysImgWin1 from "../../assets/PastGiveawaysImg/PastGiveawaysImgWin1.jpg";
import PastGiveawaysImgWin2 from "../../assets/PastGiveawaysImg/PastGiveawaysImgWin2.jpg";
import WinnerName1 from  "../../assets/PastGiveawaysImg/WinnerName1.png";
import WinnerName2 from  "../../assets/PastGiveawaysImg/WinnerName2.png";
import { motion } from "framer-motion";

const PastGiveawys1 = () => {
  return (
    <div className=" bg-[#F7F7F7]  px-20">
      <div className="font-bold text-center text-6xl py-10">Past Giveaways</div>
      <div>
        <div className=" flex justify-center gap-20 py-10 ">
          <div>
            {" "}
            <button className="px-6 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              All
            </button>
          </div>

          <div>
            {" "}
            <button className="px-6 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Vehicles
            </button>
          </div>
          <div>
            {" "}
            <button className="px-6 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Cash
            </button>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: "-10%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" "
        >
          <div className="flex justify-center gap-20 py-10    ">
            <div className=" bg-white rounded-3xl ">
              <div className="m-1 relative">
                <img
                  className=" rounded-[50px] w-[260px] h-[200px]"
                  src={PastGiveawaysImg1}
                  alt=""
                />

                <div className=" bg-white rounded-lg font-bold  w-14  h-6 absolute right-5 top-[12%] text-center ">
                  ⭐3.4
                </div>
              </div>
              <div className="px-9 font-bold ">Winner_name</div>
              <div className=" px-9 text-sm mb-2">
                Lorem ipsum dolor sit amet
              </div>
            </div>

            <div className=" bg-white rounded-3xl ">
              <div className="m-1 relative">
                <img
                  className=" rounded-[50px] w-[260px] h-[200px]"
                  src={PastGiveawaysImg2}
                  alt=""
                />

                <div className=" bg-white rounded-lg font-bold  w-14  h-6 absolute right-5 top-[12%] text-center ">
                  ⭐3.4
                </div>
              </div>
              <div className="px-9 font-bold ">Winner_name</div>
              <div className=" px-9 text-sm mb-2">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className=" bg-white rounded-3xl ">
              <div className="m-1 relative">
                <img
                  className=" rounded-[50px] w-[260px] h-[200px]"
                  src={PastGiveawaysImg3}
                  alt=""
                />

                <div className=" bg-white rounded-lg font-bold  w-14  h-6 absolute right-5 top-[12%] text-center ">
                  ⭐3.4
                </div>
              </div>
              <div className="px-9 font-bold ">Winner_name</div>
              <div className=" px-9 text-sm mb-2">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className=" bg-white rounded-3xl ">
              <div className="m-1 relative">
                <img
                  className=" rounded-[50px] w-[260px] h-[200px]"
                  src={PastGiveawaysImg4}
                  alt=""
                />

                <div className=" bg-white rounded-lg font-bold  w-14  h-6 absolute right-5 top-[12%] text-center ">
                  ⭐3.4
                </div>
              </div>
              <div className="px-9 font-bold ">Winner_name</div>
              <div className=" px-9 text-sm mb-2">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" "
          >
            <img
              className="bg-cover bg-local bg-center  p-10 lg:h-[800px] lg:w-[674px] rounded-[80px]   "
              src={PastGiveawaysImgWin1}
              alt=""
            />
          </motion.p>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className=" "
          >
            <img
              className="bg-cover bg-local bg-center  p-10 lg:h-[800px] lg:w-[674px] rounded-[80px]   "
              src={PastGiveawaysImgWin2}
              alt=""
            />
          </motion.p>
        </div>




        </div>



        <div className="grid grid-cols-2 px-10 gap-16 ">
          <div className=" bg-white w-[600px] rounded-[80px] relative">
            <div className="px-28 pt-16 text-center tracking-wide leading-loose ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className=" text-[#3E86F5] text-center">-Giveaway</div>
            <div  className=" text-center p-10">Winner name</div>
            <div className="absolute right-[45%] -bottom-[10%] " ><img className="  rounded-full h-16 w-16" src={WinnerName1} alt="" /></div>
          </div>






          <div className=" bg-white w-[600px] rounded-[80px] relative">
            <div className="px-28 pt-16 text-center tracking-wide leading-loose ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className=" text-[#3E86F5] text-center">-Giveaway</div>
            <div  className=" text-center p-10">Winner name</div>
            <div className="absolute right-[45%] -bottom-[10%] " ><img className="  rounded-full h-16 w-16" src={WinnerName2} alt="" /></div>
          </div>
        </div>
      
    </div>
  );
};

export default PastGiveawys1;
