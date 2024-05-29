import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../assets/css/Rating.css';

function Rating({ value, onChange }) {
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        setRating(value);
    }, [value]);

    const handleClick = (currentRating) => {
        setRating(currentRating);
        onChange(currentRating);
    };

    return (
        <div className='App'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={currentRating} 
                            onClick={() => handleClick(currentRating)}
                            style={{ display: 'none' }} 
                        />
                        <FaStar 
                            className='star' 
                            size={25} 
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)} 
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default Rating;
