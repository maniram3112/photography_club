import React, { useEffect, useState } from 'react';

import './ScrollToTop.css';

const ScrollToTop = () => {

    const [isVisible, SetIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if(window.pageYOffset >300){
            SetIsVisible(true);
        }
        else{
            SetIsVisible(false);
        }
    };

    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    },[]);

    return (
        <div>
            {isVisible && (
                <button className='scrollBtn' onClick={scrollToTop}>↑</button>
            )}
        </div>
    );
};

export default ScrollToTop
