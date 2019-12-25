import React from 'react';
import './footer.styles.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () =>{
    
    return(
        <div className="Footer">
            <Container className="ourServices">
                <Row>
                    <Col md="4">
                        <div>
                            <h3>Services</h3>
                            <ul>
                                <li>
                                    <h6>Apply For Loan</h6>
                                </li>
                                <li>
                                    <h6>Apply For Insurance</h6>
                                </li>
                                <li>
                                    <h6>Service Request</h6>
                                </li>
                                <li>
                                    <h6>Book Test Ride</h6>
                                </li>
                                <li>
                                    <h6>Feedback</h6>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="colored-separator style_2">
                        <h3>Quick Links</h3> 
                        <ul>
                                <li>
                                    <h6>Home</h6>
                                </li>
                                <li>
                                    <h6>About Us</h6>
                                </li>
                                <li>
                                    <h6>Product</h6>
                                </li>
                                <li>
                                    <h6>Blog</h6>
                                </li>
                                <li>
                                    <h6>Contact Us</h6>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="colored-separator style_2">
                        <h3>Contact Us</h3>
                        <ul>
                                <li>
                                    <h6>Apply For Loan</h6>
                                </li>
                                <li>
                                    <h6>Apply For Insurance</h6>
                                </li>
                                <li>
                                    <h6>Service Request</h6>
                                </li>
                                <li>
                                    <h6>Book Test Ride</h6>
                                </li>
                                <li>
                                    <h6>Feedback</h6>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}