import React from 'react'
import Presentation from '../components/Presentation'
// import CallUs from '../components/CallUs'
import Budget from '../components/Budget'
import FaqSection from '../components/FaqSection'
import ContactUs from '../components/ContactUs'
// import NewsLetter from '../components/NewsLetter'
import '../assets/css/App.css';
import MeetUs from '../components/MeetUs'
import RestaurantSection from './UsuarioRegistrado/RestaurantSection'
import HotelSection from './UsuarioRegistrado/HotelSection'
import SeccionPrecio from '../components/SeccionPrecio'


//PAGINA PRINCIPAL
const Home = () => {
  return (
    <>
      <Presentation></Presentation>
      <RestaurantSection city={"Malaga"}/>
      <HotelSection city={"Malaga"}/>
      <MeetUs></MeetUs>
      <Budget></Budget>
      <SeccionPrecio></SeccionPrecio>
      <FaqSection></FaqSection>
      <ContactUs></ContactUs>
      {/* <NewsLetter></NewsLetter> */}
      
    </>
  )
}

export default Home