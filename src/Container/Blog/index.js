import React, { useEffect, useState } from 'react';
import axios from "axios";
import SingleBlogCardComponent from '../../Components/SingleBlogCard'

const BlogPage = ()=>{
    let [blogData, setBlogData] = useState([]);
    const blogId = '7614125466045882583';
    const blogKey = 'AIzaSyCoKCX68GJGPjJu2Ai9NuO_4YibkvAfxCQ';
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${blogKey}`;
    const fetchDataBlog = async ()=>{
        const {data} =  await axios.get(url);
        const {items} = await data;
        //console.log(data); 
        //console.log(items)
        setBlogData(items)
    }
    console.log('blogData', blogData);
    const htmlGenRate = ()=>{
        let _html = [];
        blogData && blogData.length > 0 && blogData.map((item)=>{
           return _html.push(<SingleBlogCardComponent key={item.id} data={item} />)
        })
        return _html;
    }
    useEffect(()=>{
        fetchDataBlog();
        // eslint-disable-next-line
    },[])
    return(
        <>
        <div className="pt-12 md:py-12  sm:px-5 md:px-10 lg:px-14">
            <h2 className="after-effect after:left-48 lg:mt-0">Blog Me</h2>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
                {/* my first  blog here  */}


                {blogData && blogData.length > 0 ?  htmlGenRate():''}

                {/* my first blog end here */}
            </div>           
                            
        </div>
           
            
        </>
    )
}

export default BlogPage;


// https://developers.google.com/blogger/docs/3.0/using

// https://www.googleapis.com/blogger/v3/blogs/7614125466045882583?key=AIzaSyCoKCX68GJGPjJu2Ai9NuO_4YibkvAfxCQ

// Get  all blog
// https://www.googleapis.com/blogger/v3/blogs/7614125466045882583/posts?key=AIzaSyCoKCX68GJGPjJu2Ai9NuO_4YibkvAfxCQ

// Get specific blog with id
// https://www.googleapis.com/blogger/v3/blogs/7614125466045882583/posts/7432329223390667054?key=AIzaSyCoKCX68GJGPjJu2Ai9NuO_4YibkvAfxCQ

