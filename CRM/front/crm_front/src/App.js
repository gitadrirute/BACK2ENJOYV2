import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componentes/Login';
import Tablas from './componentes/Tablas';  // Importa el componente que combina las tablas
import DetalleUsuario from './componentes/DetalleUsuario';  // Importa el componente de detalles del usuario
import DetalleNegocio from './componentes/DetalleNegocio';  // Importa el componente de detalles del usuario
import './styles/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />  // Asegúrate de definir también la ruta para login
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/detallesUsuario/detalle/:id" element={<DetalleUsuario />} />  // Nueva ruta para detalles del usuario
        <Route path="/detallesNegocio/detalle/:id" element={<DetalleNegocio />} />  // Nueva ruta para detalles del negocio
      </Routes>
    </Router>
  );
}

export default App;
