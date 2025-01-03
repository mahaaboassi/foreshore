import React ,{useEffect, useState}  from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../home/sections/banner';

// Images
import girl from "../../images/image without background.webp"
import girl_small from "../../images/image without background_small.webp"
import banner_1 from "../../images/banner background.webp"
import girl_2 from "../../images/banner 02 without background.webp"
import girl_2_small from "../../images/banner 02 without background_small.webp"
import banner_2 from "../../images/banner 02 background.webp"
import girl_3 from "../../images/banner 03 without background.webp"
import girl_3_small from "../../images/banner 03 without background_small.webp"
import banner_3 from "../../images/banner 03 back.webp"



function PrivacyPolicy() {
    const { t  } = useTranslation();
    const data = [{
        img :  window.innerWidth <= 472 ? girl_small: girl,
        background_img : banner_1,
        count : 0,
        title : t("privacy-policy"),
        hint :  ""
      },{
        img :  window.innerWidth <= 472 ? girl_2_small: girl_2,
        background_img : banner_2,
        count : 1 ,
        title : t("privacy-policy")+"1",
        hint :  ""
      },{
        img : window.innerWidth <= 472 ? girl_3_small: girl_3,
        background_img : banner_3,
        count : 2 ,
        title : t("privacy-policy") +"2",
        hint :  ""
      }]
      const dataPolicy = [{
        title : "",
        desc : "policy-desc"
      },{
        title : "policy-title-1",
        desc : "policy-desc-1"
      },{
        title : "policy-title-2",
        desc : "policy-desc-2"
      },{
        title : "policy-title-3",
        desc : "policy-desc-3"
      },{
        title : "policy-title-4",
        desc : "policy-desc-4"
      },{
        title : "policy-title-5",
        desc : "policy-desc-5"
      },{
        title : "policy-title-6",
        desc : "policy-desc-6"
      },{
        title : "policy-title-7",
        desc : "policy-desc-7"
      }]
    useEffect(()=>{ window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    return ( <div>
            <Banner data={data}/>
            <div  className=' relative  px-6  lg:px-10'>
                <div className='terms px-5 md:px-10  py-8'>
                    <h2 className='capitalize pb-6 weight-medium'> {t("privacy-policy")}</h2>
                    <div>
                        {dataPolicy.map((e)=>(<div key={`Terms_${t(e.title)}`}>
                                {e.title && <h4 className='pb-2 pt-5 weight-regular'>{t(e.title)}</h4>}
                                <p>{t(e.desc)}</p>
                        </div>))}
                    </div>


                </div>
            </div>
    </div> );
}

export default PrivacyPolicy;