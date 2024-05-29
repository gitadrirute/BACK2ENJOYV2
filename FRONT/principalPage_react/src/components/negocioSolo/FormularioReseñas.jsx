import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext'; // Asegúrate de que la ruta es correcta
import Rating from './Rating';
import "../../assets/css/FormularioReseñas.css";

function FormularioReseñas({ negocioId }) {
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});
    const { isLoggedIn } = useAuth(); // Obtener el estado de autenticación del contexto
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET para obtener los comentarios
        fetch(`http://127.0.0.1:8000/api/valoracionesNegocio/${negocioId}`)
            .then(response => response.json())
            .then(data => setComments(data["valoraciones de usuarios"]))
            .catch(error => console.error('Error fetching comments:', error));
    }, [negocioId]);

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

        const token = localStorage.getItem('authToken');
        console.log('Token:', token);

        const requestData = {
            valoracion: rating,
            comentario: comment,
            negocio_id: negocioId
        };

        console.log('Datos enviados:', requestData);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/anadirValoracion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    'Authorization': `Bearer ${token}` // Añadir el token a la cabecera
                },
                body: JSON.stringify(requestData),
            });

            console.log('Response status:', response.status);
            const responseData = await response.json();
            console.log('Response data:', responseData);

            if (!response.ok) {
                if (response.status === 422) {
                    console.log('Validation errors:', responseData.Errores);
                    setErrores(responseData.Errores);
                } else {
                    throw new Error('Error al enviar la reseña');
                }
            } else {
                setMensaje(responseData.mensaje);
                setRating(null);
                setComment('');
                setErrores({});

                // Verifica si `responseData.valoracion.usuario` está definido antes de acceder a `nombre`
                if (responseData.valoracion && responseData.valoracion.usuario) {
                    // Actualizar la lista de comentarios después de enviar una nueva reseña
                    setComments(prevComments => [
                        ...prevComments,
                        {
                            nombreUsuario: responseData.valoracion.usuario.nombre,
                            puntuacion: responseData.valoracion.valoracion,
                            comentario: responseData.valoracion.comentario,
                            fechaCreacion: new Date().toISOString()
                        }
                    ]);
                } else {
                    console.error('Error: Usuario no definido en la respuesta');
                }
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
                    <textarea 
                        value={comment} 
                        onChange={handleCommentChange} 
                        placeholder="Escriba aquí su reseña" 
                        className="texto_comment"
                    />
                    {errores.comentario && <p>{errores.comentario[0]}</p>}
                </div>
                <div className="formulario-boton">
                    <button type="submit">Enviar reseña</button>
                </div>
            </form>
            
            <div className="comentarios-container">
                <h2>Comentarios</h2>
                <ul className="comentarios-lista">
                    {comments.map((comment, index) => (
                        <li key={index} className="comentario">
                            <div className="comentario-header">
                                <span className="nombre-usuario">{comment.nombreUsuario}</span>
                                <span className="fecha-creacion">{comment.fechaCreacion ? new Date(comment.fechaCreacion).toLocaleDateString() : "Fecha desconocida"}</span>
                            </div>
                            <div className="comentario-rating">
                                {[...Array(5)].map((star, i) => (
                                    <span key={i} className={`star ${i < comment.puntuacion ? 'filled' : ''}`}>★</span>
                                ))}
                            </div>
                            <p className="comentario-texto">{comment.comentario}</p>
                            <hr className="comentario-separador" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FormularioReseñas;
