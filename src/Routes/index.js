import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';
import LeftSideCompnent from '../Components/LeftSide';
import HomePage from '../Container/Home';
import AboutPage from '../Container/About';
import ResumePage from '../Container/Resume';
import BlogPage from '../Container/Blog';
import WorkPage from  '../Container/Work';
import ContactPage from '../Container/Contact';
import Trisul from "../Container/Trisul";

const RouterDom = (props) => {
    return (
        <>
        <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
            
            <Router>
                <HeaderComponent />
                <div className="container containerAll mt100Media grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
                    <LeftSideCompnent />
                    <div className="col-span-12 lg:col-span-8">
                        <div className="lg:rounded-2xl bg-white dark:bg-[#111111] wraperContainer">
                            <Routes>
                                <Route path="/" element={<HomePage />}></Route>
                                <Route path="/about" element={<AboutPage />}></Route>
                                <Route path="/resume" element={<ResumePage />}></Route>
                                <Route path="/work" element={<WorkPage />}></Route>
                                <Route path="/blog" element={<BlogPage />}></Route>
                                <Route path="/contact" element={<ContactPage />}></Route>
                                <Route path="/trisul" element={<Trisul />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </Router>
        </div>
        </>
    )
}

export default RouterDom;