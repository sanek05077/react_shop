import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import classes from './HomeNewsItem.module.scss'

export const HomeNewsItem = (props) => {
  return(
    <Col className="col_news">
      <div className={classes.news_block}>
        <div className={classes.image_news}>
          <Link to={props.id}>
            <img src={props.image}  alt="i"/>
          </Link>
        </div>
        <h4><Link to={props.id}>{props.title}</Link></h4>
        <p>{props.preview}</p>
        <div className="btns-block">
          <Link to={props.id} className={classes.btn_item}>Подробнее</Link>
        </div>
      </div>
    </Col>
  )
}
