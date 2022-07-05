import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './BannerBottom.module.scss'
export const BannerBottom = () => {
  return(
    <Container>
      <Row>
        <Col>
          <div className={classes.banner_bottom}>
            <Row className="row align-items-center justify-content-md-around">
              <Col md="8">
                <h4>Получить профессиональную консультацию! </h4>
                <p>Поможем сделать правильный выбор и предоставим скидку!</p>
              </Col>
              <Col md="3">
                <a href="/" className="btn btn-secondary">Заказать</a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
