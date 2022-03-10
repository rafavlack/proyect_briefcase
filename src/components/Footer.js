import React, {Component} from "react";
import "./Footer.css"
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.png'
import logo_spring from '../assets/spring_boot_logo.png'
import logo_react from '../assets/logo192.png'
import logo_bootstrap from '../assets/bootstrap-icons.png'
import logo_fontawesome from '../assets/fontawesome.png'

const fecha = new Date().getFullYear();

class Footer extends Component{
    render() {
        return(
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Full Stack</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">JavaDev</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>JavaDev</h3>
                                <p>Professional software development. Web applications development.
                                    Creation of APIs with Spring Boot, Spring Security.
                                    FullStack Spring Boot with ReactJS.</p>
                            </div>

                            <div className="container_logo">
                                <div className="row align-items-lg-center">
                                    <div className="col" align="center">
                                        <Image roundedCircle={true} width={100} src={logo}/>
                                    </div>

                                    <div className="col" align="center">
                                        <Image roundedCircle={true} width={200} src={logo_spring}/>
                                    </div>
                                    <div className="col" align="center">
                                        <Image roundedCircle={true} width={100} src={logo_react}/>
                                    </div>

                                    <div className="col" align="center">
                                        <Image roundedCircle={true} width={100} src={logo_bootstrap}/>
                                    </div>

                                    <div className="col" align="center">
                                        <Image roundedCircle={true} width={100} src={logo_fontawesome}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="copyright">JavaDev © {fecha}</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
