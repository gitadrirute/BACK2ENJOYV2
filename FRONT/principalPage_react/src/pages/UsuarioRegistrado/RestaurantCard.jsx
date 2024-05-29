import React from 'react';
import { useNavigate } from "react-router-dom";

// Se añaden como parámetros los datos de la carta, incluido el ID del negocio
const RestaurantCard = ({ id, imageSrc, discount, name, rating }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/cardNegocio/${id}`); // Redirigir a la URL con el ID del negocio
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
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
