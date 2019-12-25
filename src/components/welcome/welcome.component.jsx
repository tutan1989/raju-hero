import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {FaMotorcycle,FaHandshake} from 'react-icons/fa';
import {GiParmecia} from 'react-icons/gi';
import { IconContext } from "react-icons";

import './welcome.styles.css';


export const Welcome = () => {
    return (
        <div className="welcome">
            <Container>
                <Row>
                    <Col>
                        <div className="headSection">
                            <h1>WELCOME TO RAJU HERO</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="colored-separator style_2">
                            <div className="first-long stm-base-background-color"></div>
                            <div className="last-short stm-base-background-color"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="welcome-content">
                        Welcome to state of art Hero showroom at Ambassa Bazar, opposite to T.R.T.C Stand, Ambassa, Dhalai 700036 with 2 floors and all models and variants on display with authorised service at Santipara Road, Ambassa, Dhalai-799289.
                        We are AD of Hero Motocorp
                        </p>
                   </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="welcome-content">
                        We are in Automobile industry for 15 years and oldest player in Dhalai district with having more than 7000+ customers and 10000+ serviced customers.
                        Come experience the latest in style and performance to hit the roads with the world no1 company
                        </p>
                   </Col>
                </Row>
                <Row className="page-content">
                    <Col md="4">
                        <div>
                            <div className="welcome-content-icon">
                                <IconContext.Provider value={{color: "white"}}>
                                    <FaMotorcycle size={40} />
                                </IconContext.Provider>
                            </div>
                            <h3>State Of The Art Showroom</h3>
                            <p>We have fully equipped doble story showroom to display all models and variant.</p>
                        </div>
                    </Col>
                    <Col md="4">
                        <div>
                            <div className="welcome-content-icon">
                                <IconContext.Provider value={{color: "white"}}>
                                    <FaHandshake size={40} />
                                </IconContext.Provider>
                            </div>
                            <h3>Friendly Staff</h3>
                            <p>Client servicing is our prime motto, and our staff never fails on it.</p>
                        </div>
                        
                    </Col>
                    <Col md="4">
                        <div>
                            <div className="welcome-content-icon">
                                <IconContext.Provider value={{color: "white"}}>
                                    <GiParmecia size={40}/>
                                </IconContext.Provider>
                            </div>
                            <h3>Authorised Service Center</h3>
                            <p>We fully automated have authorised service center at Ambassa</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}