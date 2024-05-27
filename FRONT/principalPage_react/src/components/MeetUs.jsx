import React from 'react'
import AboutUs from './AboutUs'
import AdvantagesCards from './AdvantagesCards'
// import VentajasEmpresas from './VentajasEmpresas'

const MeetUs = () => {
  return (
    <div id="about_us_Advantages">
        
        <AboutUs></AboutUs>
        {/* <VentajasEmpresas></VentajasEmpresas> */}
        {/* añadir seccion de ventajas para las empresas */}
        <AdvantagesCards></AdvantagesCards>
    </div>
  )
}

export default MeetUs