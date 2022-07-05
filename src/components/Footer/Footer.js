import React from 'react'
import {FooterTop} from './FooterTop/FooterTop'
import {FooterBottom} from './FooterBottom/FooterBottom'
import classes from './Footer.module.scss'

export const Footer = () => (

  <footer className={classes.footer}>
    <FooterTop/>
    <FooterBottom />
  </footer>
)
