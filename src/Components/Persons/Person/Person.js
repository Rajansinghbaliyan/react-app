import React, { Component } from 'react';
import classes from './Person.module.css';


class Person extends Component {
    render() {

        /*const rnd = Math.random();
         if (rnd > 0.7){
             throw new Error('Something is wrong here.')
         }*/


        return (
            <div
                className={classes.Person}
                key='1'>
                <h5>Hello, My name is {this.props.name}.</h5>
                <p>And I am {this.props.age} years old.</p>
                <input
                    id={this.props.id}
                    type="text"
                    onChange={this.props.nameChange}
                    value={this.props.name}></input>
                <button
                    id={this.props.id}
                    onClick={this.props.click}
                    key='2'
                >Delete
            </button>
            </div>
        );
    }
}


export default Person;