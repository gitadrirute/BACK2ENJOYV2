import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../assets/css/Rating.css';

function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

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
                            onClick={() => setRating(currentRating)} />
                        <FaStar 
                            className='star' 
                            size={25} 
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)} />
                    </label>
                );
            })}
            
        </div>
    );
}

export default Rating;