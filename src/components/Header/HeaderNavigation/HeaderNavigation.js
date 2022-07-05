import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './HeaderNavigation.module.scss'
import {HeaderCart} from '../HeaderCart/HeaderCart'
import {MainNavigation} from '../../Navigation/MainNavigation/MainNavigation'
import {MobileNavigation} from '../../Navigation/MobileNavigation/MobileNavigation'


export const HeaderNavigation = () => {


  return (
    <div className={classes.navigation_section}>
      <Container>
        <Row className="justify-content-end">
          <Col xs={8} md={9}>
            <MainNavigation/>
            <MobileNavigation/>
          </Col>
          <Col xs={4} md={3}>
            <HeaderCart/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
