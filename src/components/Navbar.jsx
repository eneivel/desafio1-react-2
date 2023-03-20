import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagen1 from "../assets/imgs/correo-de-contacto.png"
import imagen2 from "../assets/imgs/casa.png"
import imagen3 from "../assets/imgs/cup-cake.png"



const BarraNavegacion = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none">
          <img src={imagen1} className="imgnav" alt="home" /> Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <img src={imagen2} className="imgnav" alt="contacto"/> Contacto
          </Link>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand >Happy Cake <img src={imagen3} className="imgnav" alt="cake"/></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default BarraNavegacion;