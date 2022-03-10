import './App.css';
import Footer from './components/Footer'
import Header from "./components/Header";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import carrusel_1 from '../src/assets/spring_boot_logo.png'
import carrusel_2 from '../src/assets/bootstrap.png'
import carrusel_3 from '../src/assets/coding.png'
import carrusel_4 from '../src/assets/cn-codigo-scripts.png'
import carrusel_5 from '../src/assets/Scrum.png'
import carrusel_6 from '../src/assets/git-github.png'
import img_medio1 from '../src/assets/docker.jpg'
import img_medio2 from '../src/assets/ReactJS.jpg'
import Image from "react-bootstrap/Image";

function App() {
    return (
    <>
    <Header/>
        <div className="body">
            <h1 id="sobre_h1" align="center">Sobre JavaDev</h1>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_1}
                        alt="Spring Boot"
                    />
                    <Carousel.Caption>
                        <h3>Sprint Boot</h3>
                        <p>API RESTFUL, Spring MVC, Spring Security</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_2}
                        alt="Boostrap"
                    />
                    <Carousel.Caption>
                        <h3>Bootstrap React</h3>
                        <p>Using Bootstrap React for ReactJS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_3}
                        alt="Coding"
                    />

                    <Carousel.Caption>
                        <h3>Clean Code</h3>
                        <p>The bests practices</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_4}
                        alt="Coding"
                    />

                    <Carousel.Caption>
                        <h3>SCRUM</h3>
                        <p>Agil methodoligy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_5}
                        alt="SCRUM"
                    />

                    <Carousel.Caption>
                        <h3>GitHub</h3>
                        <p>Our proyects in GitHub.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_6}
                        alt="Docker"
                    />

                    <Carousel.Caption>
                        <h3>App and API RestFul in Container with Docker</h3>
                        <p>The Future with Docker.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col >
                    <div id="effect-hover">
                        <div className="img">
                            <Image thumbnail={true}
                                   src={img_medio1}
                                   className="img-fluid"/>
                            <div id="efecto">
                                <h2>Dockerizacion </h2>
                                <p>lorem ipsum atsais dase.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div id="effect-hover">
                        <div className="img">
                            <Image thumbnail={true}
                                   src={img_medio2}
                                   className="img-fluid"/>
                            <div id="efecto">
                                <h2>Full Stack</h2>
                                <p>lorem ipsum atsais dase.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
   <Footer/>
    </>

);
}

export default App;
