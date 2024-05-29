import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Asegúrate de que la ruta es correcta
import Rating from './Rating';
import "../../assets/css/FormularioReseñas.css";

function FormularioReseñas() {
    const { negocioId } = useParams(); // Obtiene el ID del negocio de los parámetros de la URL
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});
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
            setMensaje('Usuario no autenticado');
            console.error('Usuario no autenticado');
            return;
        }

        const token = localStorage.getItem('authToken'); // Obtener el token del localStorage

        try {
            const response = await fetch('http://127.0.0.1:8000/api/añadirValoracion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}` // Añadir el token a la cabecera
                },
                body: JSON.stringify({ valoracion: rating, comentario: comment, negocio_id: negocioId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 422) {
                    setErrores(errorData.Errores);
                } else {
                    throw new Error('Error al enviar la reseña');
                }
            } else {
                const data = await response.json();
                setMensaje(data.mensaje);
                // Limpiar campos del formulario después de un envío exitoso
                setRating(null);
                setComment('');
                setErrores({});
            }

            console.log('Reseña enviada correctamente');
        } catch (error) {
            console.error('Error:', error);
            setMensaje('Error al enviar la reseña');
        }
    };

    return (
        <div className="formulario-container">
            <h2>Deja tu reseña:</h2>
            {mensaje && <p>{mensaje}</p>}
            <form onSubmit={handleSubmit}>
                <div className="formulario-field">
                    <label>Tu valoración:</label>
                    <Rating value={rating} onChange={handleRatingChange} />
                    {errores.valoracion && <p>{errores.valoracion[0]}</p>}
                </div>
                <div className="formulario-field">
                    <label>Tu comentario:</label>
                    <textarea value={comment} onChange={handleCommentChange} />
                    {errores.comentario && <p>{errores.comentario[0]}</p>}
                </div>
                <div className="formulario-boton">
                    <button type="submit">Enviar reseña</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioReseñas;