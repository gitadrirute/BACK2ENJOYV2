import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import HotelCard from './HotelCard';
import { useNavigate } from "react-router-dom";

const HotelSection = () => {
  const [hotels, setHotels] = useState([]);
  const hotelContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch top rated hotels from the API
    axios.get('http://127.0.0.1:8000/api/topHotelesMejorValo')
      .then(response => {
        setHotels(response.data.negocios);
      })
      .catch(error => {
        console.error('There was an error fetching the hotel data!', error);
      });
  }, []);

  const handleTitleClick = () => {
    navigate("/hoteles");
  };
  
  return (
    <div className="container">
      <div className="label-container" onClick={handleTitleClick}>
        <h2>Hoteles</h2>
      </div>
      <div className="card-slider" ref={hotelContainerRef}>
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            imageSrc={hotel.rutaImagen}
            discount={hotel.descuento}
            name={hotel.nombre}
            rating={hotel.mediaPuntuacion}
            
          />
        ))}
      </div>
    </div>
  );
};

export default HotelSection