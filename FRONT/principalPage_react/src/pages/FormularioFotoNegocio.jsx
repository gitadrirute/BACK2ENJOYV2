import React, { useState, useRef } from 'react';
import "../assets/css/FormularioNegocios.css";
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const FormularioFotosNegocio = () => {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const [previewImages, setPreviewImages] = useState([]);
  const [error, setError] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Redirigir al login si no está autenticado
  if (!isLoggedIn) {
    navigate('/login');
  }

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setValue('imagenes', files);
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
    fileInputRef.current.value = ''; // Forzar actualización del input
  };

  const formSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      data.imagenes.forEach((file, index) => {
        formData.append('rutaImagen', file);
      });

      const response = await fetch('http://127.0.0.1:8000/api/subirFotoNegocio', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: formData
      });

      if (response.ok) {
        alert("Fotos subidas con éxito");
        reset();
        setPreviewImages([]);
        navigate('/');
      } else {
        const responseData = await response.json();
        setError(responseData.mensaje || 'Error al subir las fotos');
      }
    } catch (error) {
      setError('Error de conexión o en el proceso de subida');
    }
  });

  return (
    <>
      <section className="mainSection">
        <div className="formulario-container" id='start'>
          <form onSubmit={formSubmit}>
            <h1>Sube las fotos de tu negocio</h1>
            <div className='addImg'>
              <div className='errorBox'>
                {errors.imagen && <span className='formError'>{errors.imagen.message}</span>}
              </div>
              <input
                type="file"
                placeholder="Añade imágenes"
                accept="image/*"
                multiple
                {...register("imagenes", { required: "Debe añadir al menos una imagen" })}
                onChange={handleImagesChange}
                ref={fileInputRef}
              />
            </div>
            {errors.imagenes && <span className='formError'>{errors.imagenes.message}</span>}
            {previewImages.length > 0 && (
              <div className="images-preview">
                {previewImages.map((image, index) => (
                  <img key={index} src={image} alt={`Previsualización ${index}`} style={{ maxWidth: '100%', maxHeight: '200px', margin: '5px' }} />
                ))}
              </div>
            )}
            <button type="submit">Subir Fotos</button>
            <button type="button" onClick={() => navigate('/pasarela')}>Volver a Inicio</button>
            <p>{error}</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormularioFotosNegocio;
