import React from "react";
import DiscountRegistrationsImg1 from '../../assets/DiscountRegistrationsImg/DiscountRegistrationsImg1.png';






const DiscountRegistrations1 = () => {



  return (

< div className=' bg-[#F7F7F7] py-10 px-20'>


<div className="flex justify-center">

<div className = "flex justify-center bg-center rounded-[100px] w-[1030px] h-[500px]  "
    style={{backgroundImage: `url(${DiscountRegistrationsImg1})`}} >

<div className=" font-bold text-5xl self-center text-white px-32 text-center ">Don’t Miss The 50% Discount if You register Today
<br />
<button className=" rounded-xl  bg-white text-[#3E86F5] p-6 drop-shadow-2xl hover:bg-cyan-400 px-10 mt-10 text-lg ">
Register Today
            </button>
</div>

</div>
</div>
</div>


  );
};


export default DiscountRegistrations1;
