import React , { useState }  from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";

const NewsLetter = () => {

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
    
    // Estado para controlar el valor del captcha
    const [captchaValue, setCaptchaValue] = useState(null);

    //controla el mensaje de exito
    const [successMessage, setSuccessMessage] = useState(false);
    let successMsg ="Enviar"
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
        clearErrors();
        setCaptchaValue(null);
    };

  return (
    <>
    <section className="NewsLetter_section">
        <div className="NewsLetter_container" id="newsletter">
            <div className="NewsLetter_info">
                <h1>Suscribete a nuestra newsletter</h1>
                <p>Recibe actualizaciones sobre nuestras tiendas online y consejos de marketing digital para que tu tienda triunfe en el mercado digital.</p>
                {   
                //*  el error del correo
                    errors.email_newsletter
                    && <span className='formError'>{errors.email_newsletter.message}</span>
                }
                <form onSubmit={formSubmit} method="post" id="newsletter_form">
                    <input 
                        type="text" name="email_newsletter" 
                        placeholder="Correo: ejemplo@gmail.com" 
                        {...register("email_newsletter",{
                            required:{
                                value:true,
                                message:"Debes añadir un correo"
                            },
                            pattern:{
                                value: /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                                message:"Correo no valido"      
                            }
                        }
                    )}
                    />
                    
                    <br/><br/>
                    <input 
                        type="checkbox" name="newsletter_privacy" 
                        {...register("newsletter_privacy",{
                            required:{ 
                                value: true,
                                message: "Debes aceptar la política de privacidad"
                            }
                        }
                    )}
                    />
                    <label htmlFor="newsletter_privacy">Acepto la política de privacidad</label><br/>
                    {errors.newsletter_privacy && <span className='formError'>{errors.newsletter_privacy.message}</span>}
                    <p>
                        He leído y acepto las condiciones contenidas en la <a href="./legal/politicaPrivacidad.html">Política de Privacidad</a> sobre el 
                        tratamiento de mis datos para gestionar mi consulta o petición.
                    </p>
                    <div className="g-recaptcha">
                        <ReCAPTCHA
                            sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                            onChange={handleCaptchaChange}
                        />
                        {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}
                    </div>
                    {successMessage 
                        ? <input className="clickable_btn" id='submitNewsletter' onClick={handleRetry} name="newsletter_submit" value={successMsg}/>
                        : <input className="clickable_btn" id='submitNewsletter' name="newsletter_submit" type="submit" value="Enviar"/>}
                </form>
            </div>
        </div>
        <div className="NewsLetter_cards">
            <div className="NewsLetter_card">
                <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="o"/>
                <h3>Descuentos Exclusivos</h3>
                <p>Suscríbete a nuestra newsletter y recibe descuentos exclusivos en nuestros servicios y productos.</p>
            </div>
            <div className="NewsLetter_card">
                <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="o"/>
                <h3>Contenido Exclusivo</h3>
                <p>Obtén acceso prioritario a contenido exclusivo, como guías, consejos y recursos para mejorar tu presencia en línea.</p>
            </div>
            <div className="NewsLetter_card">
                <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="o"/>
                <h3>Actualizaciones y Novedades</h3>
                <p>Recibe las últimas actualizaciones y novedades sobre nuestros servicios, productos y proyectos directamente en tu bandeja de entrada.</p>
            </div>
            <div className="NewsLetter_card">
                <img src="./img/Logos Nimio/nimio_escudo-blanco.png" alt="o"/>
                <h3>Comunicación Directa</h3>
                <p>Mantente en contacto directo con nosotros y participa en encuestas, eventos y promociones exclusivas para suscriptores.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsLetter