import React from 'react'

import HeroComponent from './HeroComponent'
import ProductGrid from './ProductGrid'
import FirstLayer from './FirstLayer'
import SecondLayer from './SecondLayer'
import ThirdLayer from './ThirdLayer'
import FourthLayer from './FourthLayer'
import VideoSection from './VideoSection'


function Home() {
  return (
    <div>
        <HeroComponent/>
        <ProductGrid/>
        <FirstLayer/>
        <SecondLayer/>
        <ThirdLayer/>
        <FourthLayer/>
        <VideoSection/>
        </div>
  )
}

export default Home