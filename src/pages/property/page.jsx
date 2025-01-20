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
// Images For Banners
import image from "../../images/1300x500.webp"
import small_size from "../../images/explore 500x500.webp"
import medium_size from "../../images/explore 700x500.webp"
import banner_2 from "../../images/banner 02 background.webp"
import banner_3 from "../../images/banner 03 back.webp"
import { Link } from 'react-router-dom';
import { Helper } from '../../functionality/helper';
import { apiRoutes } from '../../functionality/apiRoutes';

function Destinations() {
    const {t,i18n} = useTranslation()
    const data = [{
        img : window.innerWidth <= 500 ? small_size : (window.innerWidth <=700 ? medium_size: image) ,
        background_img : banner_3,
        count : 0,
        title : t("destination-title-0"),
        hint :  t("destination-hint-0")
      }]
    const [isOpen, setIsOpen] =  useState()
    const [ loading, setLoading] = useState(true)
    const [ dataFromApi, setDataFromApi] = useState(undefined)
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal
        const getData = async (signal)=>{
            const { response , message } = await Helper({
                url : apiRoutes.property.getAllProperties,
                signal,
                params:{
                    page : 1,
                    limit : 50
                },
                method : "GET"
            })
            if(response){
                setDataFromApi(response.data)
                // console.log(response);
                setLoading(false)
            }else{
                console.log(message);
                setLoading(false)
                
            }
        }
        getData(signal)
        // window.scrollTo({ top: 0,  behavior: 'smooth' })
        return ()=> controller.abort()

    },[])
    return ( <div className='our-properties'>
        <Banner fromHomePage={true} data={data} />
        <div className="px-6 py-10  lg:px-10">
            <div className='flex justify-between items-center'>
            <h3  className='capitalize weight-semiBold'>{t("our-properties")} ({dataFromApi?dataFromApi.length:"-"})</h3>
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
        {loading || dataFromApi == undefined ?<div className="loading">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
    </div>:
        <div className='grid px-6  lg:px-10 gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        { dataFromApi.length > 0 ? dataFromApi.map((e,i)=>(<div className='' key={`Card_Property_${i}_${e._id}`}>
            
            <div className='card-property cursor-pointer'>
                <Link to={`/property/${e._id}`}>
                    <div className='overflow-hidden h-32 sm:h-40 md:h-40 lg:h-52'>
                        <img className='!w-full rounded object-cover h-full' src={e.files[0].url} alt='Proparty Image' />
                    </div>
                </Link>
               
                <div className='p-2'>
                <Link to={`/property/${e._id}`}>
                    <h4 className='pb-1 flex items-center weight-regular'>{i18n.language == "en" ? (e.name_en?e.name_en:""):(e.name_ar?e.name_ar:"")}</h4>
                </Link>
                 
                  
                  <div className='flex justify-between'>
                       <p className=''>{e.city?e.city:""},{" "}{e.region?e.region:""}</p>
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
            
          
        </div>))
        :<div>
            <p>No Properties Yet.</p>
            </div>}

    </div>}
    </div> );
}

export default Destinations;