import { Container, Row, Col, Carousel } from "react-bootstrap";

import "./AboutIntroduction.css";

function AboutIntroduction() {
  return (
    <Container className="about-intro-banner">
      <h2 className="about-intro-title">About The Proyect</h2>
      <Row className="about-row">
        <Col xs={12} lg={6} className="about-col">
          <div className="container-text">
            <p className="about-intro-text">
              <strong>Kairos</strong> es un e-commerce de relojes de alta gama,
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
              resultado deseado.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={6} className="about-col">
          <p className="about-intro-text">
            La pagina que tomamos como inspiracion es la de Omega, nos parecio
            que abarcaba muchas de las cosas que nos gustan y buscabamos en
            nuestro sitio. El proyecto se forma por dos subproyectos: la tienda
            por un lado, que es una Single Page Application hecha en React,
            donde utilizamos suna store de Redux en la cual guardamos el carrito
            y el token, por el otro el back-end conectado a la base de datos
            hecha en MongoDB. Nuestra tienda se comunica con el servidor
            back-end con llamadas AJAX gracias a la libreria Axios. ....
          </p>
        </Col>
        <div className="about-intro-btn">
          <button className="btn">View MER</button>
        </div>
      </Row>
    </Container>
  );
}

export default AboutIntroduction;
