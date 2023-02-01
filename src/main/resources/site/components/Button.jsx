import React from 'react';

export default (props) => (
    <div className='bigButton'>
        <a className={`bigButton_button ${props.buttonStyle? props.buttonStyle : 'primary '}`} href={ props.link ? props.link : '#'}>{props.text}</a> 
    </div>
);

