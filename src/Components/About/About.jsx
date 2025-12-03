import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="Profile_img" />
            </div>
             <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus aliquid illo esse optio omnis quaerat numquam necessitatibus molestiae saepe enim facilis, nam soluta pariatur quibusdam assumenda est nulla officiis.</p>
                    <p>ahha ahaha ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus veritatis recusandae quos aut odit corrupti deleniti, rem totam, ipsum dicta facere animi fugit mollitia natus deserunt possimus inventore tempora beatae.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>React</p>
                        <hr />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                         <hr />
                    </div>
                    <div className="about-skill">
                        <p>PHP</p>
                         <hr />
                    </div>
                    <div className="about-skill">
                        <p>DataBase</p>
                         <hr />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
             <div className="about-achivement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
             <div className="about-achivement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About