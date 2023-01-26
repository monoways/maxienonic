/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';
//import {toStr} from '@enonic/js-utils/dist/cjs';
import Regions from '@enonic/react-components/Regions';
import Logo from '../../../assets/images/logo.svg';
import Menu from '../../components/menu.jsx';
import Burgermenu from '../../components/hamburger/nav.jsx';
import BreadcrumbMenu from '../../components/breadcrumbMenu/breadcrumbMenu.jsx';
import TemaMenu from '../../components/temaMenu/temaMenu.jsx';
import Header from '../../parts/header/header.jsx';
import Footer from '../../components/footer/Footer.jsx';

import './css/default.css';
import Region from '@enonic/react-components/Region';

/*function testNashornPolyfills() {
  console.debug('context', toStr(context)); // undefined
  console.debug('typeof context', typeof context); // object

  const map1 = new Map();
  map1.set('a', 1);
  map1.set('b', 2);
  console.debug('map1', toStr(map1));
  map1.delete('b');
  console.debug('map1.size', map1.size); // undefined
  console.debug("map1.get('a')", map1.get('a'));

  const mySet1 = new Set();
  mySet1.add(1);
  mySet1.add(5);
  console.debug('mySet1', toStr(mySet1));
  console.debug('mySet1.has(1)', mySet1.has(1));
  console.debug('mySet1.has(2)', mySet1.has(2));
  mySet1.delete(5)
  console.debug('mySet1.size', mySet1.size); // undefined

  console.debug('typeof window', typeof window); // object
  console.debug('typeof window.addEventListener', typeof window.addEventListener); // function
  console.debug('typeof window.document', typeof window.document); // object
  console.debug('typeof window.Map', typeof window.Map); // function
  console.debug('typeof window.Set', typeof window.Set); // function

  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const returnedTarget = Object.assign(target, source);
  console.log('source', toStr(source));
  console.log('target', toStr(target));
  console.log('Object.assign(target, source)', toStr(returnedTarget));

  // com.enonic.lib.react4xp.ssr.errors.RenderException: Timer already cancelled.
  /*setTimeout(() => {console.log("This should appear last after 5 seconds")}, 5000);
  setTimeout(() => {console.log("This should appear in the middle after 3 seconds")}, 3000);
  setTimeout(() => {console.log("This should appear first after 1 second")}, 1000);

  // com.enonic.lib.react4xp.ssr.errors.RenderException: Timer already cancelled.
  var intervalID = setInterval(() => {
    console.debug('setInterval() delay:100');
  }, 100)
  setTimeout(() => {
    console.debug('setTimeout() delay:1000');
    clearTimeout(intervalID);
  }, 1000)*
} // testNashornPolyfills*/


export default (props) => {
  const menuItems = props.menuItems.menuItems;
  // console.log(JSON.stringify(menuItems), 'menuItems.hasChildren');
  // console.log(JSON.stringify(props.content), 'props.content');
  // console.log(JSON.stringify(props.breadcrumbItems), 'props.breadcrumItems');
  //testNashornPolyfills();

  const onTemaPath = props.content._path.match(/\/selfi\/brukere\/tema/);
  // console.log('onTemaPath', onTemaPath);

  // find all menuitems that are children of the element in menuItems that has the title "Brukere"
  const brukere = menuItems.find(item => item.title === 'Brukere');
  // if brukere has children, find the one that has the title "Tema" and return its children
  const tema = brukere && brukere.children && brukere.children.find(item => item.title === 'Tema');

  return (
      <div style={{backgroundColor: props.backgroundColor}} className="default-page">
          {/* <header className='header'>
            <img className="header-logo" src={Logo} alt="logo" />
            <Menu menuItems={menuItems}/>
            <Burgermenu menuItems={menuItems}/>
          </header> */}
          {/* <Header menuItems={menuItems} /> */}
          <Region name='header' regionData={props.regionsData['header']} {...props} />
          {onTemaPath && <TemaMenu menuItems={tema.children} backgroundColor={props.backgroundColor} />}
          {props.breadcrumbItems.items.length > 1 && <BreadcrumbMenu breadcrumbItems={props.breadcrumbItems.items} />}
          <Region name='main'regionData={props.regionsData['main']} {...props} />
          <Footer />
      </div>
  );
};
// regionData={props.headerRegion}