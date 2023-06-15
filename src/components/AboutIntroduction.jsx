import { Container, Row, Col, Carousel } from "react-bootstrap";

import "./AboutIntroduction.css";

import img from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";
import img5 from "../assets/about5.jpg";

function AboutIntroduction() {
  return (
    <Container className="about-intro-banner">
      <Row className="about-row">
        <Col xs={12} className="about-col p-5 d-flex flex-column">
          <h2 className="about-intro-title">About The Proyect</h2>
          <div>
            <p className="about-intro-text">
              (Nombre de e-commerce) es un e-commerce de relojes de alta gama,
              desarrollado por un grupo de estudiantes de Hack Academy con fines
              unicamente educativos.
            </p>
            <p className="about-intro-text">
              El objetivo de este proyecto es recorrer todos los conocimientos
              adquiridos a traves del bootcamp y podes plasmarlos todos en un
              mismo proyecto. Tras manejar varias opciones e investigar cada
              una, como grupo tomamos la decision de hacer un e-commerce de
              relojes de alta gama, esto debido a la cantidad de imagenes y
              videos de calidad que teniamos disponibles para lograr el
              resultado deseado.{" "}
            </p>
            <p className="about-intro-text">
              La pagina que tomamos como inspiracion es la de Omega, nos parecio
              que abarcaba muchas de las cosas que nos gustan y buscabamos en
              nuestro sitio. El proyecto se forma por dos subproyectos: la
              tienda por un lado, que es una Single Page Application hecha en
              React, donde utilizamos suna store de Redux en la cual guardamos
              el carrito y el token, por el otro el back-end conectado a la base
              de datos hecha en MongoDB. Nuestra tienda se comunica con el
              servidor back-end con llamadas AJAX gracias a la libreria Axios.
              ....
            </p>
          </div>
          <div>
            <button className="fw-bolder">View MER</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutIntroduction;
