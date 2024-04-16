import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import LandingPage1 from './components/LandingPage/LandingPage1';
import LandingPage2 from './components/LandingPage/LandingPage2 copy 2';
import LandingPage3 from './components/LandingPage/LandingPage3';
import LandingPage4 from './components/LandingPage/LandingPage4';
import Price from './components/Price/Price';
import Footer from './components/Footer/Footer';



export default function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <LandingPage1/>
    <LandingPage2/>
    <LandingPage3/>
    <LandingPage4/>
    <Price/>
    <Footer/>
    </>
  )
}