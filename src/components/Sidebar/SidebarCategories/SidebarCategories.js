import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import classes from './SidebarCategories.module.scss'


const baseURL = "http://localhost:3000/categories";


export const SidebarCategories = () => {

  const [categories, setCategories] = React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, []);


  if (!categories) return null;


  return(

    <aside className={classes.sidebar}>
      <ul className={classes.sidebar_nav}>
        {categories.length > 0 &&
        categories.map((category) => {
          return (
            <li key={category.id}>
              <Link to={category.id}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>

  )


}
