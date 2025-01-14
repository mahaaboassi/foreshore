import React, { useEffect }  from 'react';
import { useTranslation } from 'react-i18next';
// Components
import Blog from './sections/blogs';
import Embrace from './sections/embrace';
import Banner from './sections/banner';
import SearchCard from './sections/searchCard';

// Images
import OurBenefits from './sections/ourBenefits';
import ExploreDestination from './sections/expolre';
import Getaway from './sections/getaway';
import ListYourProperty from './sections/list';

// Images For Banners
import girl from "../../images/image without background.webp"
import girl_small from "../../images/image without background_small.webp"
import banner_1 from "../../images/banner background.webp"
import girl_2 from "../../images/banner 02 without background.webp"
import girl_2_small from "../../images/banner 02 without background_small.webp"
import banner_2 from "../../images/banner 02 background.webp"
import girl_3 from "../../images/banner 03 without background.webp"
import girl_3_small from "../../images/banner 03 without background_small.webp"
import banner_3 from "../../images/banner 03 back.webp"

function Home() {
  const { t } = useTranslation();
    const data = [{
      img :  window.innerWidth <= 500 ? girl_small: girl,
      background_img : banner_1,
      count : 0,
      title : t("hero-text-1"),
      hint :  t("hero-hint-1")
    },
    // {
    //   img :  window.innerWidth <= 500 ? girl_2_small: girl_2,
    //   background_img : banner_2,
    //   count : 1 ,
    //   title : t("hero-text-2") ,
    //   hint :  t("hero-hint-2")
    // },{
    //   img : window.innerWidth <= 500 ? girl_3_small: girl_3,
    //   background_img : banner_3,
    //   count : 2 ,
    //   title : t("hero-text-3") ,
    //   hint :  t("hero-hint-3")
    // }
  ]
    useEffect(()=>{ 

      
      window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    return ( <div>
      <Banner fromHomePage={true} data={data} children={<SearchCard/>} />
      <OurBenefits/>
      <ExploreDestination/>
      <Getaway/>
      <Embrace/>
      <ListYourProperty/>
      <Blog/>
    </div>);
}

export default Home;