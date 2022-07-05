import React from 'react'
import {Col} from 'react-bootstrap'
import classes from './CategoriesItem.module.scss'
import {Link} from 'react-router-dom'

export const CategoriesItem = (props) => {

  return(
    <Col className={classes.col_category}>
      <div className={classes.category}>
        <Link to={`/categories/${props.id}`}>
          <span className={classes.image_category}>
            <img src={`images/${props.image}`} alt="Alt img" />
          </span>
          <span className="title-category">{props.name}</span>
        </Link>
      </div>
    </Col>
  )
}
