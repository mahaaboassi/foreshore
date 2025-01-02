import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "../../../components/header";
// Import Images
import img_1 from "../../../images/management of your property 1.png" 
import img_2 from "../../../images/global audiance 1.png"
import img_3 from "../../../images/rental income 1.png"

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
    return ( <div className='px-6'>
        <Header title={t("list-title")} description={t("list-desc")} />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {data.map((e,index)=>(<div key={`List_Your_Property_${e.tilte}`} className={`flex flex-col items-center justify-center ${index % 2 != 0?"list-margin":""}`}>
                <div>
                    <img src={e.img} alt={e.tilte} />
                </div>
                <h5 className='max-w-60 text-center weight-regular'>{e.tilte}</h5>
            </div>))}

        </div>
        <div className='flex justify-center pt-10'>
            <button className='btn-main p-3 capitalize'>{t("list-btn")}</button>
        </div>
    </div> );
}

export default ListYourProperty;