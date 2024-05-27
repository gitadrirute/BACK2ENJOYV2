import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Budget = () => {
    const navigate = useNavigate();

    // Función para manejar el desplazamiento suave a una sección específica
    const handleRedirectTo = (id) => {
        // Redirige a la página principal con un fragmento de ID
        navigate(`/#${id}`);

        // Agrega un retraso antes de desplazarte a la sección para asegurar que la redirección se complete
        setTimeout(() => {
            // Encuentra la sección de destino por su ID
            const targetSection = document.getElementById(id);

            // Desplázate suavemente a la sección de destino
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }, 0);
    };
  return (
    <>
        <section className="budget" id="budget">
            <div className="budget__title">
                <h1>Da el primer paso hacia una experiencia única en Málaga</h1>
                <p>Con nuestro servicio de creación de rutas personalizadas, podrás descubrir lo mejor que Málaga tiene para ofrecer de acuerdo a tus necesidades y preferencias.</p>
                <p>No pierdas más tiempo buscando, ¡permítenos diseñar la ruta perfecta para ti!</p><br/>
                <div id="showFormBtn_2" className="buttonBox">
                
                    <Link className="clickable_btn" to="/login" onClick={(event) => handleRedirectTo('product')}>
                    <b>¡Registrate!</b></Link>
                    
                </div>
            </div>
        
            <div className="budget__img">
                <img src="./img/Logos/ruta_logo.jpeg" alt="imagen" width="500px"/>
            </div>
        </section>
   </>
  )
}

export default Budget