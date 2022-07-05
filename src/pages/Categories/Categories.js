import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {CategoriesList} from '../../components/Categories/CategoriesList/CategoriesList'
import {SidebarCategories} from '../../components/Sidebar/SidebarCategories/SidebarCategories';

export const Categories = () => (
    <Container>
      <Row className="justify-content-end">
        <Col md={3}>
          <SidebarCategories/>
        </Col>
        <Col md={9}>
          <CategoriesList/>
        </Col>
      </Row>
    </Container>
)
