import React from 'react'
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import {CategoriesItem} from '../CategoriesItem/CategoriesItem'
import classes from './CategoriesList.module.scss'


const baseURL = process.env.REACT_APP_BASE_URL_CATEGORIES;

export const CategoriesList = () => {

  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  return(
    <div className={classes.categories}>
      <Container>
        <Row>
          <Col>
            <div className={classes.heading_box_categories}>
              <h2>Категории</h2>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3}>
          {categories.length > 0 &&
          categories.map((category) => {
            return (
              <CategoriesItem
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  )
}
