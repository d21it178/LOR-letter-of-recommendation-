import React from 'react'
import s4 from '../assets_images/s4.png';
import Carousel from 'react-bootstrap/Carousel';
import Sign_up from '../component/Sign_up';

export default function Signup() {
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

             <Sign_up/> 
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  )
}
