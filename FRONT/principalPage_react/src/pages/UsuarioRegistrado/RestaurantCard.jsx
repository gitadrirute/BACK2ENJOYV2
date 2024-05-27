import React from 'react';
// import './RestaurantCard.css';
import { useNavigate } from "react-router-dom";

//Se añaden como parametros los datos de la carta
const RestaurantCard = ({ imageSrc, discount, name, rating, deliveryTime, description }) => {
    const navigate = useNavigate();

    //por lo que se ve redirige al mismo sitio, pero hay que verlo cuando hayan mas
    const handleCardClick = () => {
        navigate("/Card");
      };
    return (
    <div onClick={handleCardClick} className="restaurant-card">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
        <div className="discount-badge">{discount}</div>
      </div>
      <h3 className="restaurant-name">{name}</h3>
      <div className="info-container">
        <div className="info-row">
          <div className="rating">
            <span className="rating-star"><i className="bi bi-star-fill star"></i></span>
            <span className="review-count">{rating}</span>
          </div>
          <div className="delivery-info">
            <i className="bi bi-dot"></i> {deliveryTime}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
