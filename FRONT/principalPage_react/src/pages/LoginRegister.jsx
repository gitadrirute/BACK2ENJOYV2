import React, { useState } from "react";
import "../assets/css/LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginRegister = (props) => {
  const [action, setAction] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, set_Error] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      clearErrors('recaptcha');
    }
  };

  let successMsg = "";
  if (successMessage) {
    successMsg = "¡¡Enviado con éxito!!";
  }

  const toggleAction = () => {
    setAction(isRegistering ? "" : " active");
    setIsRegistering(!isRegistering);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    watch
  } = useForm();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombreUsuario: username, contraseña: password })
        });

        const data = await response.json();
        console.log('Response data:', data); // Verificar la respuesta del servidor

        if (response.ok) {
            console.log('Token:', data['token de acceso']); // Verificar el token recibido
            login(data['token de acceso']);  // Guardar el token en el contexto de autenticación
            navigate("/");
        } else {
            set_Error(data.mensaje || 'Credenciales inválidas');
        }
    } catch (error) {
        set_Error('Error al iniciar sesión');
    }
  };

  const handleRegister = handleSubmit(async (data) => {
    if (!captchaValue) {
      setError('recaptcha', { type: 'manual', message: 'Por favor, completa el captcha' });
      return;
    }
    alert("enviando...");
    data.recaptchaToken = captchaValue;
    try {
      const response = await fetch('http://127.0.0.1:8000/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        setSuccessMessage(true);
        reset();
        console.log('Token:', responseData['token de acceso']); // Verificar el token recibido
        login(responseData['token de acceso']);  // Guardar el token en el contexto de autenticación
        navigate("/pasarela");
      } else {
        const serverErrors = responseData.error;
        Object.keys(serverErrors).forEach((field) => {
          setError(field, { type: 'server', message: serverErrors[field][0] });
        });
      }
    } catch (error) {
      setError('form', { type: 'manual', message: 'Error de conexión o en el proceso de registro' });
    }
  });

  return (
    <>
      <section className="mainSection">
        <div className={`wrapper${action}`}>
          <div className="form-box login">
            <form onSubmit={handleLogin} style={{ display: isRegistering ? "none" : "block" }}>
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Usuario" required name="username" />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Contraseña" required name="password" />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Recuérdame
                </label>
                <a href="/">¿Olvidaste la contraseña?</a>
              </div>
              <button type="submit">Login</button>
              <p>{error}</p>
              <div className="register-link">
                <p>
                  ¿No tienes cuenta?{" "}
                  <a href="#" onClick={toggleAction}>
                    Regístrate
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-box register">
            <form onSubmit={handleRegister} className={isRegistering ? "register-form" : ""} style={{ display: isRegistering ? "block" : "none" }}>
              <h1>Registrarse</h1>
              <div className="input-box">
                {errors.nombre && <span className='formError'>{errors.nombre.message}</span>}
                <input type="text" placeholder="Nombre"
                  name="nombre"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "El campo nombre es obligatorio"
                    },
                    maxLength: {
                      value: 30,
                      message: "El campo nombre no puede tener más de 30 caracteres"
                    },
                    minLength: {
                      value: 2,
                      message: "El campo nombre no puede tener menos de 2 caracteres"
                    },
                    pattern: {
                      value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                      message: "El campo nombre no puede contener caracteres especiales"
                    }
                  })
                  } />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.apellidos && <span className='formError'>{errors.apellidos.message}</span>}
                <input type="text" placeholder="Apellidos" name="apellidos"
                  {...register("apellidos", {
                    required: {
                      value: true,
                      message: "El campo apellidos es obligatorio"
                    },
                    maxLength: {
                      value: 40,
                      message: "El campo apellidos no puede tener más de 40 caracteres"
                    },
                    minLength: {
                      value: 2,
                      message: "El campo apellidos no puede tener menos de 2 caracteres"
                    },
                    pattern: {
                      value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                      message: "El campo apellidos no puede contener caracteres especiales"
                    }
                  })
                  } />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.nombreUsuario && <span className='formError'>{errors.nombreUsuario.message}</span>}
                <input type="text" placeholder="Usuario"
                  name="nombreUsuario"
                  {...register("nombreUsuario", {
                    required: {
                      value: true,
                      message: "El campo nombre de usuario es obligatorio"
                    },
                    maxLength: {
                      value: 13,
                      message: "El campo nombre de usuario no puede tener más de 13 caracteres"
                    },
                    minLength: {
                      value: 5,
                      message: "El campo nombre de usuario no puede tener menos de 5 caracteres"
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "El campo nombre de usuario no puede contener caracteres especiales"
                    }
                  })
                  } />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.DNI && <span className='formError'>{errors.DNI.message}</span>}
                <input type="text" placeholder="DNI"
                  name="DNI"
                  {...register("DNI", {
                    required: {
                      value: true,
                      message: "El campo DNI es obligatorio"
                    },
                    maxLength: {
                      value: 9,
                      message: 'El DNI debe tener 9 caracteres'
                    },
                    pattern: {
                      value: /^[0-9]{8}[A-Z]$/,
                      message: "El DNI debe tener el formato correcto"
                    }
                  })
                  } />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                {errors.correo && <span className='formError'>{errors.correo.message}</span>}
                <input type="email" placeholder="Email" name="correo"
                  {...register("correo", {
                    required: {
                      value: true,
                      message: 'El campo correo es obligatorio'
                    },
                    maxLength: {
                      value: 35,
                      message: "El campo correo supera el límite máximo de caracteres: 35"
                    },
                    minLength: {
                      value: 13,
                      message: "El campo correo no supera el mínimo de caracteres: 13"
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                      message: "El correo debe tener el formato correcto"
                    }
                  })
                  } />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                {errors.contraseña && <span className='formError'>{errors.contraseña.message}</span>}
                <input type="password" placeholder="Contraseña" name="contraseña"
                  {...register("contraseña", {
                    required: {
                      value: true,
                      message: 'El campo contraseña es obligatorio'
                    },
                    maxLength: {
                      value: 30,
                      message: "El campo contraseña no puede tener más de 30 caracteres"
                    },
                    minLength: {
                      value: 8,
                      message: "El campo contraseña no puede tener menos de 8 caracteres"
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,30}/,
                      message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
                    }
                  })
                  } />
                <FaLock className="icon" />
              </div>
              <div className="input-box">
                {errors.contraseña_confirmation && <span className='formError'>{errors.contraseña_confirmation.message}</span>}
                <input type="password" placeholder="Repetir contraseña" name="contraseña_confirmation"
                  {...register("contraseña_confirmation", {
                    required: {
                      value: true,
                      message: 'El campo confirmar contraseña es obligatorio'
                    },
                    validate: (value) =>
                      value === watch('contraseña') || 'Las contraseñas no coinciden'
                  })
                  } />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                {errors.privacidad && <span className='formError'>{errors.privacidad.message}</span>}
                <label>
                  <input
                    type="checkbox"
                    {...register("privacidad", {
                      required: {
                        value: true,
                        message: "Debes aceptar los términos de privacidad"
                      }
                    })
                    } />
                  Acepto los términos y condiciones
                </label>
              </div>
              <div className="g-recaptcha">
                <ReCAPTCHA
                  sitekey="6LeH7cYpAAAAAFlq1q2fmyqQo2-Mf0wRLoa045CP"
                  onChange={handleCaptchaChange}
                />
                {errors.recaptcha && <span className='formError'>{errors.recaptcha.message}</span>}
              </div>
              <button type="submit">Registrarse</button>
              <p>{error}</p>
              <div className="register-link">
                <p>
                  ¿Tienes una cuenta?
                  <a href="#" onClick={toggleAction}>
                    Iniciar sesión
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginRegister;
