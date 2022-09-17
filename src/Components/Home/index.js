import React from 'react';

import Icon4  from '../../images/icon4.svg';
import Icon5  from '../../images/icon5.svg';


const HomeComponent = ()=>{
    return (
        <>
        
                        <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
                            {/* about page title */}
                            <h2 className="after-effect after:left-60">About Rohit</h2>
                           

                            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center">
                                <div className="col-span-12 space-y-2.5">
                                    <div className="lg:mr-16">
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> I’m a User Interface Developer with about 12 years of experience. I like to work with passion for building cutting-edge, rich user interface with a nice coding standard and keep W3C web-standard in mind.
                                        </p>
                                        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My employment experience includes worked from the June 2011 as a HTML Developer with Compare Infobase Limited and currently working with Times Internet as an Sr. UI Developer since June 2015. I earned the trust of my managers, stakeholders and clients & was soon working all shifts and filling in during the manager’s absence. </p>
                                        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        Experience of hand coding table-less web pages for using CSS, JavaScript, XHTML, React Js
                                        Performing regular maintenance, corrections and updates on the websites
                                        Good Understanding of Table less Websites, e-Mailers, e-Newsletters, Promotion Banners (Web) etc.
                                        Bootstrap, LESS CSS Framework, HTML5, Css3, JavaScript, Jquery, React Js
                                        Good knowledge of Dreamweaver, Photoshop.
                                        100% capable in Cross Browser Compatibilities issues.
                                        Strong understanding of SEO concepts
                                        </p>
                                        
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                        </div>

                        {/* what i do section start */}
                        <div className="pb-12  sm:px-5 md:px-10 lg:px-14">
                            <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                            <div className="grid gap-8 grid-cols-1">

                            <div className="about-box bg-[#f3faff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src={Icon5}
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Web Development </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> I am a positive, enthusiastic and competent Web Developer who, 12 over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. I take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. If you hire me as your Web Developer, I assure you I will fit into your team quickly, I will always put the commercial needs of your business at the forefront of everything I do, and the work I carry out will be consistent to a first-class standard.</p>
                                </div>
                            </div>

                                

                                

                                

                                

                                <div className="about-box bg-[#fff0f8] dark:bg-transparent">
                                    <img className="w-10 h-10 object-contain block" src={Icon4}
                                        alt="icon" />
                                    <div className="space-y-2">
                                        <h3 className="dark:text-white text-[22px] font-semibold"> Managment </h3>
                                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Relentless problem solver applying analytical, design, and technical skills to supervise entire software development lifecycle. Effective hands-on leader with outstanding success in developing applications to analyze sales growth and marketing strategy for established and start-up firms. </p>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                        
                    
        </>
    )
}

export default HomeComponent;