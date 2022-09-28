import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='*' element = {<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App