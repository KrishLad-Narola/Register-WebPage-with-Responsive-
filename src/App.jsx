import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import UserRegistrationForm from './components/UI/Forms/UserRegistrationForm/UserRegistrationForm'
import { AppLayout } from './Layout/AppLayout'

import Contact from './Pages/Contact'
import About from './Pages/About'
import {Home} from './Pages/Home'
import Login from './components/Login'
import { useForm } from 'react-hook-form'



function App() {
    
    const {register ,formState : {errors} , handleSubmit} = useForm ()

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<UserRegistrationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact register={register} errors={errors} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />     
        </Route>
      </Routes>
    </Router>
  )
}

export default App