import React, { Component } from 'react';
import './App.css';
import {Menu} from './components/header/header.component.jsx';
import {Carousels} from './components/Carousels/Carousels.component.jsx';
import {Welcome} from './components/welcome/welcome.component.jsx';
import {WhyUs} from './components/why-us/why-us.component.jsx';
import {ProductsList} from './components/products-list/products-list.component.jsx';
import {PhotoGallery} from './components/photo-gallery/photo-gallery.componet.jsx';
import {Feedback} from './components/feedback/feedback.component.jsx';
import {Footer} from './components/footer/footer.component.jsx';
import {CopyRight} from './components/copy-right/copy-right.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  render(){
  return (

    <div className="App">
      <Menu></Menu>
      <Carousels></Carousels>
      <Welcome></Welcome>
      <WhyUs></WhyUs>
      <ProductsList></ProductsList>
      <PhotoGallery showImage="true" id="coverflow-effect"></PhotoGallery>
      <Feedback></Feedback>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}
}
export default App;
