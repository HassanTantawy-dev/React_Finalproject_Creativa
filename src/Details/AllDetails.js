import React from 'react'
import Allcompo from '../components/Allcompo'
import Footer from '../components/Footer'
import HeaderText from './HeaderText'
import SingleProperty from './SingleProperty'
import BestDeal from '../Home/BestDeal'
import { CartProvider } from 'react-use-cart'

function AllDetails() {
  return (
    <CartProvider>
        <Allcompo />
        <HeaderText />
        <SingleProperty />
        <BestDeal />


        <Footer />
    </CartProvider>
  )
}

export default AllDetails