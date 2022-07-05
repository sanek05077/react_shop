import React from 'react'
import classes from './BannerTop.module.scss'
import {Link} from 'react-router-dom'
import image_1 from '../../../assets/images/img-banner.png'

export const BannerTop = () => {
  return(
    <div className={classes.banner}>
      <Link to="/">
        <img src={image_1} alt="i"/>
      </Link>
    </div>
  )
}
