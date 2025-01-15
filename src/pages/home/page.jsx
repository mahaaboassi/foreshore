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
import girl_small from "../../images/b 500 x 330.webp"
import girl_medium from "../../images/A 700x330.webp"
import banner_1 from "../../images/banner background.webp"
import girl_2 from "../../images/banner 02 without background.webp"
import girl_2_small from "../../images/a 500 x330.webp"
import girl_2_medium from "../../images/C 700x330.webp"
import banner_2 from "../../images/banner 02 background.webp"
import girl_3 from "../../images/banner 03 without background.webp"
import girl_3_small from "../../images/c 500 x330.webp"
import girl_3_medium from "../../images/B 700x330.webp"
import banner_3 from "../../images/banner 03 back.webp"

function Home() {
  const { t } = useTranslation();
    const data = [{
      img :  window.innerWidth <= 500 ? girl_small : (window.innerWidth <=700 ? girl_medium: girl),
      background_img : banner_1,
      count : 0,
      title : t("hero-text-1"),
      hint :  t("hero-hint-1")
    },
    {
      img : window.innerWidth <= 500 ? girl_2_small : (window.innerWidth <=700 ? girl_2_medium: girl_2) ,
      background_img : banner_2,
      count : 1 ,
      title : t("hero-text-2") ,
      hint :  t("hero-hint-2")
    },{
      img : window.innerWidth <= 500 ? girl_3_small : (window.innerWidth <=700 ? girl_3_medium: girl_3) ,
      background_img : banner_3,
      count : 2 ,
      title : t("hero-text-3") ,
      hint :  t("hero-hint-3")
    }
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