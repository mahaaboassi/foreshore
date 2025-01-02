import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


function Languages() {
    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    return ( <div className="relative">
        <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer global-icon'>
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
        {
            isOpen && <div className={`${i18n.language == "en"?"right-0 ":"left-0"} absolute language-menu top-9 md:top-12 w-40`}>
            <ul>
                <li  onClick={()=>{
                    setIsOpen(false)
                    changeLanguage('ar')
                }} className="flex gap-2 pb-2">
                    <div className="flex items-center">
                        <div><img className="w-7  rounded" src="https://flagcdn.com/w320/ae.png" alt="Arabic" /></div>
                    </div>
                    <div className="flex capitalize items-center">
                        {t("arabic")}
                    </div>
                </li>
                <li onClick={()=>{
                    setIsOpen(false)
                    changeLanguage('en')
                }}  className="flex gap-2">
                    <div className="flex items-center">
                        <div><img className="w-7 rounded" src="https://flagcdn.com/w320/gb.png" alt="English" /></div>
                    </div>
                    <div className="flex capitalize items-center">
                      {t("english")}
                    </div>
                </li>
               
            </ul>
            

        </div>
        }
    </div> );
}

export default Languages;