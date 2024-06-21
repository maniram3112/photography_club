import React from 'react';
import { FaInstagram } from 'react-icons/fa';
// import Features from '../../Container/Feature/Features';
import container from '../../Container';
import './Feature.css';

const {Features} = container;

const Feature = () => {
    return (
        <div className='features' id='feature'>
            <div className='feature-heading'>
                <h2>Our Features</h2>
                <p>At Focus, we celebrate the art of photography by featuring stunning and creative photographs sh
                    ared by our talented community. Using the hashtag #focusphotography, photographers from all around showcase their unique perspectives and artistic visions. Her
                    e, we highlight some of the most captivating images, giving them the recognition they deserve.</p>
            </div>
            <div className='feature-grid'>
                {Features.map((Features, index) => (
                    <div className='feature-grid_item' key={index}>
                        <a href={Features.instaLink} target='_blank' rel='noopener noreferrer'>
                            <div className='feature-image'>
                                <img src={Features.img} alt={Features.alt}/>
                                <div className='insta-logo'><FaInstagram /></div>
                            </div>
                        </a>
                        <h3>{Features.name}</h3>
                        <a href={Features.instaHandle} target='_blank' rel='noreferrer'><p>{Features.instaUserId}</p></a>
                    </div>
                ))}
            </div>
            <div className='feature-upload'>
                <button><a href='##' target='_blank'>Upload your image</a></button>
            </div>
            {/* <div className='monthly_feature-past-feature'>
                <button><a href='##' target='_blank'>View more</a></button>
            </div> */}
        </div>
    )
}

export default Feature;
