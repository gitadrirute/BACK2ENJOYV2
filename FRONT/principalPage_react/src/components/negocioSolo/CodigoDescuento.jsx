import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../assets/css/GenerarCodigo.css'; // Importa el archivo CSS
import { useAuth } from '../AuthContext'; // Asegúrate de que la ruta es correcta
import { useNavigate } from 'react-router-dom';

const CodigoDescuento = () => {
  const { isLoggedIn } = useAuth(); // Utiliza el hook para obtener el estado de autenticación
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    const generarCodigo = () => {
      if (isLoggedIn) {
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let codigoAleatorio = '';

        // Generar las letras aleatorias
        for (let i = 0; i < 3; i++) {
          codigoAleatorio += letras.charAt(Math.floor(Math.random() * letras.length));
        }

        // Generar los números aleatorios
        for (let i = 0; i < 3; i++) {
          codigoAleatorio += Math.floor(Math.random() * 10);
        }

        $('#codigo').text(codigoAleatorio);
        $('#popup-registrado').css('display', 'flex');
      } else {
        $('#popup-no-registrado').css('display', 'flex');
      }
    };

    $('#btnCodigo').on('click', generarCodigo);
    $('#btnCerrarRegistrado').on('click', () => $('#popup-registrado').hide());
    $('#btnCerrarNoRegistrado').on('click', () => $('#popup-no-registrado').hide());
    $('#btnRegistrarse').on('click', () => {
      $('#popup-no-registrado').hide();
      navigate('/login'); // Redirigir a la página de registro
    });
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="contenedor_descuento">
        <div className="btnContainer">
          <button id="btnCodigo" className="btnCodigo">
            <div className="contenido_descuento">
              <img src="/img/restaurante/descuento1.png" alt="Descuento" className="imagen-descuento" />
              <div className="texto_descuento">
                <p className="info_descuento">
                  Obtén hasta un<br />
                  <span className="font-bold">20% de descuento</span>
                </p>
              </div>
            </div>
          </button>
        </div>

        <div id="popup-registrado" className="popup">
          <div className="popup-inner">
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu código de descuento es: <span id="codigo"></span></p>
            <button id="btnCerrarRegistrado" className="btnCerrar">Cerrar</button>
          </div>
        </div>

        <div id="popup-no-registrado" className="popup">
          <div className="popup-inner">
            <h2>Lo sentimos</h2>
            <p>Pero tienes que registrarte para obtener un código de descuento.</p>
            <button id="btnCerrarNoRegistrado" className="btnCerrar">Cerrar</button>
            <button id="btnRegistrarse" className="btnRegistrarse">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodigoDescuento;
