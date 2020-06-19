import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = props => {
    const style = {
        backgroundColor: "white",
        font: "inherit",
        padding: "10px",
        border: "1px solid blue",
        boxShadow: "0 2px 3px #ccc",
        margin: "2px",
        cursor: "pointer",
        ':hover': {
            backgroundColor: 'red'
        }

    };

    const boxStyle = {
        ':hover': {
            background: '#eee'
        },
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };


    return (
        <div
            className="Person"
            style={boxStyle}
            key='1'>
            <h5 style={props.style}>Hello, My name is {props.name}.</h5>
            <p>And I am {props.age} years old.</p>
            <input
                id={props.id}
                type="text"
                onChange={props.nameChange}
                value={props.name}></input>
            <button
                style={style}
                id={props.id}
                onClick={props.click}
                key='2'
            >Delete
            </button>
        </div>
    );
}


export default Radium(Person);