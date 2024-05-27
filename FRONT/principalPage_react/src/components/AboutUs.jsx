import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import '../assets/css/App.css';
const AboutUs = () => {
    return (
        <section id="about_us" className="about_us">
            <h1 className="about_us__title">¡Unete a Back2enjoy!</h1>
            <div className="about_us__container">
                <div className="about_us__img">
                    <Swiper
                        //slidesPerView={1}
                        spaceBetween={10}
                        //pagination={{ clickable: true }}
                        //navigation
                        loop = {true}
                        speed={2000}
                        autoplay={{
                            delay: 3000, // Intervalo de tiempo en milisegundos (3 segundos)
                            disableOnInteraction: false, // Para que no se desactive al interactuar
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
                        <a className="clickable_btn" href="#contact"><b>Contacto</b></a>
                        <a className="clickable_btn" target="_blank" href="#budget"><b>Registrate ahora</b></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs