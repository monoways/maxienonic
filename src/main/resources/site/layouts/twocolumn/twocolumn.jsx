/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';
import Region from '@enonic/react-components/Region';


// import styles from './css/twocolumn.module.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1({ regionsData, names, maxWidth }) {
  const classes = {
    // left: 'leftRegion',
    // right: 'rightRegion',
    left: 'leftRegion', //styles.leftRegion,
    right: 'rightRegion', //styles.rightRegion,
  }

  return (
    <>
    <div style={{maxWidth:`${maxWidth || 90}%`}} className='regionsContainer'>
      <Region regionData={regionsData['left']} name='left' addClass={classes.left} />
      <Region regionData={regionsData['right']} name='right' addClass={classes.right} />
      {/* <Regions {...{ regionsData, names, classes }} /> */}
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
      .rightRegion {
        display: flex;
        justify-content: center;
        margin: auto;
        flex-basis: 50%;
      }
      .leftRegion {
        display: flex;
        justify-content: center;
        margin: auto;
        flex-basis: 50%;
      }
        
      @media screen and (max-width: 768px) {
        .regionsContainer {
          flex-direction: column;
          max-width: 90%;
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
