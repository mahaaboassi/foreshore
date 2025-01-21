
import React ,{useEffect, useState}  from 'react';
import { useTranslation } from 'react-i18next';
import Retype from "../../components/retype";
import { Helper } from '../../functionality/helper';
import { apiRoutes } from '../../functionality/apiRoutes';
import { useNavigate, useParams } from 'react-router-dom';


function PropertyDetails() {
   const { t ,i18n } = useTranslation();
   const { id } = useParams()
   const navigate = useNavigate()
   const [ slides, setSlides]  = useState([])
   const bufferToString = (buffer) => {
        return new TextDecoder().decode(new Uint8Array(buffer));
    };  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    const [hintAmentities , setHintAmentities] = useState([])
    const [ loading, setLoading] = useState(true)
    const [ isOpen , setIsOpen] = useState(false)
    const [ dataFromApi, setDataFromApi] = useState(undefined)
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal
        const getData = async (signal)=>{
            const { response , message } = await Helper({
                url : apiRoutes.property.getOne(id),
                signal,
                method : "GET"
            })
            if(response){
                setSlides([])
                setDataFromApi(response.data)
                response.data.files.forEach(file=>{
                  setSlides(prev=>[...prev,{ id: file._id, image: file.url, background: file.url }])
                })
                response.data.features.forEach(ele => {
                  let index = 0;
                  for (const child of ele.subFeatures) {
                    if (index < 1) {
                      setHintAmentities(prev => [...prev, child]);
                      index++;
                    } else {
                      break; // Move to the next `ele`
                    }
                  }
                });
                setLoading(false)
            }else{
                console.log(message);
                if(message == "Property not found."){
                  navigate("/destinations")
                }
                if(message == "Something went wrong, please try again."){
                  navigate("/destinations")
                }
                setLoading(false)
                
            }
        }
        window.scrollTo({ top: 0,  behavior: 'smooth' })
        getData(signal)
        return ()=> controller.abort()

    },[id])
    return ( loading || dataFromApi == undefined ?<div className="loading pt-40">
            <div className="bounce"></div>
            <div className="bounce"></div>
            <div className="bounce"></div>
        </div>: <div className='one-property'>
            <div
                className="background-container"
                style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
              >
            <div className="flex justify-center flex-col items-center info-pro">
                <div>
                    <h2 className="capitalize py-3 text-center px-2"><Retype text={i18n.language=="en"?(dataFromApi.name_en?dataFromApi.name_en:""):(dataFromApi.name_ar?dataFromApi.name_ar:"")} /></h2> 
                </div>
                <p className="pb-2">{`${currentSlide+1}/${slides.length}`}</p>
            </div>
            <div style={{direction:"ltr"}} className="slider-container md:h-96 ">
              {slides.map((slide, index) => (<div
                key={slide.id}
                className={`slider-item ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.image} alt={`Slide ${slide.id}`} />
              </div>))}
              <button className="slider-nav left" onClick={handlePrev}>
                &#10094;
              </button>
              <button className="slider-nav right" onClick={handleNext}>
                &#10095;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-8 sm:mt-10">
            <div className="col-span-4 md:col-span-3 px-6 lg:px-10">
              <div className='content-property p-2 md:p-5'>
                <p>
                  ({dataFromApi.guests?dataFromApi.guests:""}) {" "} {t("guest")} , ({dataFromApi.bedrooms?dataFromApi.bedrooms:""})  {" "} {t("bedrooms")} , ({dataFromApi.beds?dataFromApi.beds:""}) {" "} {t("beds")} , ({dataFromApi.bathrooms?dataFromApi.bathrooms:""}) {" "} {t("bathrooms")}
                </p>
                <div className='flex gap-1 pt-3'>
                    {[1,2,3,4,5].map((e)=><div key={`Stars_${e}`}>
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
                    </div>)}
                </div>

                <div className='min-h-40 '>

                <h4 className='capitalize pt-5 pb-2'>{t("about-this-place")}</h4>
                <p className='px-2' dangerouslySetInnerHTML={{__html : i18n.language == "en"? (dataFromApi.description_en?dataFromApi.description_en:""):(dataFromApi.description_ar?dataFromApi.description_ar:"")}}></p>
                
                <h4 className='capitalize pt-5 pb-2'>{t("what-this-place-offers")}</h4>
                <div className='px-2 grid grid-cols-1 sm:grid-cols-2'>
                    {
                          hintAmentities.map((child)=>(<div  key={`Hint_Features_Property_${child.id}`}>
                            
                              <p className='flex items-center gap-3 mb-2' >
                                  <div dangerouslySetInnerHTML={{__html : bufferToString(child.icon?.data)}}></div>
                                  <div className=''>{i18n.language == "en" ?(child.name_en?child.name_en:""):(child.name_ar?child.name_ar:"")}</div>
                                </p>
                            

                          </div>))
                        }
                </div>
                <div className='my-4'>
                  <button onClick={()=>setIsOpen(true)} className='btn-main p-5 capitalize' >{t("show-all-anemities")}</button>
                </div>

                {
                  isOpen && <div style={{height:window.innerHeight-100}} className='alert-card div-scroll'>
                    <div className='flex justify-between items-center'>
                     <h4 className='capitalize pt-5 pb-2'>{t("what-this-place-offers")}</h4>
                     <div onClick={()=>setIsOpen(false)} className='cursor-pointer flex justify-center items-center' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_17_1174)">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#27CBBE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_17_1174">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg></div>
                    </div>
                    <div className='px-2 grid grid-cols-1 sm:grid-cols-2'>
                  {
                    dataFromApi.features.map((e)=>(<div  key={`Features_Property_${e.id}`}>
                      <h5>{i18n.language == "en"? (e.name_en?e.name_en:""):(e.name_ar?e.name_ar:"")}</h5>
                      <ul className='py-2'>
                          {e.subFeatures.map(child=>(<li className='flex items-center gap-3 mb-2' key={`Title_amenities_${child.id}`}>
                            <div dangerouslySetInnerHTML={{__html : bufferToString(child.icon?.data)}}></div>
                            <div className=''>{i18n.language == "en" ?(child.name_en?child.name_en:""):(child.name_ar?child.name_ar:"")}</div>
                          </li>))}
                      </ul>

                    </div>))
                  }
                </div>
                  </div>
                }
                <h4 className='capitalize pt-5 pb-2'> {t("where-you’ll-be")}</h4>
                {<div className='!w-full px-2'>
                    <p className='pb-3'>{dataFromApi.city?dataFromApi.city:""},{" "}{dataFromApi.region?dataFromApi.region:""},
                    {" "}{dataFromApi.street?dataFromApi.street:""} , {" "}{dataFromApi.building?dataFromApi.building:""},
                    {" "}{dataFromApi.floor?dataFromApi.floor:""}
                    </p>
                    <iframe className='!w-full rounded' src={dataFromApi.link_map?dataFromApi.link_map:""} width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>}
                </div>
              </div>
              
            </div>
          
            <div className="col-span-4 md:col-span-1 mt-8 sm:mt-10 md:mt-0  relative px-6 lg:px-10 ">
              <div style={{position:"sticky",top:"100px"}}>
                <div className='w-full pb-3'>
                  <button className='btn-main capitalize !w-full'>{t("book-now")}</button>
                </div>
                <div className='w-full'>
                  <button className='btn-main capitalize !w-full'>{t("download")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>);
}

export default PropertyDetails;