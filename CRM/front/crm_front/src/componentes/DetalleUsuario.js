import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetalleUsuario = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [usuario, setUsuario] = useState(null); // Estado para guardar los datos del usuario
  const [error, setError] = useState(''); // Estado para manejar errores

  useEffect(() => {
    // Función para cargar los datos del usuario
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/detallesUsuario/${id}`); // Llamada a la API
        setUsuario(response.data.usuario); // Guardar los datos del usuario en el estado
      } catch (error) {
        setError('No se pudo cargar la información del usuario'); // Manejo de errores
        console.error('Error fetching data: ', error);
      }
    };

    fetchUsuario(); // Ejecutar la función al montar el componente
  }, [id]); // Dependencia del efecto para recargar cuando cambie el id

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>; // Mostrar error si existe
  }

  if (!usuario) {
    return <div className="text-center mt-5">Cargando...</div>; // Mensaje de carga mientras los datos no están disponibles
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detalles del Usuario</h1>
      <div className="card">
        <div className="card-header">
          <h3>{usuario.nombre} {usuario.apellidos}</h3>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>ID:</strong> {usuario.id}</li>
            <li className="list-group-item"><strong>UserName:</strong> {usuario.nombreUsuario}</li>
            <li className="list-group-item"><strong>Validado:</strong> {usuario.validado ? 'Sí' : 'No'}</li>
            <li className="list-group-item"><strong>DNI:</strong> {usuario.DNI}</li>
            <li className="list-group-item"><strong>Fecha de registro:</strong> {usuario.fechaRegistro}</li>
          </ul>
          {usuario.rutaImagen && (
            <div className="text-center mt-3">
              <h5>Foto de Perfil:</h5>
              <img src={`http://127.0.0.1:8000${usuario.rutaImagen}`} className="img-fluid rounded" alt="Foto de Perfil" style={{ maxWidth: '200px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleUsuario;
