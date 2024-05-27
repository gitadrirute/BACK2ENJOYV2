import React from 'react';
import TablaUsuarios from './TablaUsuarios';
import TablaNegocios from './TablaNegocios';

const Tablas = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      <TablaUsuarios />
      <TablaNegocios />
    </div>
  );
};

export default Tablas;
