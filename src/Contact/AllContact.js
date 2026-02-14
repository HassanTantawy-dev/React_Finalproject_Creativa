import React from 'react'
import Allcompo from '../components/Allcompo'
import Footer from '../components/Footer'
import ContactPage from './ContactPage'
import Header from './Header'
import { CartProvider } from 'react-use-cart'

function AllContact() {
  return (
    <CartProvider>
        <Allcompo />
        <Header />
        <ContactPage />
        <Footer />
    </CartProvider>
  )
}

export default AllContact