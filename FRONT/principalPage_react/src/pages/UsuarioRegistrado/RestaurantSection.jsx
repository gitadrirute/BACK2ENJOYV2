import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import RestaurantCard from './RestaurantCard';
import { useNavigate } from "react-router-dom";

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch top rated restaurants from the API
    axios.get('http://127.0.0.1:8000/api/topHosteleriaMejorValo')
      .then(response => {
        setRestaurants(response.data.negocios);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant data!', error);
      });
  }, []);

  const handleTitleClick = () => {
    navigate("/restaurantes");
  };
  
  return (
    <div className="container">
      <div className="label-container" onClick={handleTitleClick}>
        <h2>Restaurantes</h2>
      </div>
      <div className="card-slider" ref={restaurantContainerRef}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            
            imageSrc={restaurant.rutaImagen}
            discount={restaurant.descuento}
            name={restaurant.nombre}
            rating={restaurant.mediaPuntuacion}
            description="Short description"
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSection;