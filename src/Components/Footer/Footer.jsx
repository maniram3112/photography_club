import React from 'react'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-social-media'>
                <p>For More Updates Follow Us On:</p>
                <a href='https://example.com/insta' className='fa-icon'><FaInstagram/></a>
                <a href='https://example.com/youtube' className='fa-icon'><FaYoutube/></a>
                <a href='https://example.com/telegram' className='fa-icon'><FaTelegram/></a>
                <a href='https://example.com/twitter' className='fa-icon'><FaXTwitter/></a>
            </div>
            <div className='footer-copyright'>
                &copy; {new Date().getFullYear()} Photography Club. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
