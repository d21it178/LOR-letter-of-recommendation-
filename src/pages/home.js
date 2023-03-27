import React from 'react'
import s1 from '../assets_images/s1.png';
import s2 from '../assets_images/s2.png';
import s3 from '../assets_images/s3.png';
import s4 from '../assets_images/s4.png';
import a1 from '../assets_images/a1.png';
import promotion1 from '../assets_images/promotion1.png';
import Carousel from 'react-bootstrap/Carousel';

import './home.css'


import CardGroup from 'react-bootstrap/CardGroup';
import { Divider } from "react";

import Process from '../component/Process';
import Signin from '../component/Login';


export default function home() {
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
              <Process />
              <Signin/>
            </Carousel.Caption>

          </Carousel.Item>
          
        </Carousel>

       
      </div>

      

    </React.Fragment>
  );
}
