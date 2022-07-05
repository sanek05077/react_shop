import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './HeaderTop.module.scss'
import {LanguageForm} from '../../Forms/LanguageForm/LanguageForm'
import {TopNavigation} from '../../Navigation/TopNavigation/TopNavigation'



export const HeaderTop = () => {


    return (
      <div className={classes.header_top}>
        <Container>
          <Row className="justify-content-end">
            <Col sm={9} md={10}>
              <TopNavigation/>
            </Col>
            <Col sm={3} md={2}>
              <LanguageForm/>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
