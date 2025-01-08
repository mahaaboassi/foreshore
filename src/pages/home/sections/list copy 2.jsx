import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "../../../components/header";
// Import Images
import img_1 from "../../../images/Frame 203.webp" 
import img_2 from "../../../images/Frame 206.webp"
import img_3 from "../../../images/Frame 202.webp"
import img from "../../../images/woman-stand-at-the-top-look-at-the-skyscraper-in-t-2023-11-27-05-35-48-utc.webp"

function ListYourProperty() {
    const { t , i18n } = useTranslation()
    const data = [{
        tilte : t("list-title-1"),
        img : img_1
    },{
        tilte : t("list-title-2"),
        img : img_2
    },{
        tilte : t("list-title-3"),
        img : img_3
    }]
    return ( <div className='px-6  py-5 lg:px-10 '>
        <div className='list-card p-10'>
            <div className="grid grid-cols-2 gap-10">
                <div className="flex justify-center ">
                    <img className="w-full h-full object-cover" src={img} alt="girl" />
                </div>
                <div>
                    <h3 className="weight-medium text-dark pb-5">{t("list-title")}</h3>
                    <p className="pb-5 text-white">{t("list-desc")}</p>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                        {data.map((e,index)=>(<div key={`List_Your_Property_${e.tilte}`} className={`flex flex-col `}>
                            <div>
                                <img className="w-full" src={e.img} alt={e.tilte} />
                            </div>
                            <p className='max-w-60 text-white weight-regular'>{e.tilte}</p>
                        </div>))}

                    </div>
                </div>

            </div>

        </div>
        <div className='flex justify-center pt-10'>
            <button className='btn-main p-3 capitalize'>{t("list-btn")}</button>
        </div>
    </div> );
}

export default ListYourProperty;