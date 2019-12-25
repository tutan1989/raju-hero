import React from 'react';
import Slider from '../swiper/slider.js';

export const PhotoGallery = (props) => {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
      }

    return (
        <Slider title="Our Showroom" params={params} id={props.id} showImage={props.showImage} />
    )
}