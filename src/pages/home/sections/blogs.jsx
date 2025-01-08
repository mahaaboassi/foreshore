import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/header";
// Import Images
import img_1 from "../../../images/warm-tones-living-room-christmas-a33ab063-9ef63f3845ef4e5993712fb3074b9c67.webp"
import img_2 from "../../../images/Dubai-Holiday-Home-Vacation.webp"
import img_3 from "../../../images/image.webp"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';


function Blog() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const data = [{
        title : t("blog-title-1"),
        desc : t("blog-desc-1"),
        img : img_1
    },{
        title : t("blog-title-2"),
        desc : t("blog-desc-2"),
        img : img_2
    },{
        title : t("blog-title-3"),
        desc : t("blog-desc-3"),
        img : img_3
    },{
        title : t("blog-title-3"),
        desc : t("blog-desc-3"),
        img : img_2
    }]
    return ( <div className='blog'>
        <Header title={t("blog-title")} description={t("blog-desc")} />
        <div style={{direction: "ltr"}}>
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            simulateTouch={true} 
            modules={[Autoplay,Navigation]}
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
                    slidesPerView: 4, // 3 slides for screens 1024px and larger
                    spaceBetween: 20,
                },
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((e,i)=>(<SwiperSlide key={`Blog_${e.title}_${i}`}>
                    <div className='flex flex-col items-center max-w-96'>
                        <div className='p-3 content-blog '>
                            <div className='flex justify-center'>
                                <img className='w-full object-cover h-32 sm:h-40 md:h-52 '  src={e.img} alt={e.title} />
                            </div>
                            <h5 style={i18n.language=="ar"?{direction:"rtl"}:{direction:"ltr"}}  className='weight-blod capitalize py-3 flex  min-h-14 md:min-h-20 items-center '>{e.title}</h5>
                            <div >
                                <button onClick={()=>navigate(`/blog/3`)} className='btn-main !w-full capitalize  button-mark'>
                                    {i18n.language=="ar" && <span className='px-2 flex items-center'>&lt;</span>}
                                    {t("see-more")} {i18n.language=="en" && <span className='px-2 flex items-center'>&gt;</span>}
                                </button>
                                {/* <div  className='button-mark'><span className='px-2 flex items-center'>&gt;</span></div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>


    </div> );
}

export default Blog;