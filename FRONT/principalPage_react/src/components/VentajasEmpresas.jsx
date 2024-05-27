import React from 'react'

const VentajasEmpresas = () => {
  return (
    <>
    <section className="ventajas-empresas">
        <h2>Beneficios para tu Empresa</h2>
        <div className="ventajas-empresas__lista">
            <div className="ventajas-empresas__item">
                <img src="icono1.png" alt="Icono" />
                <h3>Aumento de la visibilidad</h3>
                <p>Al tener presencia en línea, tu empresa será más visible para potenciales clientes en todo momento.</p>
            </div>
            <div className="ventajas-empresas__item">
                <img src="icono2.png" alt="Icono" />
                <h3>Generación de leads</h3>
                <p>Una página web bien diseñada puede ayudar a captar leads y convertir visitantes en clientes potenciales.</p>
            </div>
            <div className="ventajas-empresas__item">
                <img src="icono3.png" alt="Icono" />
                <h3>Mayor credibilidad</h3>
                <p>Una presencia en línea profesional y actualizada aumenta la credibilidad de tu empresa ante clientes y socios.</p>
            </div>
            <div className="ventajas-empresas__item">
                <img src="icono4.png" alt="Icono" />
                <h3>Ampliación del mercado</h3>
                <p>Con una presencia en línea, tu empresa puede llegar a clientes fuera de tu área geográfica habitual, ampliando así tu mercado potencial.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default VentajasEmpresas