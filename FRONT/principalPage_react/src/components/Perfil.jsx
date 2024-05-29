import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/css/Perfil.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importa el contexto de autenticación

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Extrae la función logout desde useAuth

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/perfilUsuario', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });

        console.log('Response data:', response.data); // Log de depuración
        const datosUsuario = response.data['datos del usuario']; // Acceso corregido
        console.log('Datos del usuario:', datosUsuario); // Log de depuración

        if (datosUsuario) {
          setUserData(datosUsuario);
        } else {
          setUserData({});
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    logout(); // Llama a la función de cierre de sesión
    navigate('/login'); // Redirige al login
  };

  const subirFotos = () =>{
    navigate("/subirFotos")
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Verificar si userData tiene claves esperadas
  const hasUserData = userData && (userData.nombre || userData.apellidos || userData.nombreUsuario || userData.correo || userData.negocio);

  if (!hasUserData) {
    return <p>No se encontraron datos del usuario.</p>;
  }

  return (
    <>
    <div class="fondoPerfil">
      <div className="container33">
        <div id="logoBox" className="logoBox">
          <img src="./img/Logos/defaultPerfil.jpg" alt='defaultfoto' />
        </div>
        <div className="profile">
          <h1 className='h11'>INFORMACIÓN PERSONAL</h1>
          <h2 className='h22'>Nombre</h2>
          <p>{userData.nombre || 'N/A'}</p>
          <h2 className='h22'>Apellidos</h2>
          <p>{userData.apellidos || 'N/A'}</p>
          <h2 className='h22'>Nombre Usuario</h2>
          <p>{userData.nombreUsuario || 'N/A'}</p>
          <h2 className='h22'>Correo</h2>
          <p>{userData.correo || 'N/A'}</p>
          {userData.negocio && (
            <>
              <h2 className='h22'>Negocio</h2>
              <p>{userData.negocio}</p>
            </>
          )}
          {/* Botón de Cerrar Sesión */}
          
        </div>
      <div className='btnGroup'>
        <button onClick={handleLogout} className="clickable_btn">Cerrar Sesión</button>
        <button onClick={subirFotos} className="clickable_btn">Subir foto</button>
      </div>
    </div>
</div>
    </>
  );
}

export default UserProfile;