import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InstaItem = ({ Postid }) => {
    const [postData, setPostData] = useState({});
    const token = import.meta.env.VITE_INSTA_TOKEN;
    const id = import.meta.env.VITE_INSTA_ID;

    const getPost = async()=>{
        try {
            const resp = await axios.get(`https://graph.instagram.com/${Postid}?access_token=${token}&fields=media_url,permalink,media_type`)
            console.log(resp);
            setPostData(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPost()
    }, [])
    return (
        <Link key={id} to={postData.permalink} target='_blank' className='rounded-xl overflow-hidden aspect-square'>
            {
                postData.media_type == 'VIDEO' ? <video src={postData.media_url} className='w-full h-full object-cover' controls></video>  :   <img src={postData.media_url} className='w-full h-full object-cover' />
            }

        </Link>
    )
}

export default InstaItem