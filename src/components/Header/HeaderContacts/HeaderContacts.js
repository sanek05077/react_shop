import React from 'react'
import {Dropdown} from 'react-bootstrap'
import classes from './HeaderContacts.module.scss'
export const HeaderContacts = () => {
  return (
    <div className={`${classes.contacts_block} d-none d-md-block`}>
      <Dropdown>
        <Dropdown.Toggle id="button-content" variant="secondary" className={classes.btn_secondary}>
          <strong>+38 (067) 225-50-30</strong> <span>ПН - ПТ: 09:00 - 20:00; СБ - НД: 10:00 - 16:00</span>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="tel:380952255030">
            +38 (095) 225-50-30
          </Dropdown.Item>
          <Dropdown.Item href="tel:380952255030">+38 (095) 225-50-30</Dropdown.Item>
          <Dropdown.Item href="#">Заказать звонок</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
