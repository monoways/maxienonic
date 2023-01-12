import react from "react";

// import styles from "./Hamburger.module.css";

export default ({ isOpen }) => {
    return (
        <>
            <div className='hamburger'>
                <div className='hamburger__line hamburger__line__top'></div>
                <div className='hamburger__line hamburger__line__middle'></div>
                <div className='hamburger__line hamburger__line__bottom'></div>
            </div>

            <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .hamburger__line{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .hamburger__line__top{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .hamburger__line__middle{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .hamburger__line__bottom{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
            `}</style>
        </>
    );
}
