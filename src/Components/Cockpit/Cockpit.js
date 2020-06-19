import React from 'react';
//import persons from '../Persons/Persons';
import classes from './Cockpit.module.css';

const cockpit = props => {

    let btnClass = '';

    const assignedClasses = [];

    if (props.state.showPerson){
        btnClass = classes.Red;
    }

if (props.state.person.length <= 2)
    assignedClasses.push(classes.red);

if (props.state.person.length <= 1)
    assignedClasses.push(classes.bold);

    

    return (
    <div className={classes.Cockpit}>
    <p className={assignedClasses.join(' ')}>The complete React app</p>

    <button
        className={btnClass}
        onClick={() => props.clickedSwitch('James Bond!')}
        key='1'
    >Switch Name</button>

    <button
        className={btnClass}
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
}

export default cockpit;