import React, { useEffect } from 'react';
//import persons from '../Persons/Persons';
import classes from './Cockpit.module.css';

const Cockpit = props => {

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved to google cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] Cleanup Work in useEffect'); //clean up work is done is there is any return
        };
    }, [props.title]);  /* run when the creation and the updation of the props.title is done 
                            if want to run only ones then pass the [] empty array.*/
    useEffect(()=>{
        console.log('[cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] 2nd useEffect CleanUp work')
        }
    })


    let btnClass = '';

    const assignedClasses = [];

    if (props.state.showPerson) {
        btnClass = classes.Red;
    }

    if (props.state.person.length <= 2)
        assignedClasses.push(classes.red);

    if (props.state.person.length <= 1)
        assignedClasses.push(classes.bold);



    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
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

export default Cockpit;