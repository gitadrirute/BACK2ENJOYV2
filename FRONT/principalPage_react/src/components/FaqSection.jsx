import React, { useState } from 'react';


const FaqSection = () => {
    // Estado para controlar qué respuesta está abierta (por índice)
    const [openIndex, setOpenIndex] = useState(null);

    // Manejador de clics para alternar la visibilidad de una respuesta
    const handleClick = (index) => {
        // Si la pregunta actual está ya abierta, ciérrala (establecer `openIndex` a `null`)
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            // Si otra pregunta está abierta, ciérrala y abre la pregunta seleccionada
            setOpenIndex(index);
        }
    };

    // Lista de preguntas frecuentes
    const faqs = [
        {
            question: '¿Cómo puedo encontrar las mejores recomendaciones en BackToEnjoy?',
            answer: 'En BackToEnjoy, puedes encontrar las mejores recomendaciones de lugares y actividades en Málaga explorando nuestra plataforma. Utiliza nuestras funciones de búsqueda y filtros para descubrir lo que más te interesa y lee las reseñas y valoraciones de otros usuarios para tomar decisiones informadas sobre tu visita.',
        },
        {
            question: '¿Cómo puedo contribuir con mis propias recomendaciones en BackToEnjoy?',
            answer: '¡Nos encantaría que compartieras tus recomendaciones favoritas con la comunidad de BackToEnjoy! Simplemente regístrate en nuestra plataforma y podrás agregar tus propias reseñas y valoraciones para ayudar a otros turistas a descubrir los tesoros ocultos de Málaga.',
        },
        {
            question: '¿Qué tipo de lugares y actividades puedo encontrar en BackToEnjoy?',
            answer: 'BackToEnjoy ofrece una amplia variedad de recomendaciones, incluyendo restaurantes, bares, atracciones turísticas, actividades al aire libre, eventos culturales y mucho más. Sea cual sea tu interés, estamos aquí para ayudarte a descubrir las mejores experiencias en Málaga.',
        },
        {
            question: '¿Cómo puedo solicitar una ruta personalizada?',
            answer: 'Puedes solicitar una ruta personalizada a través de nuestra plataforma. Nuestro equipo de expertos creará un itinerario a medida basado en tus intereses y preferencias para que puedas disfrutar de Málaga de la mejor manera posible.',
        },
        {
            question: '¿Cómo puedo contactar con el equipo de BackToEnjoy?',
            answer: 'Puedes ponerte en contacto con nosotros a través de nuestro formulario en línea o enviándonos un correo electrónico. Estamos aquí para responder tus preguntas y ayudarte a disfrutar de la mejor experiencia en tu visita a Málaga.',
        },
        {
            question: '¿Qué ventajas ofrece suscribirse a la newsletter de BackToEnjoy?',
            answer: 'Al suscribirte a nuestra newsletter, recibirás las últimas recomendaciones, eventos exclusivos y ofertas especiales directamente en tu bandeja de entrada. Además, tendrás acceso a guías de viaje y consejos para disfrutar al máximo de tu visita a Málaga.',
        }
    ];
    
    return (
        <div className="faq-section" id="faq-section">
            <h2>Preguntas Frecuentes</h2>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="faq"
                    onClick={() => handleClick(index)}
                >
                    <h3 className="question" style={{color:"white"}}>{faq.question}</h3>
                    <div
                        className="answer"
                        style={{
                            maxHeight: openIndex === index ? `${faq.answer.split('\n').length * 110}px` : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.5s ease',
                        }}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;
