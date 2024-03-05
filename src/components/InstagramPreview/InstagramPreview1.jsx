
import axios from "axios";
import React, { useEffect, useState } from "react";
import InstaPostContainer from "./InstaPostContainer";
import Gallery2 from "../Gallery/Gallery2";
const InstagramPreview1 = () => {



    const [instaIdArray, setInstaIdArray] = useState([]);
    const [paging, setPaging] = useState({});
    const token = import.meta.env.VITE_INSTA_TOKEN;
    const id = import.meta.env.VITE_INSTA_ID;
  
    const getPostIds = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/${id}/media?access_token=${token}&limit=8`
        );
        setInstaIdArray(response.data.data);
        setPaging(response.data.paging);
      } catch (error) {
        console.log(error);
      }
    };
    const handleLoadMore = async () => {
      try {
        const response = await axios.get(paging.next);
        setInstaIdArray((prev) => [...prev, ...response.data.data]);
        setPaging(response.data.paging);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getPostIds();
    }, []);



  return (

<div className='className=" bg-[#F7F7F7]  px-20"' >
<div className="font-bold text-center text-6xl py-10 pt-28">Follow Us On Instagram</div>

{instaIdArray.length > 0 ? (
        <InstaPostContainer postIdArray={instaIdArray} />
      ) : (
        <Gallery2 />
      )}
      <div className="flex justify-center" >
      <button
        className="bg-black hover:bg-black/75 px-4 py-2 my-5 text-white rounded-lg "
        onClick={handleLoadMore}
      >
        Load More...
      </button>
      </div>
</div>
  );
};

export default InstagramPreview1;
