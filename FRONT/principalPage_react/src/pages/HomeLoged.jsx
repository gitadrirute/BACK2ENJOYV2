import React from 'react'
import RestaurantSection from './UsuarioRegistrado/RestaurantSection'
import '../assets/css/RestaurantCard.css';
import '../assets/css/RestaurantHome.css';
import Presentation from '../components/Presentation';
import Budget from '../components/Budget';
import FaqSection from '../components/FaqSection';
import ContactUs from '../components/ContactUs';
import HotelSection from './UsuarioRegistrado/HotelSection';
import BotonPerfil from '../components/BotonPerfil';
import SeccionPrecio from '../components/SeccionPrecio';

const HomeLoged = () => {
    //Pagina principal
    //Usuario ha iniciado sesion
  return (
    <>
      <Presentation></Presentation>
      <RestaurantSection city={"Malaga"}/>
      <HotelSection city={"Malaga"}/>
      <Budget></Budget>
      <SeccionPrecio></SeccionPrecio>
      <FaqSection></FaqSection>
      <ContactUs></ContactUs>
      {/* <BotonPerfil></BotonPerfil> */}
    </>
  )
}

export default HomeLoged