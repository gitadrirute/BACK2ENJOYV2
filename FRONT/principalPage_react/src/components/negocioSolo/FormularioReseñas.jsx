import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Asegúrate de que la ruta es correcta
import Rating from './Rating';
import "../../assets/css/FormularioReseñas.css";

function FormularioReseñas() {
    const { negocioId } = useParams(); // Obtiene el ID del negocio de los parámetros de la URL
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');
    const { isLoggedIn } = useAuth(); // Obtener el estado de autenticación del contexto

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isLoggedIn) {
            console.error('Usuario no autenticado');
            return;
        }

        const token = localStorage.getItem('authToken'); // Obtener el token del localStorage

        try {
            const response = await fetch('http://127.0.0.1:8000/api/añadirValoracion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Añadir el token a la cabecera
                },
                body: JSON.stringify({ valoracion: rating, comentario: comment, negocio_id: negocioId }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la reseña');
            }

            console.log('Reseña enviada correctamente');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="formulario-container">
            <h2>Deja tu reseña:</h2>
            <form onSubmit={handleSubmit}>
                <div className="formulario-field">
                    <label>Tu valoración:</label>
                    <Rating value={rating} onChange={handleRatingChange} />
                </div>
                <div className="formulario-field">
                    <label>Tu comentario:</label>
                    <textarea value={comment} onChange={handleCommentChange} />
                </div>
                <div className="formulario-boton">
                    <button type="submit">Enviar reseña</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioReseñas;
