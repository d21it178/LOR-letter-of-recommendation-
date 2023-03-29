import React from 'react'
import s4 from '../assets_images/s4.png';
import Carousel from 'react-bootstrap/Carousel';
import Lor_req from '../component/lor_req';


export default function Request() {
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
              <Lor_req /> 
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  )
}
