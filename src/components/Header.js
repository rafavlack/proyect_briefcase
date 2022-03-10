import React, {Component} from "react";
import {Container, Image, Navbar} from "react-bootstrap";
import logo_javadev from '../assets/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

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
                        <div className="social_net">
                            <FontAwesomeIcon icon={faJedi} color="green" fixedWidth />
                        </div>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;
