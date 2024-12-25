import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../logo.svg"
import logo_light from "../logo_light.svg"
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const data = [{
        name : "destination",
        link : "/"
    },{
        name : "list-your-property",
        link : "/listYouProperty"
    },{
        name : "about-us",
        link : "/aboutUs"
    },{
        name : "contact-us",
        link : "/contactUs"
    },{
        name : "sign-in",
        link : "/signIn"
    },{
        name : "signUp",
        link : "/signUp"
    }]
    const location = useLocation();  // Get current location
    const [scrolled, setScrolled] = useState(false);
    const isActive = (link) => {  
        return location.pathname === link ;
    };
    const handleScroll = () => {
        if (window.scrollY > 200) { // Change 50 to the scroll position threshold
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return ( <div className="container-nav p-3 lg:py-5 lg:px-10 ">
            <div className={`flex justify-between  ${scrolled ? "scrolled-nav":"nav"}`}>
                <div>
                    <img src={scrolled?logo_light:logo} alt="forshore"/>
                </div>
                <div className='flex items-center'>
                    <div className='cursor-pointer md:hidden menu-icon' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                        <path d="M2.16669 6C2.16669 5.73478 2.28082 5.48043 2.48399 5.29289C2.68715 5.10536 2.9627 5 3.25002 5H22.75C23.0373 5 23.3129 5.10536 23.5161 5.29289C23.7192 5.48043 23.8334 5.73478 23.8334 6C23.8334 6.26522 23.7192 6.51957 23.5161 6.70711C23.3129 6.89464 23.0373 7 22.75 7H3.25002C2.9627 7 2.68715 6.89464 2.48399 6.70711C2.28082 6.51957 2.16669 6.26522 2.16669 6ZM2.16669 12.032C2.16669 11.7668 2.28082 11.5124 2.48399 11.3249C2.68715 11.1374 2.9627 11.032 3.25002 11.032H22.75C23.0373 11.032 23.3129 11.1374 23.5161 11.3249C23.7192 11.5124 23.8334 11.7668 23.8334 12.032C23.8334 12.2972 23.7192 12.5516 23.5161 12.7391C23.3129 12.9266 23.0373 13.032 22.75 13.032H3.25002C2.9627 13.032 2.68715 12.9266 2.48399 12.7391C2.28082 12.5516 2.16669 12.2972 2.16669 12.032ZM3.25002 17.065C2.9627 17.065 2.68715 17.1704 2.48399 17.3579C2.28082 17.5454 2.16669 17.7998 2.16669 18.065C2.16669 18.3302 2.28082 18.5846 2.48399 18.7721C2.68715 18.9596 2.9627 19.065 3.25002 19.065H22.75C23.0373 19.065 23.3129 18.9596 23.5161 18.7721C23.7192 18.5846 23.8334 18.3302 23.8334 18.065C23.8334 17.7998 23.7192 17.5454 23.5161 17.3579C23.3129 17.1704 23.0373 17.065 22.75 17.065H3.25002Z" fill="white"/>
                        </svg>
                    </div>
                    <ul className='  gap-3 hidden md:flex '>
                        {
                            data.map((e,index)=>(<li key={`Navbar_${e.name}_${index}`}>
                                <NavLink to={e.link} className={isActive(e.link) ? "weight-semiBold" : "weight-regular"}>
                                    {t(e.name)}
                                </NavLink>
                            </li>))
                        }

                    </ul>
                    <div className='my-2 line'>
                        
                    </div>
                    <div className='cursor-pointer global-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 31" fill="none">
                            <g clipPath="url(#clip0_150_709)">
                            <path d="M17.4857 1.29199C9.43574 1.29199 2.91699 7.07866 2.91699 14.2087C2.91699 21.3387 9.43574 27.1253 17.4857 27.1253C25.5503 27.1253 32.0837 21.3387 32.0837 14.2087C32.0837 7.07866 25.5503 1.29199 17.4857 1.29199ZM27.592 9.04199H23.2899C22.8232 7.42741 22.1524 5.87741 21.2774 4.44366C23.9607 5.25741 26.192 6.91074 27.592 9.04199ZM17.5003 3.92699C18.7107 5.47699 19.6587 7.19491 20.2857 9.04199H14.7149C15.342 7.19491 16.2899 5.47699 17.5003 3.92699ZM6.21283 16.792C5.97949 15.9653 5.83366 15.0999 5.83366 14.2087C5.83366 13.3174 5.97949 12.452 6.21283 11.6253H11.142C11.0253 12.4778 10.9378 13.3303 10.9378 14.2087C10.9378 15.087 11.0253 15.9395 11.142 16.792H6.21283ZM7.40866 19.3753H11.7107C12.1774 20.9899 12.8482 22.5399 13.7232 23.9737C11.0399 23.1599 8.80866 21.5195 7.40866 19.3753ZM11.7107 9.04199H7.40866C8.80866 6.89783 11.0399 5.25741 13.7232 4.44366C12.8482 5.87741 12.1774 7.42741 11.7107 9.04199ZM17.5003 24.4903C16.2899 22.9403 15.342 21.2224 14.7149 19.3753H20.2857C19.6587 21.2224 18.7107 22.9403 17.5003 24.4903ZM20.9128 16.792H14.0878C13.9566 15.9395 13.8545 15.087 13.8545 14.2087C13.8545 13.3303 13.9566 12.4649 14.0878 11.6253H20.9128C21.0441 12.4649 21.1462 13.3303 21.1462 14.2087C21.1462 15.087 21.0441 15.9395 20.9128 16.792ZM21.2774 23.9737C22.1524 22.5399 22.8232 20.9899 23.2899 19.3753H27.592C26.192 21.5066 23.9607 23.1599 21.2774 23.9737ZM23.8587 16.792C23.9753 15.9395 24.0628 15.087 24.0628 14.2087C24.0628 13.3303 23.9753 12.4778 23.8587 11.6253H28.7878C29.0212 12.452 29.167 13.3174 29.167 14.2087C29.167 15.0999 29.0212 15.9653 28.7878 16.792H23.8587Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_150_709">
                            <rect width="35" height="31" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                </div>
                
            </div>
    </div> );
}

export default Navbar;