import './App.css';
import Footer from './components/footer/Footer'
import Header from "./components/header/Header";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import carrusel_2 from '../src/assets/docker.jpg'
import carrusel_3 from '../src/assets/reactjs-component-lifecircle.jpg'
import carrusel_4 from '../src/assets/cn-codigo-scripts.png'
import carrusel_5 from '../src/assets/Scrum.png'
import carrusel_6 from '../src/assets/git-github.png'
import img_medio1 from '../src/assets/docker.jpg'
import img_medio2 from '../src/assets/ReactJS.jpg'
import Image from "react-bootstrap/Image";
import logo_javadev from '../src/logo.png';
import ant_logo from '../src/assets/logos/ant-design-seeklogo.com.svg'
import bootstrap_logo from '../src/assets/logos/bootstrap-5-seeklogo.com.svg'
import css_logo from '../src/assets/logos/css3-seeklogo.com.svg'
import docker_logo from '../src/assets/logos/docker-seeklogo.com.svg'
import github_logo from '../src/assets/logos/github-seeklogo.com.svg'
import html_logo from '../src/assets/logos/html5-with-wordmark-color.svg'
import react_logo from '../src/assets/logos/react-seeklogo.com.svg'
import spring_logo from '../src/assets/logos/spring-boot-seeklogo.com.svg'
import java_logo from '../src/assets/logos/java-seeklogo.com.svg'
import javascript_logo from '../src/assets/logos/javascript-js-seeklogo.com.svg'
import postman_logo from '../src/assets/logos/postman-seeklogo.com.svg'
import intellij_logo from '../src/assets/logos/intellij-idea-seeklogo.com.svg'


function App() {
    return (
    <>
    <Header/>
        <div className="body">
            <h1 id="sobre_h1" align="center">Sobre JavaDev</h1>
            {/*QUE USAMOS*/}
            <div id="que_usamos">
                <Row>
                    <Col>
                        <Image src={react_logo} width={235} height={235}/>
                    </Col>
                    <Col id="spring_logo">
                        <Image src={spring_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={java_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={javascript_logo} width={235} height={235}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>

                <Row>
                    <Col>
                        <Image src={bootstrap_logo} width={235} height={235}/>
                    </Col>
                    <Col id="spring_logo">
                        <Image src={ant_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={html_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={css_logo} width={235} height={235}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <Image src={github_logo} width={235} height={235}/>
                    </Col>
                    <Col id="spring_logo">
                        <Image src={docker_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={postman_logo} width={235} height={235}/>
                    </Col>
                    <Col>
                        <Image src={intellij_logo} width={235} height={235}/>
                    </Col>
                </Row>
            </div>

            {/*CARRUSEL*/}
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_2}
                        alt="Boostrap"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_3}
                        alt="Coding"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_4}
                        alt="Coding"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_5}
                        alt="SCRUM"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_6}
                        alt="Docker"
                    />
                </Carousel.Item>
            </Carousel>

            {/*QUIENSOY*/}
            <div id="quiensoy">
                    <Container id="quiensoy_explicacion">
                        <div className="d-flex justify-content-between">
                            <div id="logo_javadev">
                                <p>
                                    <Image id="image_logo" roundedCircle={true} src={logo_javadev}/>
                                    Desarrollamos aplicaciones web y Desktop, pero si, principalmente web.
                                    En el desarrollo de éstas siempre tenemos en cuenta las buenas prácticas en el desarrollo de sotfware.
                                    Empleamos metodologías ágiles.
                                    En nosotros podrá encontrar seriedad y transparencia, la profesionalidad es una parte escencial en nosotros.
                                </p>
                                <p>Dentro de la tecnologías, lenguajes de programación y frameworks empleados en nuestro día a día se encuentra:
                                    <br/>
                                    <br/>
                                    <li>ReactJS</li>
                                    <li>Spring Boot</li>
                                    <li>API RestFul</li>
                                    <li>Programación Java Funcional</li>
                                    <li>React Bootstrap</li>
                                    <li>Ant Desing</li>
                                    <li>MySQL/MariaDB</li>
                                    <li>PostgreSQL</li>
                                    <li>Oracle DB</li>
                                    <li>otras bases de datos</li>
                                    <li>Docker</li>
                                </p>
                            </div>
                        </div>
                    </Container>
            </div>

            <Row>
                <Col >
                    <div id="effect-hover">
                        <div className="img">
                            <Image thumbnail={true}
                                   src={img_medio1}
                                   className="img-fluid"/>
                            <div id="efecto">
                                <h2>Dockerizacion </h2>
                                <p>Dockerizacion de microservicios y aplicaciones frontend.</p>
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
                                <p>Desarrollamos tanto el Frontend como el Backend.</p>
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
