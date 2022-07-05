import React from 'react'
import {Link} from 'react-router-dom'
import classes from './TopNavigation.module.scss'



export const TopNavigation = () => {


  return (
    <div className={`${classes.top_navigation} d-none d-md-block`}>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/payments" className="nav-link">Оплата и доставка</Link>
        </li>
        <li className="nav-item">
          <Link to="/warranty" className="nav-link">Обмен и возврат</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">О нас</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </li>
      </ul>
    </div>
  )
}
