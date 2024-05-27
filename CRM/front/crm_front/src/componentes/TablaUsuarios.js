import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate desde react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de tener Bootstrap Icons instalados

const TablaUsuarios = () => {
  const navigate = useNavigate();  // Inicializa el hook useNavigate
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarNoValidados, setMostrarNoValidados] = useState(false);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        let url = "http://localhost:8000/api/usuariosTotales";
        if (mostrarNoValidados) {
          url = "http://127.0.0.1:8000/api/UsuariosNoValidConOsinFotos";
        }
        const response = await axios.get(url);
        setUsuarios(response.data.usuario || []); 
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, [mostrarNoValidados]);

  /* Busqueda de usuarios */
  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  /* Boton para cambiar a no validados */
  const toggleMostrarNoValidados = () => {
    setMostrarNoValidados(!mostrarNoValidados);
  };

  /* Eliminar usuario */
  const eliminarUsuario = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/usuarios/${id}`);
      if (response.status === 200) {
        // Eliminación exitosa, actualiza la lista de usuarios
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        console.log('Usuario eliminado exitosamente');
      } else {
        throw new Error('No se pudo eliminar el usuario');
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  /* Validar usuario */
  const validarUsuario = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/validarUsuario/${id}`);
      if (response.status === 200) {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        console.log('Usuario validado exitosamente');
      } else {
        throw new Error('No se pudo validar el usuario');
      }
    } catch (error) {
      console.error('Error al validar usuario:', error);
    }
  };

  /* Ver detalles usuario */
  const verDetalles = (id) => {
    navigate(`/detallesUsuario/detalle/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Validación de Usuarios</h1>
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
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Nombre Usuario</th>
            <th>DNI</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Validado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.DNI}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.contraseña}</td>
              <td>{usuario.validado}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2" onClick={() => eliminarUsuario(usuario.id)}>
                  <i className="bi bi-trash"></i> Eliminar
                </button>
                <button className="btn btn-success btn-sm me-2" onClick={() => validarUsuario(usuario.id)}>
                  <i className="bi bi-check-circle"></i> Validar
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => verDetalles(usuario.id)}>
                  <i className="bi bi-eye"></i> Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;
