import React ,{useEffect, useState}  from 'react';
import { useTranslation } from 'react-i18next';
 
import BasicInformation from "./components/basicInfo";
import Location from "./components/location";
import Documents from "./components/documnets";
import Confirmations from "./components/confirmation";

function ListYourProperty() {
    const { t } = useTranslation()
    const [currentSelected, setCurrentSelected] = useState(1)
    return ( <div className="pt-24  md:pt-32 px-6 lg:px-10 sm:flex justify-center">
        <div className="form-list flex flex-col px-2  md:px-8 py-5">
         <h2 className="capitalize text-center">{t("list-your-property")}</h2>
         <div  className="flex scale-60  sm:scale-70 md:scale-100 h-28 justify-center items-center">
            <div  className={`list-circular ${(localStorage.hasOwnProperty("basic-info") && currentSelected!=1) && "done"} ${currentSelected==1  && "active"} `}>
                <div className={`number`}>
                    01
                </div>
                <div className={`list-text text-nowrap capitalize`}>
                    {t("basic-info")}
                </div>
            </div>
            <div className="flex justify-center items-center px-2">
                <div className="w-20 h-1 bg-stone-200" ></div>
            </div>
            <div  className={`list-circular ${localStorage.hasOwnProperty("location") && currentSelected !=2 && "done"} ${currentSelected==2 && "active"} `}>
                <div className={`number-bottom`}>
                    02
                </div>
                <div className={`list-text-top text-nowrap capitalize`}>
                     {t("location")}
                </div>
            </div>
            <div  className="flex justify-center items-center px-2">
                <div className="w-20 h-1 bg-stone-200" ></div>
            </div>
            <div  className={`list-circular ${localStorage.hasOwnProperty("documents") && currentSelected !=3 && "done"}  ${currentSelected==3 && "active"}`}>
                <div className={`number`}>
                    03
                </div>
                <div className={`list-text text-nowrap capitalize`}>
                    {t("documents")}
                </div>
            </div>
            <div className="flex justify-center items-center px-2">
                <div className="w-20 h-1 bg-stone-200" ></div>
            </div>
            <div  className={`list-circular ${currentSelected==4 && "active"} `}>
                <div className={`number-bottom`}>
                    04
                </div>
                <div className={`list-text-top text-nowrap capitalize`}>
                    {t("confirm")}
                </div>
            </div>
         </div>

         {currentSelected == 1 && <BasicInformation nextStep={(res)=>setCurrentSelected(res)}/> }
         {currentSelected == 2 && <Location nextStep={(res)=>setCurrentSelected(res)} /> }
         {currentSelected == 3 && <Documents nextStep={(res)=>setCurrentSelected(res)} /> }
         {currentSelected == 4 && <Confirmations nextStep={(res)=>{
            setCurrentSelected(res)
         }} /> }

        </div>
        
    </div> );
}

export default ListYourProperty;