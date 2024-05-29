import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';


const Presentation = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const path = event.target.opciones.value;
    navigate(path);
  };
  return (
    <>
    <div className="seccion_busqueda" id="seccion_busqueda">  
      {/* <!-- Swiper --> */}
      <div className="swiper mySwiper">
            <Swiper
                spaceBetween={10}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 3500, // Intervalo de tiempo en milisegundos (3 segundos)
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper">
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga1.jpg" style={{ width: '80%', height: '400px' }} alt="Málaga 1" />
                </SwiperSlide>
                {/* <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga2.jpeg" style={{ width: '80%', height: '400px' }} alt="Málaga 2" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga3.jpeg" style={{ width: '80%', height: '400px' }} alt="Málaga 3" />
                </SwiperSlide> */}
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga4.jpg" style={{ width: '80%', height: '400px' }} alt="Málaga 4" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga5.jpg" style={{ width: '80%', height: '400px' }} alt="Málaga 5" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src="./img/swiper Images/malaga6.jpg" style={{ width: '80%', height: '400px' }} alt="Málaga 6" />
                </SwiperSlide>
            </Swiper>

        {/* <!-- <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> -->
        <!-- <div className="swiper-pagination"></div> --> */}
      </div>

      <div className="menu_busqueda">
          <form onSubmit={handleSubmit}>
            <label htmlFor="opciones">Que buscas</label>
            <select name="opciones" id="opciones">
              <option value="/restaurantes">Restaurantes</option>
              <option value="/">Hoteles</option>
            </select>
            <input className='clickable_btn' type="submit" value="Buscar" />
          </form>
        </div>
  </div>
    </>
  )
}

export default Presentation