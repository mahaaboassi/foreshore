import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import InputWithIcon from '../../../components/inputWithIcons';
import { useNavigate } from 'react-router-dom';

function SearchCard() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    return ( <div className='form-search px-5  sm:px-10  md:px-20  lg:px-40'>
        {/* <div className='content-form items-center flex justify-center py-10'>
        <div className='grid grid-cols-2 lg:grid-cols-4  px-2  '>
             <div className='flex items-center justify-center p-1 sm:p-2'>
                 <InputWithIcon icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <g clipPath="url(#clip0_164_685)">
                           <path d="M6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5Z" stroke="#27CBBE" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M13.5 13.5L10 10" stroke="#27CBBE" strokeLinecap="round" strokeLinejoin="round"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_164_685">
                           <rect width="14" height="14" fill="white"/>
                           </clipPath>
                           </defs>
                           </svg>} placeholder={t("location")} />
             </div>
             <div className='flex items-center justify-center p-1 sm:p-2'>
                 <InputWithIcon icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 16" fill="none">
                     <path d="M7.47965 0.000297778C7.34639 0.00477873 7.21807 0.0511048 7.11344 0.132507L1.19141 4.72617C0.439782 5.30939 0 6.2006 0 7.14279V14.9744C0 15.5338 0.473502 16 1.04167 16H5.20833C5.7765 16 6.25 15.5338 6.25 14.9744V10.8719C6.25 10.7508 6.3354 10.6668 6.45833 10.6668H8.54167C8.6646 10.6668 8.75 10.7508 8.75 10.8719V14.9744C8.75 15.5338 9.2235 16 9.79167 16H13.9583C14.5265 16 15 15.5338 15 14.9744V7.14279C15 6.2006 14.5602 5.30939 13.8086 4.72617L7.88656 0.132507C7.77098 0.0426112 7.62687 -0.00421137 7.47965 0.000297778ZM7.5 1.39931L13.0355 5.6933C13.4872 6.0438 13.75 6.57692 13.75 7.14279V14.7693H10V10.8719C10 10.0863 9.33956 9.43602 8.54167 9.43602H6.45833C5.66044 9.43602 5 10.0863 5 10.8719V14.7693H1.25V7.14279C1.25 6.57692 1.51281 6.0438 1.96452 5.6933L7.5 1.39931Z" fill="#27CBBE"/>
                     </svg>} placeholder={t("type")} />
             </div>
             <div className='flex items-center justify-center p-1 sm:p-2'>
                 <InputWithIcon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                   <path d="M9.99999 6.31179C11.4881 6.31179 12.6944 5.16577 12.6944 3.75209C12.6944 2.33841 11.4881 1.19238 9.99999 1.19238C8.5119 1.19238 7.30556 2.33841 7.30556 3.75209C7.30556 5.16577 8.5119 6.31179 9.99999 6.31179Z" stroke="#27CBBE" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M14.7153 10.791C14.7153 9.60297 14.2185 8.4636 13.3342 7.62353C12.4499 6.78347 11.2506 6.31152 10 6.31152C8.74946 6.31152 7.55012 6.78347 6.66585 7.62353C5.78156 8.4636 5.28477 9.60297 5.28477 10.791V12.7108H7.3056L7.9792 17.8302H12.0208L12.6944 12.7108H14.7153V10.791Z" stroke="#27CBBE" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>} placeholder={t("guest")} />
             </div>
             <div className='flex items-center justify-center p-1 sm:p-2'>
                 <button onClick={()=>navigate("/destinations")} className='btn-grey !w-full'>{t("search")}</button>
             </div>
         </div>
        </div> */}

     </div> );
}

export default SearchCard;