import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {Link} from 'react-router-dom'
import classes from './Breadcrumbs.module.scss'


const routes = [
  { path: '/', breadcrumb: 'Главная' },
  { path: '/payments', breadcrumb: 'Оплата и доставка' },
  { path: '/about', breadcrumb: 'О нас' },
  { path: '/warranty', breadcrumb: 'Обмен и возврат' },
  { path: '/contacts', breadcrumb: 'Контакты' },
];

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={classes.breadcrumbs}>
      {breadcrumbs.map(({
                          match,
                          breadcrumb
                        }) => (
        <span className={classes.item_breadcrumb} key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
        </span>
      ))}
    </div>
  );
};
