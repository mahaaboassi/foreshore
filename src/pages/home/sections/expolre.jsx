import React, { useEffect, useState ,useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/header";
// Import Images
import img_1 from "../../../images/destination_1.png"
import img_2 from "../../../images/destination_2.png"
import img_3 from "../../../images/destination_3.png"
import img_4 from "../../../images/destination_4.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function ExploreDestination() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const data = [{
        title : t("explore-title-1"),
        desc : t("explore-desc-1"),
        img : img_1
    },{
        title : t("explore-title-2"),
        desc : t("explore-desc-2"),
        img : img_2
    },{
        title : t("explore-title-3"),
        desc : t("explore-desc-3"),
        img : img_3
    },{
        title : t("explore-title-4"),
        desc : t("explore-desc-4"),
        img : img_4
    }]
    const targetRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    
   useEffect(() => {
     const handleIntersection = (entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           setIsInView(true); // Set state to true when the div is in view
         } else {
           setIsInView(false); // Set state to false when the div is out of view
         }
       });
     };
 
     const observer = new IntersectionObserver(handleIntersection, {
       root: null, // Observe with respect to the viewport
       rootMargin: '0px',
       threshold: 0.5, // Trigger when 50% of the div is visible
     });
 
     // Start observing the target div
     if (targetRef.current) {
       observer.observe(targetRef.current);
     }
 
     // Cleanup observer on component unmount
     return () => {
       if (targetRef.current) observer.unobserve(targetRef.current);
     };
     }, []);
    return ( <div ref={targetRef}  className='explore'>
        <Header title={t("explore-title")} description={t("explore-desc")} />
        <div style={{direction: "ltr"}}>
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Pagination,Navigation]}
            breakpoints={{
                320: {
                    slidesPerView:2, // 1 slide for screens 320px and larger
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2, // 2 slides for screens 768px and larger
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3, // 3 slides for screens 1024px and larger
                    spaceBetween: 20,
                },
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((e)=>(<SwiperSlide key={`Destination_${e.title}`}>
                    <div className='flex flex-col items-center'>
                        <div onClick={()=>navigate(`/property/3`)}  className={`${isInView&&"animated"} cursor-pointer relative`}>
                            <img   src={e.img} alt={e.title} />
                            <div className={` flex items-center justify-center explore-title absolute top-0 left-0 right-0 bottom-0`}>
                                <h4 className='expolre-title  uppercase'>{e.title}</h4>
                            </div>
                        </div>
                        <p className='weight-medium text-center max-w-52 capitalize' >{e.desc}</p>

                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>


    </div> );
}

export default ExploreDestination;