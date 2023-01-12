import react, { useState, useRef, useEffect } from "react";

// import styles from "./Hamburger.module.css";

import Hamburger from "./Hamburger.jsx";

export default (props) => {
    const [menuOpen, setMenuOpen] = react.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log('menu toggled to ', menuOpen);
    }


    return (
        <>
            <nav className='navigation'>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <li key={index} className='navigation__item'><a href={item.url}>{item.title}</a></li>
                        )
                    })
                    }
                </ul>
            </nav>
            <div onClick={() => { console.log('is the onClick working even?');toggleMenu(); }} className='hamburgerContainer'>
                <Hamburger isOpen={menuOpen} onClick={() => { console.log('is the onClick working even?');toggleMenu(); }} />
            </div>
            
            <style jsx>{`
                ${ menuOpen ? `
                    .navigation{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;` : 
                    `.navigation{
                        display: none;
                    }`
                }
                @media (min-width: 768px){
                    .hamburgerContainer{  
                        display: none;
                        z-index: 6;
                    } 
                }
                @media (max-width: 767px){
                    .hamburgerContainer{
                        display:fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
            `}</style>

        </>
    );
}