import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Welcome to SHAPE AREA</h1>
      <img height={250} src={logo}/>
    </div>
  )
}

export default Home