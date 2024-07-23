import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import images from '../../assets';
// import Dropdown from '../../Container/Dropdown/Dropdown';
import container from '../../Container';
import './Navbar.css';

const {Dropdown} = container;

const Menu = () =>(
    <>
        <p><a href="#aboutUs">About Us</a></p>
        <p><a href="#feature">Featured</a></p>
        {/* <p>
            <a href="#gallery">Gallery</a>
        </p> */}
        <p><a href="#events">Events</a></p>
        <p><a href="#clubmember">Club Members</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    // const [title, setTitle] = useState('Focus');
    const [scrolled, setScrolled] = useState(false);

    // const handleMouseEnter = () =>{
    //     setTitle('Photography and Videography club');
    // }
    // const handleMouseLeave=()=>{
    //     setTitle('Focus');
    // }

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset > 100){
            setScrolled(true);
        }else{
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={images.logo4} alt='logo'/>
                    <p className='navbar-links_title'
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    // >{title}</p>
                    >Snap Syndicate</p>
                </div>
                <div className='navbar-links_container'>
                    <Menu/>
                    <Dropdown/>
                </div>
                </div>
            <div className='navbar-menu'>
                {
                    toggleMenu
                    ?
                    <RiCloseLine color='#fff' size={22} onClick={()=> setToggleMenu(false)}/>
                    :
                        <RiMenu3Line color='#fff' size={22} onClick={()=> setToggleMenu(true)}/>
                }
                {
                    toggleMenu &&(
                        <div className='navbar-menu_container scale-up-center'>
                            <div className='navbar-menu_container_links'>
                                <Menu/>
                                <Dropdown/>
                    </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
