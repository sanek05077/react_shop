import React from 'react'
import {Link} from 'react-router-dom'
import classes from './HeaderSocials.module.scss'
import {Instagram, Facebook} from 'react-bootstrap-icons'

export const HeaderSocials = () => {
  return (
    <ul className={`${classes.social_links} d-none d-md-block`}>
      <li>
        <Link to="/">
          <Instagram/>
        </Link></li>
      <li><Link to="/">
        <Facebook/>
      </Link></li>
    </ul>
  )
}
