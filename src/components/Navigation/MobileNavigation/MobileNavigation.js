import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import classes from './MobileNavigation.module.scss'


export const MobileNavigation = () => {

  return (

    <div className={`${classes.mobile_nav} d-block d-md-none`}>

      <Navbar variant="dark" expand="lg">
          <Navbar.Toggle className={classes.mobile_nav_button} aria-controls="mobile_nav" />
          <Navbar.Collapse id="mobile_nav">
            <Nav className={classes.navbar_nav}>
              <Nav.Link className={classes.nav_link} href="/news">Полезные статьи</Nav.Link>
              <Nav.Link className={classes.nav_link} href="#">Сертификаты</Nav.Link>
              <Nav.Link className={classes.nav_link} href="#">Акции</Nav.Link>
              <Nav.Link className={classes.nav_link} href="#">Бренды</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
