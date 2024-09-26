import React from 'react'
import Banner from './Banner/Banner'
import Carousal from '../Carousal/Carousal'
import Value from './Value/Value'
import Counter from './Counter/Counter'
import Client from '../Client/Client'
import CircleDesign from '../CircleDesign/CircleDesign'

const Home = () => {
  return (
    <>
    <Carousal/>
        <Banner/>
        <CircleDesign/>
        <Value/>
        <Counter/>
        <Client/>
    </>
  )
}

export default Home