import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../assets/css/CasalLola.css";
import GeneradorCodigo from './CodigoDescuento';
import FormularioReseñas from './FormularioReseñas';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/css/SwiperNegocio.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardNegocio = () => {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [negocio, setNegocio] = useState(null);
  const [imagenes, setImagenes] = useState([]); // Estado para almacenar las imágenes
  const { id } = useParams(); // Obtenemos el id del negocio de los parámetros de la URL

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/paginaPrincipalNegocio/${id}`)
      .then(response => {
        const negocioData = response.data.negocios[0];
        setNegocio(negocioData);
        setImagenes(negocioData.rutaImagenes); // Almacenar las imágenes en el estado
      })
      .catch(error => {
        console.error('Error fetching the negocio:', error);
      });
  }, [id]);

  return (
    <>
      <div className='fondoPerfil'>
        <div className="container">
          <br />
          {/* Swiper */}
          <div className="swiper-container">
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {imagenes.map((imagen, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  <img src={`http://127.0.0.1:8000${imagen}`} className="swiper-image" alt={`Imagen ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
                {/* Pasar el id (negocioId) al componente FormularioReseñas */}
                <FormularioReseñas negocioId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardNegocio;
