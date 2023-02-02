import react, { useState } from "react";

import ExpandedMobileMenu from './expandedMobileMenu.jsx';

export default (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        document.body.classList.toggle('no-scroll');
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const menuItemsArray = [];
    // this loops through three levels of menu items and pushes them to the menuItemsArray to get a flat array of all menu items, it also adds a layer property to each item
    props.menuItems.forEach((item) => {
        item.layer = 0;
        menuItemsArray.push(item);
        if (item.hasChildren) {
            item.children.forEach((child) => {
                child.layer = 1;
                child.father = item.title;
                menuItemsArray.push(child);
                if (child.hasChildren) {
                    child.children.forEach((child2) => {
                        child2.father = child.title;
                        child2.layer = 2;
                        menuItemsArray.push(child2);
                    })
                }
            })
        }
    })
        
    
    
    const activeMenuItem = menuItemsArray.find(item => item.isActive);

    return (
        <>
        <div className='mobileMenu'>
            <div onClick={toggleMobileMenu} className='hamburger'>
                <div className='hamburger__line hamburger__line__top'></div>
                <div className='hamburger__line hamburger__line__middle'></div>
                <div className='hamburger__line hamburger__line__bottom'></div>
            </div>
            {/* <button onClick={toggleMobileMenu}>{activeMenuItem?.title}</button> */}
            {mobileMenuOpen && <ExpandedMobileMenu 
                                    menuItemsArray={menuItemsArray} 
                                    menuItems={props.menuItems} 
                                    activeMenuItem={activeMenuItem} 
                                    toggleMobileMenu={toggleMobileMenu} />}
        </div>
        <style jsx>{`
        .hamburger{
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 100000;
            position: relative;
        }
        .hamburger__line{
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background-color: black;
            transform-origin: 1px;
            transition: all 0.3s linear;
        }
        .hamburger__line{
            background-color: ${ mobileMenuOpen ? 'white' : 'black'}
        }
        .hamburger__line__top{
            transform: ${ mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .hamburger__line__middle{
            transform: ${ mobileMenuOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${ mobileMenuOpen ? 0 : 1};
        }
        .hamburger__line__bottom{
            transform: ${ mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
        `}</style>
        </>
    )
}


