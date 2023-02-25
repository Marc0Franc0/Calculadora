import React from 'react'
import logo from '.././imagenes/logo.png'
import '../hojas-de-estilo/Logo.css'

const Logo = (props) => (

    <div className='logo-contenedor'>
    <img
      src={logo}
      className='logo'
      alt='Logo React' />
  </div>

);

export default Logo;