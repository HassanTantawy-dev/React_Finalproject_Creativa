import React from 'react'
import Allcompo from '../components/Allcompo'
import Footer from '../components/Footer'
import HeaderProp from './HeaderProp'
import SectionProp from './SectionProp'
import { CartProvider } from 'react-use-cart'

function AllProperties() {
  return (
    <CartProvider>
        <Allcompo />
        <HeaderProp />
        <SectionProp />
        <Footer />
    </CartProvider>
  )
}

export default AllProperties