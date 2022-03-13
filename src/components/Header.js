import React, {Component} from "react";
import {Container, Image, Navbar, Tooltip} from "react-bootstrap";
import logo_javadev from '../assets/logo.png'
import './Header.css'
import {GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

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
                            <Navbar.Text>
                                <div id="social_net">
                                    <a  href="https://github.com/rafavlack/"  target="_blank" rel="noopener noreferrer"><GithubOutlined/></a>
                                    <a href="https://www.linkedin.com/in/rafael-barrientos-holder-666a6912a/"  target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
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
