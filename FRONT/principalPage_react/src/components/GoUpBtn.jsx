import React, { useEffect, useState } from 'react';


const GoUpBtn = () => {
    // Estado para controlar la visibilidad del botón
    const [isVisible, setIsVisible] = useState(false);

    // Manejador de desplazamiento
    const handleScroll = () => {
        // Muestra el botón si el usuario se desplaza más de 500 píxeles hacia abajo
        setIsVisible(window.scrollY > 50);
    };

    // Manejador de clic para desplazar hacia arriba
    const handleClick = () => {
      window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    };

    // Efecto para agregar el evento de desplazamiento
    useEffect(() => {
        // Añade el manejador de desplazamiento al evento de desplazamiento de la ventana
        window.addEventListener('scroll', handleScroll);

        // Limpia el evento de desplazamiento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // Muestra el botón solo si `isVisible` es true
        isVisible && (
            <span className="ir-arriba" onClick={handleClick}>
                {/* Imagen del botón */}
                <img
                
                    width="30px"
                    alt="Ir arriba"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjElEQVR4nO2az29MURTHP6I6IxV02jKx0qVU8E+g9ZtdqR1ho6Rs0XVZSZr4O/yI1AJNEL+1iagqK3Qh2Gk1yMiJ70tOxsz0zZs7M4/4Ji99nXPvuefce+6555z74D/+XeSAfcAF4DrwCvgCLOix9ynRrM1eoJ2UIAscBm4CP4FClc8PYAwYADLNUGA5cBqYdUJ9A24BZ7UyGzTjy/S06zejnQNuq0/U/wMwpMlpCHYCb50Aj4EjwKoEvFYDR4Enjt8boI86wmbqshvwKbAtIP9e4LnjP1qP1clLcBvgK3ACWBp6EH7zPAnMudVeG4p5t5a7IK+zkfpjEzCtMWckQ03ocgwfAZ00Du3AXY39VlaRCFlnTveBNhqPNuCBM7NEe+ayMyc77JqFDmcV5gCqdrHRxm7EnoizZ+Ykk3m32IdddE6Yd0oLTrnNH8vEzrhzoh4uNilagAnJZkpVREahgjXeSvqwQ7LNLrYqA85DpBFLnCc9WKnhTTWy2CkE8oqjJmo5B4pwTDLeoAxyCqu/JQwAi5GX645ip6lAyrQrv/leTs59GtBC8ZBKTBW9h1DmjvjtKUW8KKLlEyGVyJf5rRYMi9dIKeL1SlrGhEWqL8THUt11jrbG0aaLaNViv/hcKUV8LaJlcUkQZ9ZDrUyPm6w/8FnEXOCVKEaIlelU/4+liAsittZRiVDKZFydIIgiSZQIoUymkiLVmlYtStSqTFcl06p2s08GcqfeAUyE2OzXRLQKYBw8VNUjxAGXlxIPQrjf6EC04lnaMVzpQAwZotQb45J1V7lgLAoarQKYVuRc0LiyXKMxaWplzLTiuGS0kKosDqmR5RBpTayeScb+xQ6a92q4nfRhl2R7F+caYkiNn6Ww+DAp2QbjdMi6Wq8VlNOCIRcBxL4U6lOnORXHmo0twLxkqvoqY9TNgJUtm4UuFeVMlktJGGRVFioodGhGEXuFQqGC/mZqmY1X7lrB/m/kwXfPXcfVfOHT7ZbWzGwzjdkTMxrTovL1oRivdWY2p9qrucPQaJF3mnfmZDlLUGSdA4hyh76AJ7ZdZUTnRLSx63r33uuWParaH0v4FUNOsVMUdhRkSiFvixddnVMunCkoIrXw+rwSnx657VY9Hbo0OqA2465OEIUdg836AiKjqvgNpQDVfsLxXVFsf7MUKAUrKO9W1nZVefgn91GNvb9UejqitmXzif/gL8cvZOJOLT/oEqcAAAAASUVORK5CYII="
                />
            </span>
        )
    );
};

export default GoUpBtn;
