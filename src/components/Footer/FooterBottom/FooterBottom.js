import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import classes from './FooterBottom.module.scss'

export const FooterBottom = () => {
  return(
    <Container>
      <Row>
        <Col>
          <div className={classes.footer_bottom}>
            <p>sitename © 2017 - {new Date().getFullYear()}. Все права защищены.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

