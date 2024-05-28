import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import BotonPerfil from '../components/BotonPerfil';

export const NavMenu = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    // Función para manejar el desplazamiento suave a una sección específica
    const handleRedirectTo = (id) => {
        // Solo navega si el id actual es diferente al deseado para evitar bucles
        if (window.location.hash !== `#${id}`) {
            navigate(`/#${id}`);
        }
    
        // Agrega un retraso antes de desplazarte a la sección para asegurar que la redirección se complete
        setTimeout(() => {
            const targetSection = document.getElementById(id);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }, 0);
    };
    


    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        logout(); // Cerrar sesión
        navigate('/'); // Redirigir a la página principal
    };

    return (
        <>
        <header>
            <img className="logo" src="./img/Logos/logo back2enjoy.png" alt="Logo Nimio Estudio" />
            <nav className="links" id="header_page">
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
                        Hazte premium
                    </Link>
                </li>
                <li className="link">
                    <Link to="/" onClick={() => handleRedirectTo('faq-section')}>
                        Preguntas Frecuentes
                    </Link>
                </li>
            </ul>
            </nav>
            {/* Usa `Link` con `onClick` para manejar el desplazamiento suave */}
            <div className='btnGroup'>
                {isLoggedIn && (
                    <Link className="clickable_btn" to="/negocio" onClick={(event) => handleRedirectTo('start')}>
                        Empresa
                    </Link>
                )}
                {isLoggedIn && (
                    <Link  to="/perfil" onClick={(event) => handleRedirectTo('start')}>
                        <BotonPerfil />
                    </Link>
                )}
                {!isLoggedIn && (
                <Link className="clickable_btn" to="/login">
                     Regístrate
                </Link>
                )}

            </div>
        </header>
        <hr />
        </>
    );
};

export default NavMenu;
