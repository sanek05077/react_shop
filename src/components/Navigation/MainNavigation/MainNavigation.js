import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import classes from './MainNavigation.module.scss'
import {MenuButtonWide} from 'react-bootstrap-icons'


export const MainNavigation = () => {

  return (

      <div className={`${classes.main_nav} d-none d-md-block`}>
        <Navbar>
          <Nav>
            <Nav.Link className={`${classes.nav_link} ${classes.catalog_link}`} href="/categories"><span><MenuButtonWide/></span>Каталог товара</Nav.Link>
            <Nav.Link className={classes.nav_link} href="/news">Полезные статьи</Nav.Link>
            <Nav.Link className={classes.nav_link} href="#">Сертификаты</Nav.Link>
            <Nav.Link className={classes.nav_link} href="#">Акции</Nav.Link>
            <Nav.Link className={classes.nav_link} href="#">Бренды</Nav.Link>
          </Nav>
        </Navbar>
      </div>
  )
}
