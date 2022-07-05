import React from 'react'
import {HeaderTop} from './HeaderTop/HeaderTop'
import {HeaderBottom} from './HeaderBottom/HeaderBottom'
import {HeaderNavigation} from './HeaderNavigation/HeaderNavigation'


export const Header = () => (

  <React.Fragment>
    <HeaderTop/>
    <HeaderBottom />
    <HeaderNavigation />
  </React.Fragment>
)
