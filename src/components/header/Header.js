import React, {Component} from "react";
import {Container, Image, Nav, Navbar, NavDropdown, Tooltip} from "react-bootstrap";
import logo_javadev from '../../assets/logo.png'
import './Header.css'
import {GithubOutlined, LinkedinOutlined, MailOutlined, OneToOneOutlined, ShopOutlined} from "@ant-design/icons";

class Header extends Component{
    render() {
        return(
            <>
                <Navbar className="header_container" fixed="top">
                    <Container >
                        <Navbar.Brand href="#home">
                            <Image roundedCircle={true}
                                   alt=""
                                   src={logo_javadev}
                                   width="35"
                                   height="35"
                                   className="d-inline-block align-top"
                            />
                            <span id="text_logo"> JavaDev
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav >
                                <NavDropdown title="Proyectos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="http://78.138.51.169:8080/"  target="_blank" rel="noopener noreferrer"><ShopOutlined style={{color:"yellowgreen", width:"2em"}} /> Carrito de Compra</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Navbar.Text>
                                <div id="social_net">
                                    <a href="mailto:rafavlack@gmail.com"><MailOutlined/></a>
                                    <a href="src/components/header/Header" target="_blank" rel="noopener noreferrer"><GithubOutlined/></a>
                                    <a href="src/components/header/Header" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
                                </div>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;
