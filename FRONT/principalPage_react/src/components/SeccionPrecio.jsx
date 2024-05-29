import React from 'react'
import CartaPrecio from './CartaPrecio'
import '../assets/css/SeccionPrecio.css'


const SeccionPrecio = () => {
  

  const invitado = [
    'Ver reseñas',
    'Explorar actividades',
    'Recomendaciones básicas'
  ];
  
  const ventajasVip = [
    'Acceso a valoraciones avanzadas',
    'Crear reseñas',
    'Descuentos exclusivos',
    'Rutas personalizadas',
    'Soporte prioritario',
    'Opción de registrarse como empresa'
  ];
  
  const ventajasEmpresa = [
    'Mayor visibilidad en la plataforma',
    'Publicidad destacada',
    'Acceso a datos y análisis',
    'Incorporación en rutas personalizadas de usuarios',
    'Reseñas y feedback de clientes'
  ];

  return (
    <>
    <div className="pricing-section">
      <h1>Precios de nuestros servicios</h1>
      <div className='cards'>
        <CartaPrecio
          title="Invitado"
          price="GRATIS"
          description="Disfruta de acceso básico a nuestra web"
          features={invitado}
          rutaDestino="/"
          btnInfo="Por defecto"
        />
        <CartaPrecio
          title="VIP"
          price="5€ /mes"
          description="Obtén acceso exclusivo a características avanzadas y descuentos especiales."
          features={ventajasVip}
          rutaDestino="/login"
          btnInfo="Registrarse"
        />
        <CartaPrecio
          title="Empresa"
          price="10€ /mes"
          description="Promociona tu negocio y accede a herramientas avanzadas para maximizar tu visibilidad."
          features={ventajasEmpresa}
          rutaDestino="/login"
          btnInfo="Ver empresa"
        />
        {/* Puedes agregar más PricingCard aquí si es necesario */}
      </div>
    </div>
      
    </>
  )
}

export default SeccionPrecio