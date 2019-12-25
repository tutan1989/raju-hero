import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './feedback.styles.css';

export const Feedback = () =>{
    return(
        <div className="Feedback">
            <h1>From Our Customers</h1>
            <Carousel>
            <Carousel.Item>
                <div className="corcel">
            <h3>We are extremely satisfied with the experience we had with Raju Hero. 
                Deals Executive went to us smoothly and all through the procedure. Loved It!</h3>
                <p>Amit</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="corcel">
                <h3>All the staff was exceptionally kind and agreeable with us. We had an awesome involvement with Raju Hero. This was our third buy with 
                    Raju Hero and we allude the same to our friends and family.</h3>
                    <p>Neeta</p>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="corcel">
            <h3>All the staff was exceptionally kind and agreeable with us. We had an awesome involvement with Raju Hero. This was our third buy with 
                    Raju Hero and we allude the same to our friends and family.</h3>
                    <p>Abhishek</p>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="corcel">
            <h3>All the staff was exceptionally kind and agreeable with us. We had an awesome involvement with Raju Hero. This was our third buy with 
                    Raju Hero and we allude the same to our friends and family.</h3>
                    <p>Subhrojit</p>
                    </div>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}