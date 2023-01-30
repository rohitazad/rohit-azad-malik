import React, { useState }  from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loadData } from '../../ReduxStore/Actions/actionCreater';
import engDataJson  from '../../Data/eng_cv.json';
import hindDataJson from '../../Data/hind_cv.json';
import gujRatDataJson from '../../Data/guj_cv.json';
import sanskrit from '../../Data/sanskrit_cv.json';
import bhojpuri from '../../Data/bhojpuri_cv.json';
const HeaderComponent = ()=>{
    //const cvData = useSelector(state=> state);
    const dispatch = useDispatch()
    //console.log('cvData',cvData)
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    let [showmobileMenu, setShowmobileMenu] = useState(false);
    const menuHandleChange = ()=>{
        return setShowmobileMenu(showmobileMenu = !showmobileMenu)
    }
    const changeLang = (e)=>{
        //console.log('clicik button change language', e.target.value);
        let langVal = e.target.value
        if(langVal === 'eng'){
            dispatch(loadData(engDataJson))
        }else if(langVal === 'hindi'){
            dispatch(loadData(hindDataJson))
        }else if(langVal === 'guj'){
            dispatch(loadData(gujRatDataJson))
        }else if(langVal === 'sanskrit'){
            dispatch(loadData(sanskrit))
        }else if(langVal === 'bhojpuri'){
            dispatch(loadData(bhojpuri))
        }else{
            dispatch(loadData(engDataJson))
        }
    }
    return (
        <>

        <div className="container">    
            <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
                    <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
                        <div className="flex section-bg justify-between w-full items-center space-x-4 lg:my-8">
                            
                            <Link className="text-5xl font-semibold"  to="/">
                                <img className="customelogo" width="197"  height="60" src={logo} alt="logo" />
                            </Link>
                           
                            <div className="flex items-center">
                               <button id="menu-toggle" onClick={menuHandleChange} type="button" className="menu-toggle-btn">
                               <span className="fs-0">Mobile menu handler button</span>
                                    <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>
                                    <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>
                                </button>
                            </div>
                        </div>
                    </div>

                   {/* header items two for large screens ======================== */}
                    <nav className="hidden lg:block">
                        <ul className="flex my-12 myheadermenu">
                            <li>
                                <Link  className={splitLocation[1] === '' ? 'menu-item-two-active' : 'menu-item-two'} to="/">
                                    <span className="mr-2 text-base">
                                        <i className="fa-solid fa-house"></i>
                                    </span> Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link className={splitLocation[1] === 'resume' ? 'menu-item-two-active' : 'menu-item-two'} to="/resume">
                                    <span className="mr-2 text-base">
                                        <i className="fa-regular fa-file-lines"></i>
                                    </span> Resume 
                                </Link>
                            </li>
                            <li>
                                <Link className={splitLocation[1] === 'work' ? 'menu-item-two-active' : 'menu-item-two'} to="/work">
                                    <span className="mr-2 text-base">
                                        <i className="fas fa-briefcase"></i>
                                    </span> Works 
                                </Link> 
                            </li>
                            <li>
                                <Link className={splitLocation[1] === 'blog' ? 'menu-item-two-active' : 'menu-item-two'} to="/blog">
                                    <span className="mr-2 text-base">
                                        <i className="fa-brands fa-blogger"></i>
                                    </span> Blogs
                                </Link>
                            </li>
                            <li>
                                <Link className={splitLocation[1] === 'contact' ? 'menu-item-two-active' : 'menu-item-two'} to="/contact">
                                    <span className="mr-2 text-base">
                                        <i className="fa-solid fa-address-book"></i>
                                    </span> Contact
                                </Link>
                            </li>
                            <li>
                                <select className='langWrap' onChange={(e)=>changeLang(e)}>
                                    <option value="eng">Eng</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="sanskrit">Sanskrit</option>
                                    <option value="guj">Gujarati</option>
                                    <option value="bhojpuri">Bhojpuri</option>
                                </select>
                            </li>
                        </ul>
                    </nav>

                    {/* mobile menu start  ====================================== */}
                    <nav id="navbar" className={!showmobileMenu ? 'hidden' : ''}>
                        <ul
                            className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] mobileMenu bg-white dark:bg-[#1d1d1d]">
                            <li>
                                <Link onClick={menuHandleChange} className={splitLocation[1] === '' ? 'mobile-menu-items-active' : 'mobile-menu-items'}  to="/">
                                    <span className="mr-2 text-xl">
                                        <i className="fa-solid fa-house"></i>
                                    </span> Home
                                </Link> 
                            </li>
                            
                            <li>
                                <Link onClick={menuHandleChange} className={splitLocation[1] === 'resume' ? 'mobile-menu-items-active' : 'mobile-menu-items'} to="/resume">
                                    <span className="mr-2 text-xl">
                                        <i className="fa-regular fa-file-lines"></i>
                                    </span> Resume 
                                </Link>
                            </li>
                            <li>
                                <Link onClick={menuHandleChange} className={splitLocation[1] === 'work' ? 'mobile-menu-items-active' : 'mobile-menu-items'} to="/work">
                                    <span className="mr-2 text-xl">
                                        <i className="fas fa-briefcase"></i>
                                    </span> Works 
                                </Link>
                            </li>
                            <li>
                                <Link onClick={menuHandleChange} className={splitLocation[1] === 'blog' ? 'mobile-menu-items-active' : 'mobile-menu-items'} to="/blog">
                                    <span className="mr-2 text-xl">
                                        <i className="fa-brands fa-blogger"></i>
                                    </span> Blogs 
                                </Link>
                            </li>
                            <li>
                                <Link onClick={menuHandleChange} className={splitLocation[1] === 'contact' ? 'mobile-menu-items-active' : 'mobile-menu-items'} to="/contact">
                                    <span className="mr-2 text-xl">
                                        <i className="fa-solid fa-address-book"></i>
                                    </span> Contact 
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            
        </>
    )
}

export default HeaderComponent;