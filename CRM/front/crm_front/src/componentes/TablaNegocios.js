import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de tener Bootstrap Icons instalados

const TablaNegocios = () => {
  const navigate = useNavigate();
  const [negocios, setNegocios] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarNoValidados, setMostrarNoValidados] = useState(false);

  useEffect(() => {
    const obtenerNegocios = async () => {
      try {
        let url = "http://127.0.0.1:8000/api/TodosNegociosConOSinFotos";
        if (mostrarNoValidados) {
          url = "http://127.0.0.1:8000/api/NegociosNoValidConOSinFotos";
        }
        const response = await axios.get(url);
        setNegocios(response.data.negocios || []); 
      } catch (error) {
        console.error('Error al obtener los datos de los negocios:', error);
      }
    };

    obtenerNegocios();
  }, [mostrarNoValidados]);

  /* Busqueda de negocios */
  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const negociosFiltrados = negocios.filter(negocio =>
    negocio.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  /* Boton para cambiar a no validados */
  const toggleMostrarNoValidados = () => {
    setMostrarNoValidados(!mostrarNoValidados);
  };

  const eliminarNegocio = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/negocios/${id}`);
      if (response.status === 200) {
        // Eliminación exitosa, actualiza la lista de negocios
        setNegocios(negocios.filter(negocio => negocio.id !== id));
        console.log('Negocio eliminado exitosamente');
      } else {
        throw new Error('No se pudo eliminar el negocio');
      }
    } catch (error) {
      console.error('Error al eliminar negocio:', error);
    }
  };

  const validarNegocio = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/validarNegocio/${id}`);
      if (response.status === 200) {
        setNegocios(negocios.filter(negocio => negocio.id !== id));
        console.log('Negocio validado exitosamente');
      } else {
        throw new Error('No se pudo validar el negocio');
      }
    } catch (error) {
      console.error('Error al validar negocio:', error);
    }
  };

  const verDetalles = (id) => {
    navigate(`/detallesNegocio/detalle/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Validación de Negocios</h1>
      <div className="d-flex justify-content-between mb-3">
        <button onClick={toggleMostrarNoValidados} className="btn btn-info">
          {mostrarNoValidados ? 'Mostrar Todos' : 'Mostrar No Validados'}
        </button>
        <input 
          type="text" 
          placeholder="Buscar por nombre..." 
          value={busqueda} 
          onChange={handleSearchChange} 
          className="form-control w-50"
        />
      </div>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>NIF</th>
            <th>Dirección</th>
            <th>Creado por</th>
            <th>Validado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {negociosFiltrados.map(negocio => {
            if (!negocio.id) {
              console.warn("Negocio sin ID:", negocio);
              return null; // No renderizar este elemento si no tiene ID
            }
            return (
              <tr key={negocio.id}>
                <td>{negocio.nombre}</td>
                <td>{negocio.NIF}</td>
                <td>{negocio.direccion}</td>
                <td>{negocio.propietario}</td>
                <td>{negocio.validado}</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => eliminarNegocio(negocio.id)}>
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                  <button className="btn btn-success btn-sm me-2" onClick={() => validarNegocio(negocio.id)}>
                    <i className="bi bi-check-circle"></i> Validar
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={() => verDetalles(negocio.id)}>
                    <i className="bi bi-eye"></i> Ver
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablaNegocios;
