import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    // Función para redirigir a una sección específica de la página principal
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
        <footer>
            <div className="footer_links">
                 {/* Sección de explorar */}
                 <div className="footer__section">
                    <h3>Explorar</h3>
                    <ul className="link_list">
                        {/* Modifica los enlaces para usar `onClick` y `handleRedirectTo` */}
                        <li className="link">
                            <Link to="/" onClick={() => handleRedirectTo('product')}>
                                Inicio
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/" onClick={() => handleRedirectTo('about_us_Advantages')}>
                                Quiénes somos
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/" onClick={() => handleRedirectTo('budget')}>
                                Pide presupuesto
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/" onClick={() => handleRedirectTo('faq-section')}>
                                Preguntas Frecuentes
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Sección de políticas de privacidad */}
                <div className="footer__section">
                    <h3>Políticas de Privacidad</h3>
                    <ul>
                        <li>
                            <Link to="/AvisoLegal" onClick={() => handleRedirectTo('header_page')} >
                                Aviso legal y condiciones de uso
                            </Link>
                        </li>
                        <li>
                            <Link to="/politicaPrivacidad" onClick={() => handleRedirectTo('header_page')} >
                                Política de privacidad
                            </Link>
                        </li>
                        <li>
                            <Link to="/politicaCookies" onClick={() => handleRedirectTo('header_page')} >
                                Política de cookies
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Sección de redes sociales */}
                <div className="footer__section">
                    <h3>Nuestras Redes</h3>
                    <ul className="social-list">
                        <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><img className="icons" src="/img/Logos/facebook.png" alt="Facebook" />Facebook</a></li>
                        <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><img className="icons" src="/img/Logos/twitter.png" alt="Twitter" />Twitter</a></li>
                        <li><a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><img className="icons" src="/img/Logos/instagram.png" alt="Instagram" />Instagram</a></li>
                        <li><a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank"><img className="icons" src="/img/Logos/youtube.png" alt="YouTube" />YouTube</a></li>
                    </ul>
                </div>

                {/* Sección de contacto */}
                <div className="footer__section">
                    <h3>Contacto</h3>
                    <ul>
                        {/* Uso de la función de redirección */}
                        <li><Link to="/" onClick={() => handleRedirectTo('call_us')}>Llámanos</Link></li>
                        <li><Link to="/" onClick={() => handleRedirectTo('contact')}>Contáctanos</Link></li>
                    </ul>
                </div>

            </div>
            
            <p>Derechos de autor © 2024 - Back To Enjoy S.L.</p>
        </footer>
    );
};

export default Footer;
