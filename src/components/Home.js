import React from 'react'
import AboutUs from './AboutUs'
import FeaturedProducts from './FeaturedProducts'
import Slider from './Slider'

const Home = () => {
  return (
    <>
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Slider />
      </div>
      <AboutUs />
      <FeaturedProducts />
    </>
  )
}

export default Home