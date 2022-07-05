import React from 'react'
import {Form, Button} from 'react-bootstrap'
import classes from './SearchForm.module.scss'
import { Search } from 'react-bootstrap-icons'


export const SearchForm = () => {
  return (
    <form className={classes.search_form}>
      <Form.Control
        placeholder="Поиск"
        className={classes.input_text}
      ></Form.Control>
      <Button className={classes.button_search}>
        <Search/>
      </Button>
    </form>
  )
}
