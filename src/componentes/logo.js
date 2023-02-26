import React from 'react';
import Logo from '.././imagenes/logo.png';
import '../hojas-de-estilo/Logo.css';

const Logo = () => (

    <div className='logo-contenedor'>
    <img
      src={Logo}
      className='logo'
      alt='Logo React' />
  </div>

);

export default Logo;
