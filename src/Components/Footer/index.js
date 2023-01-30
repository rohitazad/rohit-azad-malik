import React, { useState, useEffect }  from 'react';
import ShareAppComponent from '../ShareApp';
import { useSelector } from "react-redux";

const FooterComponent = ()=>{
    let  [showApp, setShowApp] = useState(false);
    const  checkPWA = ()=>{
        return navigator && navigator.share ? setShowApp(true) : setShowApp(false);
    }
    const myCvData = useSelector((state) => state.userData.data);
    //console.log('footer', myCvData);
    const copytext = myCvData.copytext;
    const socialLink = myCvData.socialLink;
    useEffect(()=>{
        checkPWA()
    })
    return (
        <>
            <div className="horizontal-footer shadow-footer">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 text-center">
                            <ul className="social-icons list-inline mt-5">
                                {
                                    socialLink.map((item)=>{
                                        let socialClass = `fab fa-${item.socialname}`
                                        return (
                                            <li key={item.socialname} className="list-inline-item">
                                                <a href={item.sociallink} target="_blank" rel="noopener noreferrer">
                                                    <span className="fs-0">{item.socialtext}</span>
                                                    <i className={socialClass}></i>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <p className="copyright-text mt-3 ">{copytext}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                showApp ? <ShareAppComponent /> : ''
            }
            
        </>
    )
}

export default FooterComponent;