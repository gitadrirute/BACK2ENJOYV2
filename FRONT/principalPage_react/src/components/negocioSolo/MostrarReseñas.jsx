import React, { useState, useEffect } from 'react';

function FormularioReseñas({ negocioId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET para obtener los comentarios
        fetch(`http://127.0.0.1:8000/api/valoracionesNegocio/${id}`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [negocioId]); // Ejecutar solo una vez al montar el componente

    return (
        <div>
            <h2>Comentarios</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <p>Autor: {comment.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormularioReseñas;

