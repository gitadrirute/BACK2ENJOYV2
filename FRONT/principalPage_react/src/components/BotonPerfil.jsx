import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/BotonPerfil.css';


function Home() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/perfil');
  };

  return (
    <div>
      <button 
        onClick={goToProfile} 
        style={{ backgroundImage: `url(/img/Logos/perfiles.png)` }} 
        className="image-button">
      </button>
    </div>
  );
}

export default Home;
