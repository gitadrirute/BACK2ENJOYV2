import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GoUpBtn from './components/GoUpBtn';
import { NavMenu } from './components/NavMenu';
import AvisoLegal from './pages/AvisoLegal';
import Home from './pages/Home';
import PoliticaCookies from './pages/PoliticaCookies';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Footer from './components/Footer';
import FormularioNegocios from './pages/FormularioNegocios';
import LoginRegister from './pages/LoginRegister';
import { AuthProvider, useAuth } from './components/AuthContext';
import HomeLoged from './pages/HomeLoged';
import SeccionRestaurante from './pages/SeccionRestaurante';
import CasaLola from './components/restaurante/CasalLola';
import CodigoDescuento from './components/negocioSolo/CodigoDescuento';
import './assets/css/GenerarCodigo.css';
import PasarelaPago from './pages/PasarelaPago';
import FormularioFotosNegocio from './pages/FormularioFotoNegocio';
import SeccionHotel from './pages/SeccionHotel';
import UserProfile from './components/Perfil';
import FormularioReseñas from './components/negocioSolo/FormularioReseñas';
import CardNegocio from './components/negocioSolo/CardNegocio';
import PasarelaNegocio from './pages/pasarelaPagoNegocio';

function App() {
  const HomeOrDashboard = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <HomeLoged /> : <Home />;
  };

  return (
    <AuthProvider>
      <div className="App">
        <NavMenu />
        <GoUpBtn />
        <Routes>
          <Route path="/" element={<HomeOrDashboard />} />
          <Route path="/avisoLegal" element={<AvisoLegal />} />
          <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politicaCookies" element={<PoliticaCookies />} />
          <Route path="/negocio" element={<FormularioNegocios />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/restaurantes" element={<SeccionRestaurante />} />
          <Route path="/cardNegocio/:id" element={<CardNegocio />} />
          <Route path="/hoteles" element={<SeccionHotel />} />
          <Route path="/generador-codigo" element={<CodigoDescuento />} />
          <Route path="/Card/:id" element={<CasaLola />} />
          <Route path="/pasarela" element={<PasarelaPago />} />
          <Route path="/pasarelaNegocio" element={<PasarelaNegocio/>} />
          <Route path="/subirFotos" element={<FormularioFotosNegocio />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/reseñas/:negocioId" element={<FormularioReseñas />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
