import React from 'react';
// import posters from '../../Container/Posters/Posters';
import container from '../../Container';
import './EventWorkshops.css';

const {Posters: posters} = container;

function EventWorkshops() {
    return (
        <div className='events' id='events'>
            <div className='heading'>
                <h2>Events</h2>
                <p>Event details are displayed here</p>
            </div>
            <div className='events_workshop-posters'>
                {posters.map((poster, index) => (
                    <div className='posters-grid' key={index}>
                        <div className='poster-img'>
                            <img src={poster.poster} alt={poster.title} />
                        </div>
                        <div className='posters-grid-item'>
                            <h3>{poster.title}</h3>
                            <ul>
                                <li>Last date: {poster.lastDate}</li>
                                <li>Theme: {poster.theme}</li>
                                <li>Results on: {poster.resultDate}</li>
                            </ul>
                            <button className='btnn'>
                                <a href={poster.registrationLink} target='_blank' rel='noreferrer'>Register Now</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventWorkshops;
