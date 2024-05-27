import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../assets/css/CasalLola.css";
import GeneradorCodigo from './CodigoDescuento';
import FormularioReseñas from './FormularioReseñas';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardNegocio = () => {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [negocio, setNegocio] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/paginaPrincipalNegocio/${id}`)
      .then(response => {
        setNegocio(response.data.negocios[0]);
      })
      .catch(error => {
        console.error('Error fetching the negocio:', error);
      });
  }, [id]);

  return (
    <>
      {/* Swiper */}
      <div className="swiper mySwiper">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga1.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 1" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga2.jpeg" style={{ width: '80%', height: '200px' }} alt="Málaga 2" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga3.jpeg" style={{ width: '80%', height: '200px' }} alt="Málaga 3" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga4.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 4" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga5.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 5" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <img src="../img/swiper Images/malaga6.jpg" style={{ width: '80%', height: '200px' }} alt="Málaga 6" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container">
        <br />
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'descripcion' ? 'active' : ''}`}
              onClick={() => setActiveTab('descripcion')}
            >
              Descripción
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'opiniones' ? 'active' : ''}`}
              onClick={() => setActiveTab('opiniones')}
            >
              Opiniones
            </button>
          </li>
        </ul>

        {/* Tab panes */}
        <div className="tab-content">
          <div className={`container tab-pane ${activeTab === 'descripcion' ? 'active' : 'fade'}`}>
            <div className="tab-pane-content">
              <br />
              {negocio && (
                <>
                  <h3>{negocio.nombre}</h3>
                  <p>📍 Dirección: {negocio.direccion}</p>
                  <p>📞 Teléfono: {negocio.telefono}</p>
                  <p>🌐 Sitio Web: <a href={negocio.sitioWeb} target="_blank" rel="noopener noreferrer">{negocio.sitioWeb}</a></p>
                  <p>ℹ️ Información: {negocio.informacion}</p>
                </>
              )}
                           
              <GeneradorCodigo />
            </div>
          </div>
          <div className={`container tab-pane ${activeTab === 'opiniones' ? 'active' : 'fade'}`}>
            <div className="tab-pane-content">
              <br />
              <h3>Opiniones</h3>
              <p>Contenido de opiniones</p>
              <FormularioReseñas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardNegocio;
