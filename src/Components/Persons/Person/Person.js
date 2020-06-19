import React from 'react';
import classes from './Person.module.css';


const Person = props => {

    /*const rnd = Math.random();
     if (rnd > 0.7){
         throw new Error('Something is wrong here.')
     }*/


    return (
        <div
            className={classes.Person}
            key='1'>
            <h5>Hello, My name is {props.name}.</h5>
            <p>And I am {props.age} years old.</p>
            <input
                id={props.id}
                type="text"
                onChange={props.nameChange}
                value={props.name}></input>
            <button
                id={props.id}
                onClick={props.click}
                key='2'
            >Delete
            </button>
        </div>
    );
}


export default Person;