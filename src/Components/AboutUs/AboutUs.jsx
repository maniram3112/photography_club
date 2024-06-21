import React from 'react';
import images from '../../assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-us' id='aboutUs'>
            <div className='about-us_title'>
                <h2>About Us</h2>
                <div className='about-us_title-content'>
                    <p>Welcome to our amazing community! Our mission is to provide top-notch resources and support for those passionate about learning and growth. 
                        Our team is dedicated to ensuring you have the best experience possible, whether you're here to develop new skills, connect with like-minded individuals, 
                        or simply explore our vast collection of content.</p>
                </div>
            </div>
            <div className='about-us_introVid'>
                <video src={images.homeVideo1} type='video/mp4' loop autoPlay muted controls={false}></video>
            </div>
        </div>
    )
}

export default AboutUs;