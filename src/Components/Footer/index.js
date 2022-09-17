import React  from 'react';


const FooterComponent = ()=>{
    return (
        <>
            <div className="horizontal-footer shadow-footer">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 text-center">
                            <ul className="social-icons list-inline mt-5">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/rohitazadmalik/" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on Facebook</span>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a  href="https://www.linkedin.com/in/rohitazad/" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on linkedin</span>
                                        
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a   href="https://twitter.com/rohitazad" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on twitter</span>
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://stackoverflow.com/users/1365428/rohit-azad-malik" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on stackoverflow</span>
                                        <i className="fa-brands fa-stack-overflow"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a  href="https://rohitazadmalik.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on blogspot</span>
                                        <i className="fa-brands fa-blogger"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a  href="https://github.com/rohitazad" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on github</span>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a  href="https://www.youtube.com/c/AzadMalikRohit" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on youtube</span>
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                
                                
                            </ul>
                            <p className="copyright-text mt-3 ">2022 ©. Rohit Azad. Developed and Designed by <b>R.A.M</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponent;