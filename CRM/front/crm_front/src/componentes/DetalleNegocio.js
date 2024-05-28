import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetalleNegocio = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [negocio, setNegocio] = useState(null); // Estado para guardar los datos del negocio
  const [error, setError] = useState(''); // Estado para manejar errores

  useEffect(() => {
    // Función para cargar los datos del negocio
    const fetchNegocio = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/detallesNegocio/${id}`); // Llamada a la API
        setNegocio(response.data.negocio); // Guardar los datos del negocio en el estado
      } catch (error) {
        setError('No se pudo cargar la información del negocio'); // Manejo de errores
        console.error('Error fetching data: ', error);
      }
    };

    fetchNegocio(); // Ejecutar la función al montar el componente
  }, [id]); // Dependencia del efecto para recargar cuando cambie el id

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>; // Mostrar error si existe
  }

  if (!negocio) {
    return <div className="text-center mt-5">Cargando...</div>; // Mensaje de carga mientras los datos no están disponibles
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detalles del Negocio</h1>
      <div className="card">
        <div className="card-header">
          <h3>{negocio.nombre}</h3>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>ID:</strong> {negocio.id}</li>
            <li className="list-group-item"><strong>Validado:</strong> {negocio.validado ? 'Sí' : 'No'}</li>
            <li className="list-group-item"><strong>NIF:</strong> {negocio.NIF}</li>
            <li className="list-group-item"><strong>Dirección:</strong> {negocio.direccion}</li>
            <li className="list-group-item"><strong>Teléfono:</strong> {negocio.telefono}</li>
            <li className="list-group-item"><strong>Sitio Web:</strong> <a href={negocio.sitioWeb} target="_blank" rel="noopener noreferrer">{negocio.sitioWeb}</a></li>
            <li className="list-group-item"><strong>Creado por:</strong> {negocio.propietario}</li>
            <li className="list-group-item"><strong>Categoría:</strong> {negocio.categoria}</li>
            <li className="list-group-item"><strong>Fecha de registro:</strong> {negocio.fechaRegistro}</li>
          </ul>
          {negocio.imagenes && negocio.imagenes.length > 0 && (
            <div className="text-center mt-3">
              <h5>Imágenes subidas:</h5>
              <div className="row">
                {negocio.imagenes.map((imagen, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <img src={`http://127.0.0.1:8000/storage/${imagen}`} className="img-fluid rounded" alt={`Foto negocio ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleNegocio;
