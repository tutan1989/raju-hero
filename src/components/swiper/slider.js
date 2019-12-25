import React from 'react';
import Swiper from 'react-id-swiper';
import Slides from './demo-data';
import './swiper.css';
import './demo.css';

export default props => {
  const _renderContent = (slide) => {
    return props.showImage ? '' : slide.title;
  }

  const _divStyle = (slide) => {
    return props.showImage ? {backgroundImage: `url(${require(`./img_${slide.id}.png`)})`} : {}
  }

  return(
    <div className="row" id={props.id} >
      <div className="col-sm-12 col-md-12 col-lg-12 slide-content">
        <h2>{props.title}</h2>
          <Swiper {...props.params} style={{'height': '200px'}}>
            {Slides.map((slide) => {
              return <div className="demo-slide" key={slide.id} style={_divStyle(slide)}>{_renderContent(slide)}</div>
            })}
          </Swiper>
      </div>
    </div>
  )
};
