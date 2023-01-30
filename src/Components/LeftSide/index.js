import React from 'react';
import { useLocation } from 'react-router-dom';    
import Avatar from '../../images/avatar.jpeg';
import Dowanload from '../../images/dowanload.png';
import { useSelector } from "react-redux";

const LeftSideCompnent = ()=>{
    const myCvData = useSelector((state) => state.userData.data);
    const location = useLocation();
    const path = location.pathname;
    const personal_info = myCvData.personal_info;
    const socialLink = myCvData.socialLink;
    //console.log('left', myCvData)
    return(
        <>
            <div className={path === '/' ? 'col-span-12 lg:col-span-4  lg:block  leftSection top-44' : 'col-span-12 lg:col-span-4  lg:block nonHomepagesection leftSection top-44'}>
                <div
                    className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                    <img src={Avatar}
                        className="w-[240px] customeImage absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        alt="about" />
                    <div className="pt-[100px] pb-8">
                        <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> {
                            personal_info.name
                        } </h2>
                        <h3
                            className="mb-4  inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                            {personal_info.profile} </h3>
                        <div className="flex justify-center space-x-3">
                           {
                                socialLink.map((item,index)=>{
                                    let classSet = `fa-brands fa-${item.socialname}`;
                                    return(
                                        <a key={index} href={item.sociallink} target="_blank" rel="noopener noreferrer">
                                            <span className="fs-0">{item.socialtext}</span>
                                            <span className="socialbtn text-[#1773EA]">
                                                <i className={classSet}></i>
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                    <p className="dark:text-white">{personal_info.phone}</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                    <p className="dark:text-white">{personal_info.email}</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                    <p className="dark:text-white">{personal_info.location}</p>
                                </div>
                            </div>
                            <div className="flex py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                    <p className="dark:text-white">{personal_info.dob}</p>
                                </div>
                            </div>
                        </div>
                        <button className="dowanload-btn">
                            <img className="mr-3" src={Dowanload} alt="icon" /> Download CV </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSideCompnent;