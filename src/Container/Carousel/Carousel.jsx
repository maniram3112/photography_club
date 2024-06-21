import React, { useEffect, useState } from 'react';
import images from '../../assets';
import './Carousel.css';

const img = [images.carousel, images.carousel1, images.carousel2];

const Carousel = () => {
    const [activeIndex, SetActiveIndex] = useState(0);

    const nextSlide =()=>{
        SetActiveIndex((prevIndex)=>
            prevIndex === img.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = ()=>{
        SetActiveIndex((prevIndex) =>
            prevIndex === 0 ? img.length-1 : prevIndex -1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='carousel'>
            <button onClick={prevSlide} className='carousel_btn carousel_btn-prev'>
                &lt;
            </button>
            <img
                src={img[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className='carousel_img'
            />
            <button onClick={nextSlide} className='carousel_btn carousel_btn-next'>
                &gt;
            </button>
            <div className='carousel-indicators'>
                {img.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === activeIndex ? 'active' : ""}`}
                        onClick={() => SetActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel