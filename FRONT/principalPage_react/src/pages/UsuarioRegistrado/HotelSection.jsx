import React, { useEffect, useRef } from "react";
// import "./RestaurantCard.css"; // Asegúrate de importar el CSS
import HotelCard from './HotelCard'
import { useNavigate } from "react-router-dom";

const HotelSection = () => {
  const hotelContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/hoteles");
  };
  
  return (
    <div onClick={handleTitleClick} className="container">
      <div className="label-container">
        <h2>Hoteles</h2>
      </div>
      <div className="card-slider" ref={hotelContainerRef}>
      <HotelCard
        imageSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be4h2xc9cqcugdjydotn"
        discount="20% de descuento"
        name="Indio Clasic"
        rating="(4.6)"
        deliveryTime="15-20 mins"
        description="Short description"
        country="India"
        />
        <HotelCard
        imageSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/egm3aym4fa73hst2tv9b"
        discount="10% de descuento"
        name="De dulces "
        rating="(4.6)"
        deliveryTime="15-20 mins"
        description="Short description"
        country="India"
        />
        <HotelCard
        imageSrc="./img/restaurante/casa.jpg"
        discount="24% de descuento"
        name="Casa LOLA"
        rating="(4.6)"
        deliveryTime="15-20 mins"
        description="Short description"
        country="India"
        />
      </div>
    </div>
  );
};

export default HotelSection;
