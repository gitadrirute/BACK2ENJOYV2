import React, { useState } from 'react';
import '../assets/css/App.css';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

const CallUs = () => {
    const FormStyle ={
        display:'block'
    }

    // Estado para controlar la visibilidad del formulario emergente
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Estado para controlar el valor del captcha
    const [captchaValue, setCaptchaValue] = useState(null);

    // Estado para controlar el mensaje de éxito
    const [successMessage, setSuccessMessage] = useState(false);

    // Función para manejar el clic en el botón y mostrar el popup
    const handleShowFormClick = () => {
        setPopupVisible(true);
    };

    // Función para manejar el cierre del popup y btn enviar
    const handleClosePopup = () => {
        setPopupVisible(false);
        setSuccessMessage(false)
        clearErrors();

    };

    //Validacion de formulario
    //*Uso la react-hook-form que tiene todo lo necesario par avalidar los formularios
    const {
        register,
        handleSubmit,
        formState:{errors},
        setError,
        clearErrors,
        //watch,//sirve para interactuar en tiempo real con el form
        //setValue,
        reset
    } = useForm();

    //controla el mensaje de exito
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

    //controla el envio del formulario
    const formSubmit = handleSubmit(async(data) => {//muestra la info del formulario
        if (!captchaValue) {
            setError('recaptcha', { type: 'manual', message: 'Por favor, completa el captcha' });
            return; // No envía el formulario
        }
        
        // Agregar el token del captcha a los datos
        data.recaptchaToken = captchaValue;
        console.log(data);

        alert("enviando...")
        try {
            // Realizar la solicitud POST al backend
            const response = await fetch('http://localhost/api/call-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Convierte los datos a JSON
            });

            // Manejar la respuesta del backend
            const result = await response.json();
            console.log('Respuesta del backend:', result);

            // Mostrar mensaje de éxito si la respuesta es exitosa
            if (response.ok) {
                alert("Enviado con éxito");
                setSuccessMessage(true);
                reset(); // Limpia el formulario después de enviar
            } else {
                // Manejar errores del backend
                alert("No se ha enviado ");
                console.error('Error al enviar los datos:', result);
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
        
        reset();//Limpia el formulario
    })
    return (
        <>
            <div className="call_us_container" id="call_us">
                <div className="call_us">
                    <h2>¿Quieres que te llamemos para informarte mejor?</h2>
                    <div id="showFormBtn_1" className="buttonBox">
                        {/* Botón para mostrar el popup */}
                        <button onClick={handleShowFormClick}>¡Quiero que me llamen!</button>
                    </div>
                </div>
            </div>

            {/* Solo muestra el popup si isPopupVisible es true */}
            {isPopupVisible && (
                <>
                    {/* Agrega un overlay */}
                    <div style={FormStyle}  id="overlay" onClick={handleClosePopup}></div>
                    
                    <div style={FormStyle} id="form__Popup_1" className="popup">
                        <section className="call_us__form">
                            <h2>Llámamos para obtener más información</h2>
                            <hr /><br />
                            <form id="form_1" className="forms" onSubmit={formSubmit} method="post">
                                {
                                    //  el error del nombre
                                    errors.fullName && <span className='formError'>{errors.fullName.message}</span>
                                }
                                <input 
                                    className="input__form" type="text" 
                                    id="name__call_us_form" name="name__call_us_form" 
                                    placeholder="NOMBRE Y APELLIDOS *" 
                                    {...register("fullName",{
                                        required: {
                                            value: true,
                                            message: "Nombre requerido"
                                        },
                                        minLength:{
                                            value: 2,
                                            message: " Nombre debe tener mínimo 2 letras "
                                        }
                                        }
                                    )}
                                />
                                {
                                    //  el error del telefono
                                    errors.tel && <span className='formError'>{errors.tel.message}</span>
                                }
                                <input 
                                    className="input__form" type="tel" 
                                    id="tel__call_us_form" name="tel__call_us_form" 
                                    placeholder="TELÉFONO *"  
                                    {...register("tel",{
                                        required: {
                                            value: true,
                                            message: "Telefono requerido"
                                        },
                                        pattern: {
                                            value:/(\+)*[0-9][ -]*([0-9][ -]*){7,15}/,
                                            message: "¡Formato invalido para el numero de telefono!"
                                        }
                                        }
                                    )}
                                />
    
                                <label>
                                    <input 
                                        type="checkbox" name="spam__call_us_form" 
                                        id="spam__call_us_form" 
                                        {...register("spam__call_us_form")}
                                    /> 
                                    Acepto recibir notificaciones de nuevos productos
                                </label>
                                <label>
                                    <input 
                                        type="checkbox" name="terms__call_us_form" 
                                        id="terms__call_us_form" 
                                        {...register("terms__call_us_form",{
                                            required:{
                                                value: true,
                                                message: "Debes aceptar los terminos de privacidad para continuar"
                                            }
                                            }
                                        )}
                                        /> 
                                        Acepto terminos de privacidad *
                                        <br/>
                                        {
                                        //  el error de terms
                                        errors.terms__call_us_form && <span className='formError'>{errors.terms__call_us_form.message}</span>
                                        }
                                </label>
                                <br />
                                <p className="policy_text">
                                    He leído y acepto las condiciones contenidas en la <Link to="/politicaPrivacidad">Política de Privacidad</Link> sobre el tratamiento de mis datos para gestionar mi consulta o petición.
                                </p>
                                <div className="g-recaptcha" id="call_us_captcha">
                                    <ReCAPTCHA
                                        sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                                        onChange={handleCaptchaChange}
                                    />
                                    {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}

                                </div> 
                                 {successMessage 
                                 ?<button id="submitBtn__call_us_form" className="input__form" name="submitBtn__call_us_form" type="submit">{successMsg}</button>
                                 :<button id="submitBtn__call_us_form" className="input__form" name="submitBtn__call_us_form" type="submit">Enviar</button>}
                            </form>
                        </section>
                    </div>
                </>
            )}
        </>
    );
};

export default CallUs;