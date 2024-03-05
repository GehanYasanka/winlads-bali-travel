import React, { useEffect } from 'react';
import InstaItem from './InstaItem';
import Ins1 from "../../assets/InstagramPreviewIcon/instagram1.png";

const InstaPostContainer = ({ postIdArray }) => {

    return (
        <>
            <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-5" style={{ letterSpacing: '12px', zIndex: "2" }}>
                @Winladsau
            </p>
            <div className="transition duration-700 hover:scale-105 flex items-center justify-center gap-2 mb-2">
                {/* <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3> */}
                <img src={Ins1} alt="" className="w-4" />
                <p className=" text-md xl:text-xl 4xl:text-4xl text-center">
                    Follow Us On Instagram
                </p>
                <img src={Ins1} alt="" className="w-4" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 md:px-20 gap-2 md:gap-5'>
                {
                    postIdArray.map((el) => (
                        <InstaItem Postid={el.id} />
                    ))
                }
            </div>
        </>
    )
}

export default InstaPostContainer