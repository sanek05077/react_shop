import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route, } from 'react-router'
import {Home} from './pages/Home/Home'
import {About} from './pages/About/About'
import {Warranty} from './pages/Warranty/Warranty'
import {Contacts} from './pages/Contacts/Contacts'
import {Payments} from './pages/Payments/Payments'
import './App.scss'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Categories} from './pages/Categories/Categories'
import {NotFound} from './pages/NotFound/NotFound'
import {Category} from './components/Category/Category'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/payments" element={<Payments/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/warranty" element={<Warranty/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/categories/:categoryId" element={<Category/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
