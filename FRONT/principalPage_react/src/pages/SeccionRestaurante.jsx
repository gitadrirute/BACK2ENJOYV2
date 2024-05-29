import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/SeccionRestaurantes_y_hoteles.css";
import MapCardComponent from "../components/restaurante/Mapa";

function SeccionRestaurante() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [precioSortOrder, setPrecioSortOrder] = useState('asc');
  const [descuentoSortOrder, setDescuentoSortOrder] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/listadoHosteleriaTF");
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data.negocios)) {
          setRestaurantes(data.negocios);
        } else {
          console.error("Error: La propiedad 'negocios' no es un array", data);
        }
      } catch (error) {
        console.log("Error al obtener los datos de la API", error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = (id) => {
    navigate(`/cardNegocio/${id}`);
  };

  const handlePrecioSortChange = (event) => {
    setPrecioSortOrder(event.target.value);
  };

  const handleDescuentoSortChange = (event) => {
    setDescuentoSortOrder(event.target.value);
  };

  const sortedRestaurants = () => {
    if (!Array.isArray(restaurantes)) {
      console.error('Error: restaurantes is not an array', restaurantes);
      return [];
    }
    
    let sorted = [...restaurantes];
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
        <h2>Restaurantes</h2>
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
        {sortedRestaurants().map((restaurant, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(restaurant.id)}
              className="card"
            >
              <div className="card-image-container">
                <img className="card-image" src={`http://127.0.0.1:8000${restaurant.rutaImagen}` || "https://www.comunicare.es/wp-content/uploads/2021/03/crear-pagina-web.jpg"} alt={restaurant.nombre} />
              </div>
              <div className="card-details">
                {/* <div className="card-category">hola</div> */}
                <h2 className="card-title">
                  <strong>{restaurant.nombre}</strong>
                </h2>
                <p className="card-text">
                  <StarRating rating={restaurant.mediaPuntuacion} /> {restaurant.mediaPuntuacion ? `${restaurant.mediaPuntuacion} / 5.0` : 'N/A'}
                </p>
                <p className="discount-tag">{restaurant.descuento ? `${restaurant.descuento}%` : '20%'}</p>
                <p className="card-text">📍 {restaurant.direccion}</p>
                <p className="card-text">💬 {restaurant.cantidadValoraciones}</p>
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

export default SeccionRestaurante;
