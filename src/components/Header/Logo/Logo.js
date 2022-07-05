import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import classes from './Logo.module.scss'


export const Logo = () => {
  return (
    <strong className={classes.logo}>
      <Link to="/"><img src={logo} alt="logo"/></Link>
    </strong>
  )
}
