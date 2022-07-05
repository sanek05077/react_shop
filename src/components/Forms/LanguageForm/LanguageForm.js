import React from 'react'
import {Form} from 'react-bootstrap'
import './LanguageForm.scss'



export const LanguageForm = () => {


  return (
    <form className="check-language text-right">
      <Form.Group>
        <span>RU</span>
        <Form.Check
          type="switch"
          id="lng-check"
        />
        <span>UA</span>
      </Form.Group>
    </form>
  )
}
