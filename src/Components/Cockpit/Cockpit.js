import React, { useEffect, useRef, useContext } from 'react';
//import persons from '../Persons/Persons';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {

    const authContext = useContext(AuthContext);

    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved to google cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] Cleanup Work in useEffect'); //clean up work is done is there is any return
        };
    }, []);

    /* run when the creation and the updation of the props.title is done 
    if want to run only ones then pass the [] empty array.*/


    useEffect(() => {   //run after every render cycle
        console.log('[cockpit.js] 2nd useEffect');
        toggleButtonRef.current.click();
        return () => {
            console.log('[cockpit.js] 2nd useEffect CleanUp work');

        }
    }, [])


    let btnClass = '';

    const assignedClasses = [];

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personLength <= 2)
        assignedClasses.push(classes.red);

    if (props.personLength <= 1)
        assignedClasses.push(classes.bold);



    return (

        <div className={classes.Cockpit}>
            {console.log('[cockpit.js] rendering...')}
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>The complete React app</p>

            <button
                ref={toggleButtonRef}
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

         
                    <button
                        className={btnClass}
                        onClick={authContext.login}
                    >Log in
        </button>
               

            <div>
                {props.persons}
            </div>
        </div>

    );
}

export default React.memo(Cockpit);