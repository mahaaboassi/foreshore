import React ,{useEffect, useState}  from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../home/sections/banner';
import img_1 from "../../images/property_1.avif"
import img_2 from "../../images/property_7.avif"
import img_3 from "../../images/warm-tones-living-room-christmas-a33ab063-9ef63f3845ef4e5993712fb3074b9c67.webp"
import img_4 from "../../images/Dubai-Holiday-Home-Vacation.webp"
import img_5 from "../../images/destination_3.webp"
import img_6 from "../../images/destination_2.webp"
import img_7 from "../../images/destination_4.webp"
import img_8 from "../../images/destination_1.webp"
// Images
// Images For Banners
import girl from "../../images/image without background.webp"
import girl_small from "../../images/image without background_small.webp"
import banner_1 from "../../images/banner background.webp"
import girl_2 from "../../images/banner 02 without background.webp"
import girl_2_small from "../../images/banner 02 without background_small.webp"
import banner_2 from "../../images/banner 02 background.webp"
import girl_3 from "../../images/banner 03 without background.webp"
import girl_3_small from "../../images/banner 03 without background_small.webp"
import banner_3 from "../../images/banner 03 back.webp"


import { Link } from 'react-router-dom';
import Dropdown from '../../components/dropdown';

function Destinations() {
    const {t,i18n} = useTranslation()
    useEffect(()=>{ window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    const data = [{
        img : window.innerWidth <= 472 ? girl_small: girl,
        background_img : banner_1,
        count : 0,
        title : t("destination-title"),
        hint :  t("destination-hint")
      },{
        img : window.innerWidth <= 472 ? girl_2_small: girl_2,
        background_img : banner_2,
        count : 1 ,
        title : t("destination-title")+"1",
        hint :  t("destination-hint")
      },{
        img : window.innerWidth <= 472 ? girl_3_small: girl_3,
        background_img : banner_3,
        count : 2 ,
        title : t("destination-title") +"2",
        hint :  t("destination-hint")
      }]
    const [isOpen, setIsOpen] =  useState()
    return ( <div className='our-properties'>
        <Banner data={data} />
        <div className="px-6 py-10  lg:px-10">
            <div className='flex justify-between items-center'>
            <h3 className='capitalize weight-semiBold'>{t("our-properties")} (41)</h3>
            <div className="dropdowp relative">
                <div onClick={()=>setIsOpen(!isOpen)}  className="dropdwon-trigger">
                    <div className='flex gap-1 justify-between filter-btn py-1 px-2 items-center cursor-pointer'>
                        <p>
                        {t("filter-by-type")}
                        </p>
                        <div style={isOpen?{transform:"rotate(180deg)"}:{}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.92 8.17999H11.69H6.07999C5.11999 8.17999 4.63999 9.33999 5.31999 10.02L10.5 15.2C11.33 16.03 12.68 16.03 13.51 15.2L15.48 13.23L18.69 10.02C19.36 9.33999 18.88 8.17999 17.92 8.17999Z" fill="white"/>
                            </svg>
                        </div>
                            
                    </div>
                </div>
                {isOpen && <div style={i18n.language == "en"?{right:0,zIndex:8}:{left:0,zIndex:8}} className=" w-40 absolute top-10 ">
                <div className='dropdown-filter p-2'>
                        {["apartment","studio","villa"].map((e)=>(<p onClick={()=>setIsOpen(false)} className='dropdown-content  transition-all duration-300 ease-in-out p-2 rounded-md cursor-pointer'>{t(e)}</p>))}
                    </div>
                </div>}
            </div> 
            </div>
            
        </div>
        <div className='grid px-6  lg:px-10 gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {[img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8].map((e,i)=>(<div className='' key={`Card_Property_${i}`}>
                
                <div className='card-property cursor-pointer'>
                    <Link to={"/property/9"}>
                        <div className='overflow-hidden h-32 sm:h-40 md:h-40 lg:h-52'>
                            <img className='!w-full rounded object-cover h-full' src={e} alt='Proparty Image' />
                        </div>
                    </Link>
                   
                    <div className='p-2'>
                    <Link to={"/property/9"}>
                        <h4 className='pb-1 weight-regular'>{t("property-name")}</h4>
                    </Link>
                     
                      
                      <div className='flex justify-between'>
                           <p className=''>DownTown dubai</p>
                            <div className='flex gap-1 items-center'>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_17_4829)">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#f59e0b"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_17_4829">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    <p>4.3</p>
                            </div>
                      </div>
                      <div className='mt-2 '>
                        <button className='!w-full btn-main'  >{t("book-now")}</button>
                      </div>
                    </div>
                    <div>

                    </div>
                </div>
                
              
            </div>))}

        </div>
    </div> );
}

export default Destinations;