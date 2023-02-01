import React from 'react';

import Region from '@enonic/react-components/Region';

// import TemaMenu from '../../components/temaMenu/temaMenu.jsx';
import BreadcrumbMenu from '../../components/breadcrumbMenu/breadcrumbMenu.jsx';
import Footer from '../../components/footer/Footer.jsx';

import './css/default.css';


export default (props) => {
    const menuItems = props.menuItems.menuItems;
  
    // const onTemaPath = props.path.match(/\/selfi\/brukere\/tema/);
  
    // find all menuitems that are children of the element in menuItems that has the title "Brukere"
    // const brukere = menuItems.find(item => item.title === 'Brukere');
    // if brukere has children, find the one that has the title "Tema" and return its children
    // const tema = brukere && brukere.children && brukere.children.find(item => item.title === 'Tema');

    // const { title, preface, text, image } = props.content;

    const Blogpost = ({ content }) => (
        <div className="blogpost">
            <h1>{content.title}</h1>
            <p>{content.preface}</p>
            <p>{content.text}</p>
            <img src={content.image} alt="blogpost image" />
        </div>
    )
  
    return (
        <div className="blogpost-page">
            <Region name='header' regionData={props.regionsData['header']} {...props} />
            {/* {onTemaPath && <TemaMenu menuItems={tema.children} backgroundColor={props.backgroundColor} />} */}
            {props.breadcrumbItems.items.length > 1 && <BreadcrumbMenu breadcrumbItems={props.breadcrumbItems.items} />}
            <Blogpost content={props.blogContent} />
            <Region name='main'regionData={props.regionsData['main']} {...props} />
            <Footer />
        </div>
    );
  };