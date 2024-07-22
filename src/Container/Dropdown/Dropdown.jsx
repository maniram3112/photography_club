import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../../Components/Navbar/Navbar.css';
import './Dropdown.css';

const Dropdown=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const[selectedOption, setSelectedOption] = useState(null);

    const clgEve = [
        {eveName:'event1', value:'1', url:'https://example.com/event1'},
        {eveName:'event2', value:'2', url:'https://example.com/event1'},
        {eveName:'event3', value:'3', url:'https://example.com/event1'},
        {eveName:'event4', value:'4', url:'https://example.com/event1'},
        {eveName:'event5', value:'5', url:'https://example.com/event1'}
    ]

    const toggleDropdown =()=>{
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (clgEve) =>{
        setSelectedOption(clgEve);
        setIsOpen(false);
    }
    return(
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption?.eveName || "Gallery"}
                {
                    isOpen ? <FaChevronUp/> : <FaChevronDown/>
                }
            </button>
            <ul className="dropdown-menu" style={{display: isOpen ? "block" : "none"}}>
                {
                    clgEve.map((option) =>(
                        <a key={option.value} href={option.url} target="blank" rel="noopener noreferrer">
                            <li onClick={()=> handleOptionClick(option)} >
                                {option.eveName}
                            </li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dropdown;