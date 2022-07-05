import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Breadcrumbs} from '../../components/Breadcrumbs/Breadcrumds'
import {ContactForm} from '../../components/ContactForm/ContactForm'
import classes from './Contacts.module.scss'

export const Contacts = () => (
  <div className="main contact-main">
    <Container>
      <Row>
        <Col>
          <Breadcrumbs/>
        </Col>
      </Row>
      <div className="light-section">
        <Row>
          <Col md={6} lg={7}>
            <h1>Контактная информация</h1>
            <ul className={classes.contacts_list}>
              <li>
                <strong className="title">Адрес магазина</strong>
                <span>г. Ирпень, ул. Чехова, 11</span>
              </li>
              <li>
                <strong className="title">Юридическая информация</strong>
                <span>ФЛП Дрокина Е.А.<br/> ИНН 2677819062 <br/>р/с UA533052990000026007000114248<br/> Банк АТ КБ "ПРИВАТБАНК", МФО 305299</span>
              </li>
              <li>
                <strong className="title">Телефоны</strong>
                <span>Телефон: +38 (095) 225-50-30</span>
                <span>Телефон: +38 (067) 225-50-30</span>
                <span>Телефон: +38 (093) 170-38-38</span>
                <span>E-mail: <a href="mailto:">info@gaston.com.ua</a></span>
              </li>
              <li>
                <strong className="title">Режим работы</strong>
                <span>ПН-ПТ: 09:00 - 18:00</span>
                <span>СБ: 10:00 - 16:00</span>
                <span>ВС: Выходной </span>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={5}>
            <ContactForm/>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)
