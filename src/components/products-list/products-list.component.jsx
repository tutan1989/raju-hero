import React from 'react';
import './products-list.styles.css';

import xtreme200 from '../../image/xtrm200.png';
import xpluse200 from '../../image/X-Pulse-200.png';
import xpulse200t from '../../image/X-Pulse-200T.png';
import xtreme200s from '../../image/Xtreme-200S.png';
import destini from '../../image/destini.png';
import duet from '../../image/duet-p.png';
import pleasureplus from '../../image/pleasure-p.png';
import maestro from '../../image/maestro-p.png';
import glamour from '../../image/glamor.png';
import spsismart from '../../image/sps-ismrt.png';
import passionxpro from '../../image/passion-x-pro.png';
import hfdelux from '../../image/hf-delux.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProductsList = () =>{
    return(
        <div className="Products">
            <Container>
                <Row>
                    <Col>
                        <div className="headSection">
                            <h1>Featured Products</h1>
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
                        <div className="main-content">
                            <div className='card-list'>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={xtreme200}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={xpluse200}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={xpulse200t}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={xtreme200s}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={destini}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={duet}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={maestro}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={pleasureplus}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={glamour}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={spsismart}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={passionxpro}                    
                                    alt="First slide"
                                />   
                                </div>
                                <div className='card-container'>
                                <img
                                    className="d-block w-100"
                                    src={hfdelux}                    
                                    alt="First slide"
                                />   
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}