import React from 'react';
//import persons from '../Persons/Persons';

const cockpit = props => (
    <div>
    <p className={props.assignedClasses.join(' ')}>The complete React app</p>

    <button
        className={props.btnClass}
        onClick={() => props.clickedSwitch('James Bond!')}
        key='1'
    >Switch Name</button>

    <button
        className={props.btnClass}
        onClick={props.clickedToggel}
        key='2'
    >
        Show Content
        </button>

    <div>
        {props.persons}
    </div>
    </div>

);

export default cockpit;