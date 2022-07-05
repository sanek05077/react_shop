import React from 'react'
import {HomeSlider} from '../../components/Pages/Home/HomeSlider/HomeSlider'
import {HomePrimarySection} from '../../components/Pages/Home/HomePrimarySection/HomePrimarySection'
import {HomeSecondarySection} from '../../components/Pages/Home/HomeSecondarySection/HomeSecondarySection'
import {CategoriesList} from '../../components/Categories/CategoriesList/CategoriesList'
import {BannerBottom} from '../../components/Banners/BannerBottom/BannerBottom'
import {HomeNewsList} from '../../components/Pages/Home/HomeNews/HomeNewsList/HomeNewsList'

export const Home = () => (
  <React.Fragment>
    <HomeSlider/>
    <CategoriesList/>
    <HomePrimarySection/>
    <HomeSecondarySection/>
    <BannerBottom/>
    <HomeNewsList/>
  </React.Fragment>
)
