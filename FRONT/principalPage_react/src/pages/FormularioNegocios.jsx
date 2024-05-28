import React, { useState } from 'react';
import "../assets/css/FormularioNegocios.css";
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const FormularioNegocios = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Redirigir al login si no está autenticado
  if (!isLoggedIn) {
    navigate('/login');
  }

  const formSubmit = handleSubmit(async (data) => {
    try {
      const authToken = localStorage.getItem('authToken'); // Obtener el token de autenticación

      if (!authToken) {
        setError('Usuario no autenticado');
        return;
      }

      const formData = {
        ...data,
      };

      const response = await fetch('http://127.0.0.1:8000/api/registroNegocio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage(true);
        reset();
        navigate('/upload-photos');
      } else {
        const responseData = await response.json();
        const errorMessage = responseData.mensaje || 'Error al registrar el negocio';
        setError(errorMessage);
      }
    } catch (error) {
      setError('Error de conexión o en el proceso de registro');
    }
  });

  return (
    <>
      <section className="mainSection">
        <div className="formulario-container" id='start'>
          <form onSubmit={formSubmit}>
            <h1>Sube tu negocio</h1>
            <div className="input-box">
              <div className='errorBox'>
                {errors.nombre && <span className='formError'>{errors.nombre.message}</span>}
              </div>
              <input type="text" placeholder="Nombre" name="nombre"
                {...register("nombre", {
                  required: "El campo nombre es obligatorio",
                  maxLength: { value: 50, message: "El campo nombre no puede tener más de 50 caracteres" },
                  minLength: { value: 2, message: "El campo nombre no puede tener menos de 2 caracteres" },
                  pattern: { value: /^[a-zA-Z\s]+$/, message: "El campo nombre no puede contener caracteres especiales" }
                })} />
            </div>
            <div className="input-box">
              <div className='errorBox'>
                {errors.NIF && <span className='formError'>{errors.NIF.message}</span>}
              </div>
              <input type="text" placeholder="NIF" name="NIF"
                {...register("NIF", {
                  required: "El campo NIF es obligatorio",
                  maxLength: { value: 9, message: "El campo NIF no puede tener más de 9 caracteres" },
                  minLength: { value: 9, message: "El campo NIF debe tener 9 caracteres" },
                  pattern: { value: /^[0-9]{8}[A-Za-z]$/, message: "El campo NIF debe seguir el formato" }
                })} />
            </div>
            <div className="input-box">
              <div className='errorBox'>
                {errors.direccion && <span className='formError'>{errors.direccion.message}</span>}
              </div>
              <input type="text" placeholder="Dirección" name="direccion"
                {...register("direccion", {
                  required: "El campo dirección es obligatorio",
                  maxLength: { value: 150, message: "El campo dirección no puede tener más de 150 caracteres" },
                  minLength: { value: 2, message: "El campo dirección no puede tener menos de 2 caracteres" }
                })} />
            </div>
            <div className="input-box">
              <div className='errorBox'>
                {errors.telefono && <span className='formError'>{errors.telefono.message}</span>}
              </div>
              <input type="text" placeholder="Teléfono" name="telefono"
                {...register("telefono", {
                  required: "El campo teléfono es obligatorio",
                  maxLength: { value: 15, message: "El campo teléfono no puede tener más de 15 caracteres" },
                  minLength: { value: 9, message: "El campo teléfono no puede tener menos de 9 caracteres" },
                  pattern: { value: /^\d{9,15}$/, message: "El número de teléfono debe tener entre 9 y 15 dígitos" }
                })} />
            </div>
            <div className="input-box">
              <div className='errorBox'>
                {errors.sitioWeb && <span className='formError'>{errors.sitioWeb.message}</span>}
              </div>
              <input type="text" placeholder="Sitio Web" name="sitioWeb"
                {...register("sitioWeb", {
                  required: "El campo sitio Web es obligatorio",
                  maxLength: { value: 120, message: "El campo sitio Web no puede tener más de 120 caracteres" },
                  minLength: { value: 2, message: "El campo sitio Web no puede tener menos de 2 caracteres" },
                  pattern: { value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, message: "El campo sitio web debe contener una URL válida" }
                })} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Información" name="informacion"
                {...register("informacion", {
                  maxLength: { value: 250, message: "El campo información no puede tener más de 250 caracteres" },
                  minLength: { value: 2, message: "El campo información no puede tener menos de 2 caracteres" }
                })} />
            </div>
            <div className="input-box">
              <div className='errorBox'>
                {errors.ubicacion && <span className='formError'>{errors.ubicacion.message}</span>}
              </div>
              <select name="categoria_negocio_id" {...register("ubicacion", { required: "Seleccione una ubicacion" })}>
                <option value="">Selecciona una ubicacion</option>
                <option value="malaga">Málaga</option>
              </select>            
            </div>
            <br/>
            <div className="input-box">
              <div className='errorBox'>
                {errors.categoria_negocio_id && <span className='formError'>{errors.categoria_negocio_id.message}</span>}
              </div>
              <select name="categoria_negocio_id" {...register("categoria_negocio_id", { required: "Seleccione una categoría de negocio" })}>
                <option value="">Selecciona una categoría de negocio</option>
                <option value="1">Bar</option>
                <option value="2">Restaurante</option>
                <option value="3">Hotel</option>
              </select>
            </div> <br/>
            <button type="submit">Registrar Negocio</button>
            <p>{error}</p> {/* Mostrar el mensaje de error */}
            {successMessage && <span>¡¡Enviado con éxito!!</span>}
          </form>
        </div>
      </section>
    </>
  );
};

export default FormularioNegocios;
