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
      <button onClick={goToProfile} className=" image-button-icon"> 
  <i className="bi bi-person-circle"></i> 
  </button>
    </div>
  );
}

export default Home;