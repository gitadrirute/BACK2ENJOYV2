import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import { Link } from 'react-router-dom';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import '../assets/css/App.css';

const AboutUs = () => {

    // Función para manejar el desplazamiento suave a una sección específica
    const handleScrollToSection = (id) => {
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
        <section id="about_us" className="about_us">
            <h1 className="about_us__title">¡Únete a Back2enjoy!</h1>
            <div className="about_us__container">
                <div className="about_us__img">
                    <Swiper
                        spaceBetween={10}
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga1.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga2.jpeg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga3.jpeg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga4.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga5.jpg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <img src="./img/swiper Images/malaga6.jpg" alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="about_us__content">
                    <h3>Descubre Málaga como nunca antes con BackToEnjoy</h3>
                    <p>En BackToEnjoy, nos dedicamos a facilitar tu experiencia turística en la hermosa ciudad de Málaga. Nuestro equipo está comprometido a proporcionarte recomendaciones auténticas y valoraciones honestas de otros usuarios para que puedas disfrutar al máximo tu visita.</p>
                    <p>Con una combinación de tecnología innovadora y conocimiento local, nos esforzamos por ofrecerte una guía completa y personalizada para explorar los rincones más fascinantes de Málaga. Desde restaurantes ocultos hasta atracciones menos conocidas, estamos aquí para ayudarte a descubrir los secretos mejor guardados de esta encantadora ciudad.</p>
                    <p>Únete a nosotros en esta emocionante aventura y haz que tu viaje a Málaga sea inolvidable. Descubre lo que BackToEnjoy puede hacer por ti:</p>
                    <div className="btns_container">
                        <Link
                            className="clickable_btn"
                            to="#contact"
                            onClick={() => handleScrollToSection('contact')}
                        >
                            <b>Contacto</b>
                        </Link>
                        <Link
                            className="clickable_btn"
                            to="/login"
                            onClick={() => handleScrollToSection('product')}
                        >
                            <b>Regístrate ahora</b>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
