/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Arrow from '../images/Arrow.svg'
import LogoImg  from '../images/Logo.svg';

import {Link} from 'react-router-dom'

import '../styles/Pages/landing.css';


function Landing() {
  return(
  <div id="page-landing">
     <div className="content-wrapper">
        <img src={LogoImg} alt="Logo Happy"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>
      
      <div className="location">
        <strong>São Paulo</strong>
        <span>São Paulo</span>
      </div>

    
      <Link to="/app" className="enter-app">
       
       <img src={Arrow} alt="Arrow" />
      </Link>

     </div>
    </div>
  )
}

export default Landing;