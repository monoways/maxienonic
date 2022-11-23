import React from 'react';

export default (props) => (
    <div className='bigButton'>
        <button className={`bigButton__button ${props.buttonstyle}`}>
            <span className='bigButton__text'>{props.text}</span>
        </button>
    </div>
);