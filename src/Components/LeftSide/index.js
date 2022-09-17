import React from 'react';
import { useLocation } from 'react-router-dom';    
import Avatar from '../../images/avatar.jpeg';
import Dowanload from '../../images/dowanload.png';

const LeftSideCompnent = ()=>{
    const location = useLocation();
    const path = location.pathname;

    //console.log('sdfsdfdsf', location)
    return(
        <>
        {/* sidber personal info */}
            <div className={path === '/' ? 'col-span-12 lg:col-span-4  lg:block  leftSection top-44' : 'col-span-12 lg:col-span-4  lg:block nonHomepagesection leftSection top-44'}>
                <div
                    className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                    {/* profile image */}
                    <img src={Avatar}
                        className="w-[240px] customeImage absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        alt="about" />
                    <div className="pt-[100px] pb-8">
                        <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Rohit Azad </h2>
                        <h3
                            className="mb-4  inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                            UI/ReactJs/JavaScript Developer </h3>
                        <div className="flex justify-center space-x-3">
                            {/* facebook icon and link */}
                            <a href="https://www.facebook.com/rohitazadmalik/" target="_blank" rel="noopener noreferrer">
                                 <span className="fs-0">Follow us on facebook</span>
                                <span className="socialbtn text-[#1773EA]">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                            {/* twitter icon and link */}
                            <a href="https://twitter.com/rohitazad" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on twitter</span>
                                <span className="socialbtn text-[#1C9CEA]">
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                            </a>
                            {/* stackoverflow icon and link */}
                            <a href="https://stackoverflow.com/users/1365428/rohit-azad-malik" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on stackoverflow</span>
                                <span className="socialbtn text-[#e14a84]">
                                    <i className="fa-brands fa-stack-overflow"></i>
                                </span>
                            </a>
                            {/* linkedin icon and link */}
                            <a href="https://www.linkedin.com/in/rohitazad/" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on linkedin</span>
                                <span className="socialbtn text-[#0072b1]">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>
                            <a href="https://github.com/rohitazad" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on github</span>
                                <span className="socialbtn text-[#e14a84]">
                                    <i className="fa-brands fa-github"></i>
                                </span>
                            </a>
                            <a href="https://rohitazadmalik.blogspot.com/" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on blogspot</span>
                                <span className="socialbtn text-[#0072b1]">
                                    <i className="fa-brands fa-blogger"></i>
                                </span>
                            </a>
                            <a href="https://www.youtube.com/c/AzadMalikRohit" target="_blank" rel="noopener noreferrer">
                            <span className="fs-0">Follow us on youtube</span>
                                <span className="socialbtn text-[#e14a84]">
                                    <i className="fa-brands fa-youtube"></i>
                                </span>
                            </a>
                        </div>
                       {/* personal infomation start */}
                        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                    <p className="dark:text-white">+91- 991000-6711</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                    <p className="dark:text-white">ram9953878727@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                    <p className="dark:text-white">Delhi, India</p>
                                </div>
                            </div>
                            <div className="flex py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                    <p className="dark:text-white">Aug, 1987</p>
                                </div>
                            </div>
                        </div>
                        {/* personal infomation end === */}
                        {/* dowanload button == */}
                        <button className="dowanload-btn">
                            <img className="mr-3" src={Dowanload} alt="icon" /> Download CV </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSideCompnent;