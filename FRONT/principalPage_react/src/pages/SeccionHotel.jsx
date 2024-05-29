import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/SeccionRestaurantes_y_hoteles.css";
import MapCardComponent from "../components/restaurante/Mapa";

function SeccionHotel() {
  const [hotels, setHotels] = useState([]);
  const [precioSortOrder, setPrecioSortOrder] = useState('asc');
  const [descuentoSortOrder, setDescuentoSortOrder] = useState('asc');
  const navigate = useNavigate();


  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/listadoHotelesTF");
        const data = await response.json();
        console.log(data); // Verificar los datos recibidos
        if (Array.isArray(data.negocios)) {
          setHotels(data.negocios);
        } else {
          console.error("Error: La propiedad 'hoteles' no es un array", data);
        }
      } catch (error) {
        console.log("Error al obtener los datos de la API", error);
      }
    };

    fetchData();
  }, []);

  // Función para manejar la redirección
  const handleRedirect = (id) => {
    navigate(`/cardNegocio/${id}`);
  };


  // Función para manejar el cambio de orden en el selector de precio
  const handlePrecioSortChange = (event) => {
    setPrecioSortOrder(event.target.value);
  };

  // Función para manejar el cambio de orden en el selector de descuento
  const handleDescuentoSortChange = (event) => {
    setDescuentoSortOrder(event.target.value);
  };

  // Función para ordenar tus elementos según los selectores
  const sortedHotels = () => {
    if (!Array.isArray(hotels)) {
      console.error('Error: hoteles is not an array', hotels);
      return [];
    }
    
    let sorted = [...hotels]; // Hacer una copia de la lista de hoteles
  
    // Ordenar por precio y luego por descuento
    sorted.sort((a, b) => {
      if (precioSortOrder === 'asc') {
        if (a.precio !== b.precio) {
          return a.precio - b.precio;
        } else {
          return a.descuento - b.descuento;
        }
      } else {
        if (a.precio !== b.precio) {
          return b.precio - a.precio;
        } else {
          return b.descuento - a.descuento;
        }
      }
    });

    return sorted;
  };

  // Componente para renderizar las estrellas de puntuación
const StarRating = ({ rating }) => {
  // Crear un array con 5 elementos para las estrellas
  const stars = Array.from({ length: 5 }, (_, index) => {
    // Determinar si la estrella debe estar llena o vacía
    const starType = rating >= index + 1 ? '★' : '☆';
    return <span key={index} className="star">{starType}</span>;
  });

  return <div className="star-rating">{stars}</div>;
};

  return (
    <div className="containerSection" id="product">
      
      <div className="cards-Section">
        <h2>Hoteles</h2>
        <div className="sort-container">
          <label htmlFor="sortOrder">Ordenar por precio: </label>
          <select id="sortPrice" value={precioSortOrder} onChange={handlePrecioSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
          <label htmlFor="sortOrder">Ordenar por descuento: </label>
          <select id="sortDiscount" value={descuentoSortOrder} onChange={handleDescuentoSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
        <div className="cardsContainer">
        {sortedHotels().map((hotel, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(hotel.id)}
              className="card"
            >
              <div className="card-image-container">
                <img className="card-image" src={`http://127.0.0.1:8000${hotel.rutaImagen}` || "https://www.comunicare.es/wp-content/uploads/2021/03/crear-pagina-web.jpg"} alt={hotel.nombre} />
              </div>
              <div className="card-details">
                {/* <div className="card-category">hola</div> */}
                <h2 className="card-title">
                  <strong>{hotel.nombre}</strong>
                </h2>
                <p className="card-text">
                  <StarRating rating={hotel.mediaPuntuacion} /> {hotel.mediaPuntuacion ? `${hotel.mediaPuntuacion} / 5.0` : 'N/A'}
                </p>
                <p className="discount-tag">{hotel.descuento ? `${hotel.descuento}%` : '20%'}</p>
                <p className="card-text">📍 {hotel.direccion}</p>
                <p className="card-text">💬 {hotel.cantidadValoraciones}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="map-containerSection">
        <MapCardComponent/>
      </div>
    </div>
  );
}


export default SeccionHotel;
