import React from 'react'
import { Link } from 'react-router-dom';

const CartaPrecio = ({ title, price, description, features, btnInfo, rutaDestino }) => {

  return (
    <div className="card_price">
        <div className="header_price">
        <span className="title_price">{title}</span>
        <span className="price">{price}</span>
        </div>
        <p className="desc_price">{description}</p>
        <ul className="lists_price">
        {features.map((feature, index) => (
            <li key={index} className="list_price">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{feature}</span>
            </li>
        ))}
        </ul>
        <Link to={rutaDestino} className="action_price">
            {btnInfo}
        </Link>
    </div>
    );
}

export default CartaPrecio