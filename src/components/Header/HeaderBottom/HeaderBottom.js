import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './HeaderBottom.module.scss'
import {SearchForm} from '../../Forms/SearchForm/SearchForm'
import {HeaderContacts} from '../HeaderContacts/HeaderContacts'
import {HeaderSocials} from '../HeaderSocials/HeaderSocials'
import {Logo} from '../Logo/Logo'


export const HeaderBottom = () => {
  return (
    <div className={classes.header_bottom}>
      <Container>
        <Row>
          <Col sm={4} md={2}>
            <Logo/>
          </Col>
          <Col sm={5} md={4} lg={4}>
            <SearchForm/>
          </Col>
          <Col sm={4} md={4} lg={{span: 3, offset: 1}}>
            <HeaderContacts/>
          </Col>
          <Col sm={4} md={2}>
            <HeaderSocials/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
