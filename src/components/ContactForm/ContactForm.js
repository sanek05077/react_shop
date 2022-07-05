import React from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import classes from './ContactForm.module.scss'


export const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event, data) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        console.log("invalid")
      } else {
        event.preventDefault();
        console.log("valid")
      }

      setValidated(true);
  }

  return(
    <div className={classes.contact_form}>
      <Form name="contactForm" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">
            <span>*</span> Ваше имя
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            id="name"></Form.Control
          >
          <Form.Control.Feedback type="invalid">
            Введите имя
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">
            <span>*</span> E-Mail для связи
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            id="email"></Form.Control
          >
          <Form.Control.Feedback type="invalid">
            Введите email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">
            <span>*</span> Сообщение
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            required
            id="message"></Form.Control
          >
          <Form.Control.Feedback type="invalid">
            Введите сообщение
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="btn btn-brand">Отправить</Button>
      </Form>
    </div>
  )
}
