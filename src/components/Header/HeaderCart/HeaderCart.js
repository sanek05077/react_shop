import React from 'react'
import {Link} from 'react-router-dom'
import image from '../../../assets/images/img-01.png'
import classes from './HeadeCart.module.scss'
import {Basket2Fill} from 'react-bootstrap-icons'
import {Trash} from 'react-bootstrap-icons'




export const HeaderCart = () => {


  return (

        <div className={classes.basket}>
          <div className={classes.basket_icon}>
            <Basket2Fill/>
            <span className={classes.count}>0</span>
          </div>
          <span className={`${classes.basket_text} d-none d-md-block`}>
              Ваша корзиа пуста
            </span>
          <div className={classes.basket_block}>
            <h4>Корзина</h4>
            <p>Ваша корзина пуста</p>
            <ul className={classes.list_products}>
              <li>
                <div className={classes.image_product}>
                  <img src={image} alt="product"/>
                </div>
                <span className={classes.product_name}>Керамический полотенцесушитель Stinex 250 Ватт</span>
                <span className={classes.product_price}>1 520 грн</span>
                <span className="remove">
                  <Trash/>
                </span>
              </li>
            </ul>
            <div className="total-block">
              <span>Итого:</span>
              <strong>1 520 грн</strong>
            </div>
            <div className="basket-btn">
              <Link to="/" className="btn btn-brand">Оформить заказ</Link>
            </div>
          </div>
        </div>
  )
}
