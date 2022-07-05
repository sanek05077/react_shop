import React from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import image_1 from '../../../../assets/images/img-slider-01.jpg'
import image_2 from '../../../../assets/images/img-slider-02.jpg'
import image_3 from '../../../../assets/images/img-slider-03.jpg'
import classes from './HomeSlider.module.scss'


export const HomeSlider = () => {
  const images = [
    { id: 1, src: image_1, title: 'Lorem ipsum' },
    { id: 2, src: image_2, title: 'Lorem ipsum dolor' },
    { id: 3, src: image_3, title: 'Lorem ipsum dolor' },
  ];

  return (
    <div className={classes.home_slider}>
      <Container>
        <Row>
          <Col>
            <Carousel interval={1000000}>
              {images.length > 0 &&
              images.map((item) => {
                return (
                  <Carousel.Item key={item.id}  id={item.id}>
                    <img
                      src={item.src}
                      alt={item.title}
                    />
                    <Carousel.Caption bsPrefix={classes.carousel_caption}>
                      <h3>{item.title}</h3>
                    </Carousel.Caption>

                  </Carousel.Item>

                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )

}
