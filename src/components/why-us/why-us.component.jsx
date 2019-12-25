import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './why-us.styles.css';

import {GiPayMoney} from 'react-icons/gi';
import {IoIosTrophy,IoMdSnow} from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md';
import { IconContext } from "react-icons";

export const WhyUs = () =>{
    return(
        <div className="WhyUs">
            <Container className="why-us-container">
                <Row>
                    <Col className="justify-content-md-center">
                        <div className="headSection">
                            <h2>WHY US</h2>
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
                <Row className="main-content">
                        <Col md="3">
                                <div className="content-icon">
                                    <div>
                                    <IconContext.Provider value={{color: "Red"}}>
                                        <GiPayMoney size="80"></GiPayMoney>
                                    </IconContext.Provider>
                                    </div>
                                    <h5>Easy Finance Options</h5>
                                    <p>Get the best financing options from us to take your dream vehicle home</p>
                                </div>                                             
                        </Col>
                        <Col md="3">
                            <div className="content-icon">
                                <div >
                                    <IconContext.Provider value={{color: "Red"}}>
                                        <IoMdSnow size="80"></IoMdSnow>
                                    </IconContext.Provider>
                                </div>
                                <h5>Excellent In Support</h5>
                                <p>
                                    We appreciate your trust and never fails to support you in maintaining you vehicle.
                                </p>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="content-icon">
                                <div>
                                    <IconContext.Provider value={{color: "Red"}}>
                                        <IoIosTrophy size="80"></IoIosTrophy>
                                    </IconContext.Provider>
                                </div>
                                <h5>Trusted by Thousands</h5>
                                <p>
                                    We are loved by 7000+ customers over the last 15 years.
                                </p>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="content-icon">
                                <div>
                                    <IconContext.Provider value={{color: "Red"}}>
                                        <MdLocationOn size="80"></MdLocationOn>
                                    </IconContext.Provider>
                                </div>
                                <h5>Located In the Heart of City</h5>
                                <p>
                                    Our Showroom is located at Santipara, Ambassa
                                </p>
                            </div>
                        </Col>  
                </Row>
            </Container>
        </div>

    )
}