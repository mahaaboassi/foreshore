import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade} from 'swiper/modules';


function Banner({children,data}) {
  


    return (<div  className='relative banner'>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              loop={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              simulateTouch={true} 
              modules={[EffectFade,Autoplay]}
              className="mySwiper"
            >
              {data.map((ele, index)=>(<SwiperSlide key={`Banner_${ele.title}`}>
                <div className='img-hero'>
                  <img className='w-full' src={ele.background_img} alt="banner" />
                  <img className='w-full girl' src={ele.img} alt="girl" />
                  
                </div>
                <div className='content-hero left-5 lg:left-10 '>
                  
                  <h2 className='text-main weight-bold'>{ele.hint}</h2>
                  <h1 className='text-dark weight-bold'>{ele.title}</h1>
                </div>
              </SwiperSlide>))}
          </Swiper>

        {children}
        

    </div>   );
}

export default Banner;