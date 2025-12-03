import React from 'react'
import './Hero.css'
import heroImage from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <figure>
            <img src={heroImage} alt="gg" />
        </figure>
        <h1><span>I'm Jacked</span>, Front-End developer based on Nepal.</h1>
            <p>I am a frontend developer from Nepal. with more than 10 years of Experience</p>
            <div className='hero-action'>
                <div className="hero-connect">
                    <a className='anchor-link' offset={50} href='#contact'>
                       Connect With Me
                    </a>
                </div>
                <div className="hero-resume">
                    My resumee
                </div>
            </div>
    </div>
  )
}

export default Hero