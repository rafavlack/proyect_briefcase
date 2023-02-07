import React, {Component} from "react";
import "./Footer.css"
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo.png'
import logo_spring from '../../assets/spring_boot_logo.png'
import logo_react from '../../assets/logo192.png'
import logo_bootstrap from '../../assets/bootstrap-icons.png'
import logo_ant from '../../assets/logos/ant-design-seeklogo.com.svg'
import {ClusterOutlined, CodeOutlined, ConsoleSqlOutlined, MailOutlined} from "@ant-design/icons";

const fecha = new Date().getFullYear();

class Footer extends Component{
    render() {
        return(
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Servicios</h3>
                                <ul>
                                    <li><CodeOutlined /> Desarrollo de aplicaciones web y Desktop.</li>
                                    <li><ClusterOutlined /> Desarrollo de APIs RestFul.</li>
                                    <li><ConsoleSqlOutlined /> Soluciones de Base de Datos.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>JavaDev</h3>
                                <p>Profesionales en el desarrollo y de soluciones de Tecnologías de la Información. Creación de aplicaciones web y Desktop con las últimas tecnologías existentes.
                                   Creamos aplicaciones a la medida, ya que nuestro cliente es nuestra razón de ser.</p>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Contáctenos</h3>
                                <ul>
                                    <li><a href="mailto:rafavlack@gmail.com"><MailOutlined/>  rafavlack@gmail.com</a></li>
                                </ul>
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
                                        <Image roundedCircle={true} width={100} src={logo_ant}/>
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
