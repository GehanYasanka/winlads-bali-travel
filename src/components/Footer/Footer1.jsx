
import React from 'react';
import HeaderLogo from '../../assets/Logo/winLads_Logo.png';
import { Link } from 'react-router-dom';
const Footer1 = () => {



  return (
<div className='bg-[#F7F7F7] py-10 px-20'>
<div className=' grid lg:grid-cols-6 items-center '>

<div className=" Logo size-36 float-left py-10 ">
        <Link to="/"> <img  src={HeaderLogo} alt="" /></Link>
        </div>
  <div>
<div className=' font-bold' >

Quick Links
</div>
<div className='pt-2 text-xs'>
Privacy Policy
</div>
<div className='pt-2 text-xs'>

Terms and Conditions
</div>


  </div>



  <div>
    <div className='pt-5 font-bold'>Contact us</div>
    
    <div className='text-xs pt-2' >info@winladsgiveaway.con</div>
    </div>





  <div className='lg:col-span-3  text-xs py-5' >Copyright 2024 Winlads. All Rights Reserved.| ABN: 87671535149 | NSW: TP/03199 |Permit No: ACT TP 23/02687</div>
</div>
</div>

  );
};

export default Footer1;
