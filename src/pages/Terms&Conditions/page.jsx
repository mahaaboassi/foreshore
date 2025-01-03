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

function TermaAndConditions() {
    const { t  } = useTranslation();
    const data = [{
        img : window.innerWidth <= 472 ? girl_small: girl,
        background_img : banner_1,
        count : 0,
        title : t("terms-and-conditions"),
        hint :  ""
      },{
        img : window.innerWidth <= 472 ? girl_2_small: girl_2,
        background_img : banner_2,
        count : 1 ,
        title : t("terms-and-conditions")+"1",
        hint :  ""
      },{
        img : window.innerWidth <= 472 ? girl_3_small: girl_3,
        background_img : banner_3,
        count : 2 ,
        title : t("terms-and-conditions") +"2",
        hint :  ""
      }]
      const dataTerms = [{
        title : "terms-title-1",
        options : ["terms-title-1-option-1","terms-title-1-option-2","terms-title-1-option-3"]
      },{
        title : "terms-title-2",
        options : ["terms-title-2-option-1","terms-title-2-option-2","terms-title-2-option-3","terms-title-2-option-4","terms-title-2-option-5"]
      },{
        title : "terms-title-3",
        options : ["terms-title-3-option-1","terms-title-3-option-2","terms-title-3-option-3"]
      },{
        title : "terms-title-4",
        options : ["terms-title-4-option-1"]
      },{
        title : "terms-title-5",
        options : ["terms-title-5-option-1","terms-title-5-option-2"]
      },{
        title : "terms-title-6",
        options : ["terms-title-6-option-1","terms-title-6-option-2","terms-title-6-option-3"]
      },{
        title : "terms-title-7",
        options : ["terms-title-7-option-1"]
      },{
        title : "terms-title-8",
        options : ["terms-title-8-option-1","terms-title-8-option-2"]
      },{
        title : "terms-title-9",
        options : ["terms-title-9-option-1"]
      },{
        title : "terms-title-10",
        options : ["terms-title-10-option-1","terms-title-10-option-2"]
      },{
        title : "terms-title-11",
        options : ["terms-title-11-option-1"]
      },{
        title : "terms-title-12",
        options : ["terms-title-12-option-1","terms-title-12-option-2"]
      },{
        title : "terms-title-13",
        options : ["terms-title-13-option-1"]
      },{
        title : "terms-title-14",
        options : ["terms-title-14-option-1","terms-title-14-option-2"]
      },{
        title : "terms-title-15",
        options : ["terms-title-15-option-1"]
      },{
        title : "terms-title-16",
        options : ["terms-title-16-option-1"]
      },{
        title : "terms-title-17",
        options : ["terms-title-17-option-1","terms-title-17-option-2"]
      },{
        title : "terms-title-18",
        options : ["terms-title-18-option-1","terms-title-18-option-2"]
      },]
    useEffect(()=>{ window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    return ( <div>
            <Banner data={data}/>
            <div  className=' relative  px-6  lg:px-10'>
                <div className='terms px-5 md:px-10  py-8'>
                    <h2 className='capitalize pb-6 weight-medium'> {t("terms-and-conditions")}</h2>
                    <div>
                        {dataTerms.map((e)=>(<div key={`Terms_${t(e.title)}`}>
                                <h4 className='pb-2 pt-5 weight-regular'>{t(e.title)}</h4>
                                <ul className='px-2'>
                                    {e.options.map(ele=>(<li className='flex items-center gap-2' key={`Terms_options_${t(ele)}`}>
                                        <div className='circular'></div>
                                        <div>{t(ele)}</div>
                                    </li>))}
                                </ul>
                        </div>))}
                    </div>


                </div>
            </div>
    </div> );
}

export default TermaAndConditions;