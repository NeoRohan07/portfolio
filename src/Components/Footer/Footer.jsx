import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deleniti. Facere tempora voluptatum obcaecati itaque necessitatibus veritatis soluta ipsam, nobis nam id inventore ducimus cupiditate cumque illo ad maiores omnis.</p>
            </div> 
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Rohan Khwal. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <a className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer