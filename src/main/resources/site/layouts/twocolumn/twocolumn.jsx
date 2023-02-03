/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';
import Region from '@enonic/react-components/Region';


// import styles from './css/twocolumn.module.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1(props) {
  const classes = {
    // left: 'leftRegion',
    // right: 'rightRegion',
    left: 'leftRegion', //styles.leftRegion,
    right: 'rightRegion', //styles.rightRegion,
  }

  if (props.border) {
    classes.left += ' twoColBorder';
    // classes.right += ' twoColBorder';
  }

  return (
    <>
    <div style={{maxWidth:`${props.maxWidth || 90}%`}} className='regionsContainer'>
      <div className='layoutContainer' style={{backgroundColor:`${props.leftBackgroundColor}`}}>
        <Region regionData={props.regionsData['left']} name='left' addClass={classes.left} />
      </div>
      <div className='layoutContainer' style={{backgroundColor:`${props.rightBackgroundColor}`, }}>
        <Region regionData={props.regionsData['right']} name='right' addClass={classes.right} />
      </div>
    </div>

    <style jsx>{`
      .regionsContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        margin: 2.5rem auto;
      }
      .layoutContainer {
        display: flex;
        justify-content: center;
        margin: auto;
        flex-basis: 50%;
      }
        
      @media screen and (max-width: 900px) {
        .regionsContainer {
          flex-direction: column;
          max-width: 90%!important;
        }
        .leftRegion {
          width: 100%;
        }
        .rightRegion {
          width: 100%;
        }
      `}</style>
    </>
  )
}
