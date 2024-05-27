import React from 'react'
import '../assets/css/legal_styles.css';


const PoliticaCookies = () => {
  return (
    <>
    <div className="container"  id='start'>
        <div className="content_info">
            <h3>Política De Cookies</h3>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico informamos al Usuario de la utilización de cookies en la web de “Nimio”.</p>
            <p>Las cookies permiten, entre otras cosas, recopilar información estadística, facilitar ciertas funcionalidades técnicas, almacenar y recuperar información sobre los hábitos de navegación o preferencias de un Usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al Usuario, recordar aspectos del Usuario como su idioma, país, navegador, etc. En caso de no querer recibir cookies, el Usuario podrá configurar su navegador para que las borre del disco duro de su ordenador, las bloquee o le avise en su caso de instalación de las mismas.</p>
            <p>Nuestro sitio web utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan “cookies”). Las cookies también son colocadas por terceros a los que hemos contratado. A continuación, te informamos sobre el uso de cookies en nuestra web.</p>
        </div>
        
        <div className="content_info">
            <h4>¿Qué son las cookies, los scripts o las balizas web?</h4>
            <p>Una cookie es un pequeño archivo simple que se envía junto con las páginas de esta web y que el navegador del usuario almacena en el disco duro de su ordenador o de otro dispositivo (smartphone, tablet, televisión conectada…). La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros relevantes durante una visita posterior.</p>
            <p>Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en el dispositivo del usuario.</p>
            <p>Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para hacer seguimiento del tráfico en una web.</p>
        </div>
        
        <div className="content_info">
            <h4>Cookies</h4>
            <h5>Cookies técnicas o funcionales</h5>
            <p>Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que las preferencias de usuario sigan recordándose. Al colocar cookies funcionales, facilitamos la visita y uso de nuestra web. La normativa nos permite colocar estas cookies sin tu consentimiento.</p>
            <h5>Cookies analíticas</h5>
            <p>Usamos cookies analíticas para optimizar la experiencia en el sitio web de nuestros usuarios. Con estas cookies analíticas obtenemos conocimientos del uso de nuestro sitio web. Es necesario el consentimiento del usuario para insertar cookies analíticas.</p>
            <h5>Cookies de publicidad o marketing</h5>
            <p>En esta web utilizamos cookies publicitarias, lo que nos permite personalizar los anuncios para cada usuario, y nosotros (y terceros) obtenemos información sobre los resultados de la campaña. Esto sucede en base a un perfil que creamos con los clics de los usuarios y navegación dentro y fuera de “www.tiendaonlinebarata.com”. Es necesario el consentimiento del usuario para insertar estas cookies.</p>
        </div>
        <div className="content_info">
            
            <h2>Cookies utilizadas en la web</h2>

            <table>
            <tr>
                <th>Nombre de la cookie</th>
                <th>Descripción/Finalidad</th>
                <th>Tipo</th>
                <th>Caducidad</th>
            </tr>
            <tr>
                <td>PHPSESSID</td>
                <td>Esta cookie es usada por el lenguaje de encriptado PHP para permitir que las variables de SESIÓN sean guardadas en el servidor web. Esta cookie es esencial para el funcionamiento de la web.</td>
                <td>Técnica</td>
                <td>De Sesión</td>
            </tr>
            <tr>
                <td>cookie_consent_level</td>
                <td>Cookie usada para recordar la aceptación de la política de cookies por parte del usuario.</td>
                <td>Técnica</td>
                <td>Persistente</td>
            </tr>
            <tr>
                <td>cookie_consent_user_accepted</td>
                <td>Cookie usada para recordar la aceptación de la política de cookies por parte del usuario.</td>
                <td>Técnica</td>
                <td>Persistente</td>
            </tr>
            <tr>
                <td>ssupp.animbnr</td>
                <td>Estas cookies se utilizan para mantener una sesión de chat a través del proveedor Smartsupp.</td>
                <td>Técnicas</td>
                <td>ssupp.animbnr: De Sesión</td>
            </tr>
            <tr>
                <td>ssupp.chatid</td>
                <td>Estas cookies se utilizan para mantener una sesión de chat a través del proveedor Smartsupp.</td>
                <td>Técnicas</td>
                <td>ssupp.chatid: De Sesión</td>
            </tr>
            <tr>
                <td>ssupp.vid</td>
                <td>Estas cookies se utilizan para mantener una sesión de chat a través del proveedor Smartsupp.</td>
                <td>Técnicas</td>
                <td>ssupp.vid: 1 año</td>
            </tr>
            <tr>
                <td>ssupp.visits</td>
                <td>Estas cookies se utilizan para mantener una sesión de chat a través del proveedor Smartsupp.</td>
                <td>Técnicas</td>
                <td>ssupp.visits: 1 año</td>
            </tr>
            <tr>
                <td>_ga, _gat, _gid</td>
                <td>Cookies de Google Analytics. Informes estadísticos sobre cómo los Usuarios encuentran la página web y cómo la utilizan: páginas visitadas, tiempo de estancia, tipo de navegador…</td>
                <td>Analíticas, de terceros</td>
                <td>_ga: 2 años <br/> _gid: 24 horas <br/> _gat: 10 minutos</td>
            </tr>
            </table>
        </div>
        <div className="content_info">
            <h2>Cookies instaladas por terceros</h2>
    
            <p>El Sitio Web puede utilizar cookies instaladas por terceros para realizar un análisis estadístico sobre la navegación de los usuarios, o mostrar contenido publicitario personalizado. Por ejemplo, cookies de Google. Tenga en cuenta que, si acepta las cookies de terceros, deberá eliminarlas desde las opciones del navegador o desde el sistema ofrecido por el propio tercero.</p>
        </div>
    
        <div className="content_info">
            <h2>Consentimiento y configuración de cookies</h2>
    
            <p>Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies (“primera capa”). Tan pronto como hagas clic en el botón de aceptación, aceptas que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de funcionar correctamente si lo haces.</p>
        </div>
    
        <div className="content_info">
            <h2>Tus derechos con respecto a los datos personales</h2>
    
            <p>Visita nuestra política de privacidad para conocer tus derechos con respecto al tratamiento de datos personales, y cómo ejercerlos.</p>
        </div>
    
        <div className="content_info">
            <h2>Activación, desactivación y eliminación de cookies</h2>
    
            <p>Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulta las instrucciones de la sección de «Ayuda» de tu navegador.</p>
    
            <p>Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu consentimiento cuando vuelvas a visitar nuestras webs</p>
        </div>
    
    </div>
    </>
  )
}

export default PoliticaCookies