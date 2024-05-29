import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PayPalCheckout = () => {
  const navigate = useNavigate();
  const [paymentApproved, setPaymentApproved] = useState(false);

  const paypalOptions = {
    "client-id": "Af24EXG3-Uz3r-IHeinR2VWo52YPKqBqPWJNb6HnjO2IY4uY_o1ShSPZG_x5auggqxg8AYcHSiE8S3AT",
    currency: "EUR", // Cambiar la moneda a euros
  };

  const handleApprove = (data, actions) => {
    console.log("Pago aprobado:", data);
    setPaymentApproved(true);
    localStorage.setItem('paymentApproved', 'true'); // Guardar en localStorage
  };

  const handleError = (err) => {
    console.error("Error de PayPal:", err);
  };

  const handleCancel = (data) => {
    console.log("Pago cancelado:", data);
  };

  useEffect(() => {
    // Bloquear el scroll al cargar el componente
    document.body.classList.add('no-scroll');

    const handleBeforeUnload = (event) => {
      if (!paymentApproved) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      // Restaurar el scroll al desmontar el componente
      document.body.classList.remove('no-scroll');
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [paymentApproved]);

  if (paymentApproved) {
    navigate("/perfil");
    return null;
  }

  return (
    <div className="fixed-container">
      <Container className="pasarelaContainer">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="text-center" style={{ padding: '20px' }}>
              <Card.Body>
                <Card.Img id="imgPasarela" src="../img/Logos/logo back2enjoy.png" alt="Logoempresa" />
                <Card.Title id="titulo_pasarela">Realizar Pago</Card.Title>
                <PayPalScriptProvider options={paypalOptions}>
                  <PayPalButtons
                    style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "10.00", // El monto del pago
                              currency_code: "EUR", // Especificar la moneda como euros
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={handleApprove}
                    onError={handleError}
                    onCancel={handleCancel}
                  />
                </PayPalScriptProvider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PayPalCheckout;
