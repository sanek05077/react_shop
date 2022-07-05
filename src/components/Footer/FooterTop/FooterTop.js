import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './FooterTop.module.scss'
import { GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons'

export const FooterTop = () => {
  return(
    <Container>
      <Row>
        <Col sm={6} md={3}>
          <h5>Информация</h5>
          <ul className={classes.footer_nav}>
            <li><Link to="/">Полезные статьи</Link></li>
            <li><Link to="/">Оплата и доставка</Link></li>
            <li><Link to="/">Сертификаты</Link></li>
            <li><Link to="/">Публичная оферта</Link></li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <h5>Категории</h5>
          <ul className={classes.footer_nav}>
            <li><Link to="/">Керамические обогреватели</Link></li>
            <li><Link to="/">Экономные обогреватели</Link></li>
            <li><Link to="/">Электрический теплый пол</Link></li>
            <li><Link to="/">Электрорадиаторы</Link></li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <h5>Категории</h5>
          <ul className={classes.footer_nav}>
            <li><Link to="/">Кондиционеры</Link></li>
            <li><Link to="/">Наружный обогрев</Link></li>
            <li><Link to="/">Уничтожители насекомых</Link></li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <h5>Контакты</h5>
          <ul className={classes.footer_nav}>
            <li><span className="icon"><GeoAlt className={classes.footer_icon}/></span>Ирпень, ул. Чехова, 11</li>
            <li><span className="icon"><Telephone className={classes.footer_icon}/></span><a href="tel:380672255030">+38 (067) 225-50-30</a></li>
            <li><span className="icon"><Telephone className={classes.footer_icon}/></span><a href="tel:380672255030">+38 (067) 225-50-30</a></li>
            <li><span className="icon"><Envelope className={classes.footer_icon}/></span><a href="mailto:info@gaston.com.ua">info@gaston.com.ua</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
