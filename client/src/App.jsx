import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import JobForm from './components/JobForm'
import Filters from './components/Filters'
import JobList from './components/JobList'

function App() {


  return (
    <>
     <Navbar/>
     <JobForm/>
     <Filters/>
     <JobList/>
    </>
  )
}

export default App
