import { CartProvider } from 'react-use-cart'
import Allcompo from './components/Allcompo'
import Footer from './components/Footer'
import Banner from './Home/Banner'
import BestDeal from './Home/BestDeal'
import ContactContent from './Home/ContactContent'
import ContactHome from './Home/ContactHome'
import Fact from './Home/Fact'
import Feature from './Home/Feature'
import PropertiesHome from './Home/PropertiesHome'
import Video from './Home/Video'
import VidewoContent from './Home/VideoContent'



function App() {
  return (
    <CartProvider>
      <Allcompo /> 
      <Banner />
      <Feature />
      <Video />
      <VidewoContent />
      <Fact />
      <BestDeal />
      <PropertiesHome />
      <ContactHome />
      <ContactContent />


      <Footer /> 
    </CartProvider>
  )
}

export default App