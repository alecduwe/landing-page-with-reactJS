import React from 'react'
import '../App.css';
import { Button } from './Button';
import '../components/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/star2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hreo-btns">

        <Button className="btns" buttonStyle='btn--primary'
          buttonSize='btn--large'> GET STARTED </Button>

        <Button className="btns" buttonStyle='btn--outline'
          buttonSize='btn--large'> WATCH TRAILER <i className='far fa-play-circle' />
        </Button>

      </div>
    </div>
  )
}

export default HeroSection
