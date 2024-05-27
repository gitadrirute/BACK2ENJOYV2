import React , { useState }  from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';


const ContactUs = () => {
    //Validacion de formulario
    //*Uso la react-hook-form que tiene todo lo necesario par avalidar los formularios
    const {
        register,
        handleSubmit, 
        formState:{errors},
        setError,
        clearErrors,
        // setValue,
        //watch,//sirve para interactuar en tiempo real con el form
        reset
    } = useForm();

    // const formSubmit = handleSubmit(async (data) => {
    //     try {
    //         console.log(data);
    
    //         / Ejemplo de solicitud con `fetch`
    //         const response = await fetch('https://tu-backend.com/api/contacto', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data), // Convierte los datos a JSON
    //         });
    
    //         const result = await response.json(); // Recibe la respuesta del back-end
    //         console.log('Respuesta del back-end:', result);
    
    //         alert("Enviado con éxito");
    //         reset(); // Limpia el formulario después de enviar
    
    //     } catch (error) {
    //         console.error('Error al enviar los datos:', error);
    //     }
    // });

    // Estado para controlar el valor del captcha
    const [captchaValue, setCaptchaValue] = useState(null);

    //controla el mensaje de exito
    const [successMessage, setSuccessMessage] = useState(false);
    let successMsg =""
    if (successMessage) {
        successMsg = "¡¡Enviado con exito!!"
    }

    // Función para manejar el cambio de captcha
    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);

        // Si se completa el captcha, elimina el error relacionado
        if (value) {
            clearErrors('recaptcha');
        }
    };

    // controla el envio del formulario
    const formSubmit = handleSubmit((data) => {
        // Verificar si el captcha está seleccionado
        if (!captchaValue) {
            setError('recaptcha', { type: 'manual', message: 'Por favor, completa el captcha' });
            return; // No envía el formulario
        }
        
        alert("enviando...")
    
        // Enviar los datos si el captcha está seleccionado
        data.recaptchaToken = captchaValue; // Incluye el token del captcha en los datos

        // Enviar los datos del formulario al back-end
        console.log('Datos del formulario:', data);
        console.log('JSON:', JSON.stringify(data));
        /**
         * !AQUI ES DONDE SE ENVIA LA INFO DEL FORMULARIO al back
         * * La info se guarda en data
         */
        reset(); // Limpia el formulario después de enviar 
        setSuccessMessage(true)
        setCaptchaValue(null)
    });

    // Función para resetear el formulario y volver a su estado inicial
    const handleRetry = () => {
        setSuccessMessage(false);
        reset();
        setCaptchaValue(null);
    };

  return (
    <>
    <section className="contact" id="contact">
        <div className="contact_form">
        <h1><b>Contacto</b></h1>
            <form id="form_3" onSubmit={formSubmit} method="post">
            <div className="inputbox">
                <input 
                    type="text"
                    id="fullName__contact_form"
                    name="fullName__contact_form"
                    {...register("fullName", {
                        required: {
                            value: true,
                            message: "¡Nombre requerido!"
                        },
                        minLength: {
                            value: 2,
                            message: "Nombre debe tener mínimo 2 letras"
                        },
                        pattern: {
                            value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                            message: "¡El campo Nombre no puede tener números!"
                        }
                    })}
                />
                {
                    errors.fullName 
                    ? (<span className='formError'>{errors.fullName.message}</span>) 
                    : (<span>Nombre y apellidos</span>)
                }
            </div>

            {/* EMAIL */}
            <div className="inputbox">
                <input 
                    type="email" id="email__contact_form" 
                    name="email__contact_form" 
                    {...register("email",{
                        required: {
                            value:true,
                            message: "¡Correo requerido!"
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                            message:"Correo no valido"
                        }
                    }
                )}
                />
                {
                    //  el error del correo
                    errors.email 
                    ? <span className='formError'>{errors.email.message}</span>
                    : <span>Correo</span>
                }
            </div>
            {/* TELEFONO */}
            <div className="inputbox">
                <input 
                    type="tel" id="tel__contact_form" 
                    name="tel__contact_form"  
                    {...register("tel",{
                        required: {
                            value:true,
                            message: "¡Teléfono requerido!"
                        },
                        pattern: {
                            value:/(\+)*[0-9][ -]*([0-9][ -]*){7,15}/,
                            message: "¡Formato invalido para el numero de teléfono!"
                        }
                        }
                    )}
                />
                {
                    //  el error del correo
                    errors.tel 
                    ? <span className='formError'>{errors.tel.message}</span>
                    : <span>Teléfono</span>
                }
            </div>
            <div className="inputbox">
                <textarea id="dudas" 
                name="escribenos__contact_form"
                {...register("escribenos__contact_form",{
                    required: {
                        value:true,
                        message: "Debes escribir algo "
                        },
                        minLength: {
                            value: 3,
                            message: "Añade varias palabras "
                        }
                    }
                )}></textarea>
                {
                    //  el error del correo
                    errors.escribenos__contact_form 
                    ? <span className='formError'>{errors.escribenos__contact_form.message}</span>
                    : <span>Escribenos</span>
                }
            </div>
            <div className="checkbox_container">
                <label>
                    <input type="checkbox" 
                        name="spam__contact_form" 
                        id="spam__contact_form"
                        {...register("spam__contact_form")}/> 
                        Acepto recibir notificaciones de nuevos productos
                </label> <br/><br/>
                <label>
                    <input type="checkbox" name="terms__contact_form"
                        id="terms__contact_form" 
                        {...register("terms__contact_form",{
                            required: {
                                value:true,
                                message: "Debes aceptar los terminos de privacidad"
                            }
                        }
                    )} /> Acepto terminos de privacidad *
                    
                </label>
                <br/>
                {
                    //  el error del correo
                    errors.terms__contact_form ?<span className='formError'>{errors.terms__contact_form.message}</span> : <span/>
                }
                <p className="policy_text">
                He leído y acepto las condiciones contenidas en la <Link to="/politicaPrivacidad">Política de Privacidad</Link> sobre el 
                tratamiento de mis datos para gestionar mi consulta o petición.
                </p>
            </div><br/>
             {/* Captcha */}
            <div className="g-recaptcha">
                <ReCAPTCHA
                    sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                    onChange={handleCaptchaChange}
                />
                {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}
            </div>

            <div id="contactBtn" className="buttonBox">
                {successMessage ? <button className='clickable_btn' onClick={handleRetry}>{successMsg}</button> : <button className='clickable_btn' onClick={formSubmit}>Enviar</button>}
            </div>
            </form>
            <br/>
        </div>
    </section>
    </>
  )
}
export default ContactUs