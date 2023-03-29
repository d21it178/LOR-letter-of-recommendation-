import React from 'react'
import s4 from '../assets_images/s4.png';
import Carousel from 'react-bootstrap/Carousel';
import Up_add from '../component/Up_add';

export default function Upload() {
  return (
    <React.Fragment>
    <div> 
    <Carousel>
    <Carousel.Item>
            <img
              className="d-block w-100 "
              src={s4}
              alt="Third slide"
            />
            <Carousel.Caption>
            <Up_add />
             
            </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    </div>
    </React.Fragment>
  )
}
       