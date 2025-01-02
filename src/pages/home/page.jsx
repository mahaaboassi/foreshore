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
import girl from "../../images/image without background.png"
import banner_1 from "../../images/banner background.jpg"
import girl_2 from "../../images/banner 02 without background.png"
import banner_2 from "../../images/banner 02 background.png"
import girl_3 from "../../images/banner 03 without background.png"
import banner_3 from "../../images/banner 03 back.jpg"

function Home() {
  const { t } = useTranslation();
    const data = [{
      img : girl,
      background_img : banner_1,
      count : 0,
      title : t("hero-text-1"),
      hint :  t("hero-hint-1")
    },{
      img : girl_2,
      background_img : banner_2,
      count : 1 ,
      title : t("hero-text-1") +"2",
      hint :  t("hero-hint-1")
    },{
      img : girl_3,
      background_img : banner_3,
      count : 2 ,
      title : t("hero-text-1")+"3" ,
      hint :  t("hero-hint-1")
    }]
    useEffect(()=>{ window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    return ( <div>
      <Banner data={data} children={<SearchCard/>} />
      <OurBenefits/>
      <ExploreDestination/>
      <Getaway/>
      <ListYourProperty/>
      <Embrace/>
      <Blog/>
    </div>);
}

export default Home;