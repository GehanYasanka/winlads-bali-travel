import React from "react";
import LandingBGImg1 from "../../assets/LandingPageImg/LandingBGImg1.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import LandingImg1 from "../../assets/LandingPageImg/LandingImg1.png";
import LandingPrice1 from "../../assets/LandingPageImg/LandingPrice1.jpg";
import LandingPrice2 from "../../assets/LandingPageImg/LandingPrice2.png";
import LandingPrice3 from "../../assets/LandingPageImg/LandingPrice3.jpg";



const LandingPage1 = () => {
  return (
    <div className="  ">
      <div
        className="bg-cover bg-local bg-center grid p-1 h-full w-full "
        style={{ backgroundImage: `url(${LandingBGImg1})` }}
      >
        <div>
          <Navbar />
        </div>

        <div className=" justify-self-center px-36 text-justify">
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="  text-9xl text-white font-semibold text-center "
          >
            WIN A TRIP TO BALI!
          </motion.p>

          <div className="justify-self-center px-12 text-center pb-[300px] pt-5 ">
            {" "}
            <motion.p
              initial={{ opacity: 0, y: "-10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className=" leading-10   text-[#1C2B38] font-semibold px-28 text-xl "
            >
              Purchase a one off package today, or sign up to any subscription
              and unlock a range of extra benefits, including accumulating
              monthly entries into every giveaway, discounts in store with all
              our partners, access to your own personalised referral ID and so
              much more!
            </motion.p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-20  ">
        <div className="  text-right place-self-center ">
          <div className="  ">
            <motion.p
              initial={{ opacity: 0, y: "-10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" text-5xl p-16 font-bold "
            >
              Kim Kardashian’s
            </motion.p>
          </div>
          <div className="  ">
            <motion.p
              initial={{ opacity: 0, y: "-10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="  pb-16 px-16 leading-10 text-xl "
            >
              The architect has maintained specific processional routes that
              residents use to reach the beach during religious ceremonies, and
              he uses local materials such as Batu candi volcanic stone and gray
              sandstone from nearby riverbanks for the villa interiors. SCDA
              also worked with native craftspeople on the bronze and stone
              accents found throughout the resort, including in all 48 villas.
            </motion.p>
          </div>
          <div className="px-16 pb-16">
            <button className="rounded-lg bg-[#3E86F540] p-6 drop-shadow-2xl hover:bg-cyan-400 px-10 text-lg ">
              Contact Us
            </button>
          </div>
        </div>
        <div className=" ">
          <div className="relative">
            <img
              className="bg-cover bg-local bg-center  p-10 h-[800px] w-[674px] rounded-[80px]   "
              src={LandingImg1}
              alt=""
            />

            <div className="absolute left-2 top-[50%] bg-slate-100 rounded-xl px-4 py-1">
              <div className=" text-[#3E86F5] text-center font-bold text-2xl ">
                $6000
              </div>
              <div className="text-center">Cashouts</div>
            </div>
            <div className="absolute right-2 top-[25%]  bg-slate-100 rounded-xl px-4 py-1">
              <div className=" text-[#3E86F5] text-center font-bold text-2xl ">
                300+
              </div>
              <div className="text-center">Total Members</div>
            </div>
            <div className="absolute  right-2 top-[75%]  bg-slate-100 rounded-xl px-4 py-1">
              <div className=" text-[#3E86F5] text-center font-bold text-2xl ">
                20
              </div>
              <div className="text-center">Giveaways</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-20">
        <div className=" font-bold text-center text-6xl">
          7 Nights stay and its valued at $16,000
        </div>

        <div className=" grid lg:grid-cols-3 justify-center my-10 gap-1 px-20 ">
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" "
          >
            <div>
              <div className=" pt-10 pl-10 pr-10 bg-white rounded-xl flex ">
                <div className="">
                  <img
                    className="bg-cover bg-local bg-center flex-none  w-[293px] h-[348px]  rounded-[ 80px]  "
                    src={LandingPrice1}
                    alt=""
                  />
                </div>

                <div className=" text-lg tracking-[1.25em] flex-initial rotate-90 h-7 mt-16 w-32 text-center ">
                  Loremipsum
                </div>
              </div>
              <div className=" justify-center flex mt-2">
                <button className="rounded-lg bg-[#d5dff6] p-1 drop-shadow-2xl hover:bg-cyan-400 px-10 text-lg text-[#3E86F5]">
                  Sign up now
                </button>
              </div>
            </div>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className=" "
          >
            <div>
              <div className=" pt-10 pl-10 pr-10 bg-white rounded-xl flex ">
                <div className="">
                  <img
                    className="bg-cover bg-local bg-center flex-none  w-[293px] h-[348px] rounded-[80px]   "
                    src={LandingPrice2}
                    alt=""
                  />
                </div>

                <div className=" text-lg tracking-[1.25em] flex-initial rotate-90 h-7 mt-16 w-32 text-center ">
                  Loremipsum
                </div>
              </div>
              <div className=" justify-center flex mt-2">
                <button className="rounded-lg bg-[#d5dff6] p-1 drop-shadow-2xl hover:bg-cyan-400 px-10 text-lg text-[#3E86F5]">
                  Sign up now
                </button>
              </div>
            </div>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "-10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className=" "
          >
            <div>
              <div className=" pt-10 pl-10 pr-10 bg-white rounded-xl flex ">
                <div className="">
                  <img
                    className="bg-cover bg-local bg-center flex-none  w-[293px] h-[348px] rounded-[80px]   "
                    src={LandingPrice3}
                    alt=""
                  />
                </div>

                <div className=" text-lg tracking-[1.25em] flex-initial rotate-90 h-7 mt-16 w-32 text-center ">
                  Loremipsum
                </div>
              </div>
              <div className=" justify-center flex mt-2">
                <button className="rounded-lg bg-[#d5dff6] p-1 drop-shadow-2xl hover:bg-cyan-400 px-10 text-lg text-[#3E86F5]">
                  Sign up now
                </button>
              </div>
            </div>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
