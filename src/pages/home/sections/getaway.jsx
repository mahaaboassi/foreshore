import React from 'react';
import { useTranslation } from 'react-i18next';
import img from "../../../images/banner.png"

function Getaway() {
    const { t , i18n } = useTranslation()
    return ( <div className="flex justify-center getaway my-10 px-3 ">
        <div className="relative">
            <img className='w-full' src={img} alt="banner"/>
            <div className='absolute top-0 right-0 bottom-0 left-0  flex flex-col justify-center items-center px-10'>
                <h2 className='weight-semiBold text-center py-5'>{t("getaway-title")}</h2>
                <p className='text-center weight-medium '>{t("getaway-desc")}</p>
            </div>
        </div>
    </div> );
}

export default Getaway;