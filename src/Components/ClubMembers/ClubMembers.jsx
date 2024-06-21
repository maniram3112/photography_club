import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
// import Members from '../../Container/Members/Members';
import container from '../../Container';
import './ClubMembers.css';

const {Members} = container;

const ClubMembers = () => {
    return (
        <div className='club_members' id='clubmember'>
            <div className='club_members-heading'>
                <h2>Club Members</h2>
                <p>Our Club Members, along with their designation is displayed</p>
            </div>
            <div className='club Members-profiles'>
                {
                    Members.map((Members, index) => (
                        <div className='profile-grid' key={index}>
                            <div className='profile-img'>
                                <img src={Members.dp} alt='profile pic'/>
                            </div>
                            <div className='profile-grid-item'>
                                <h3>{Members.name}</h3>
                                <h4>{Members.designation}</h4>
                                <a href={Members.urls.instaHadle} target='_blank' rel='noreferrer'><FaInstagram/></a>
                                <a href={Members.urls.linkedIn} target='_blank' rel='noreferrer'><FaLinkedin/></a>
                                <a href={Members.urls.twitter} target='_blank' rel='noreferrer'><FaXTwitter/></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClubMembers;
