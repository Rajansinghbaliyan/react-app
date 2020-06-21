import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClassesFunction';
//import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        //document.querySelector('input').focus();
        this.inputElement.current.focus();
    }
    render() {

        /*const rnd = Math.random();
         if (rnd > 0.7){
             throw new Error('Something is wrong here.')
         }*/


        return (
            <Aux
                key='1'>
                <h5>Hello, My name is {this.props.name}.</h5>
                <AuthContext.Consumer>
                    {(context) => (
                        <h3>{ context.authentication? "Authenticated" : "Please! LogIn"}</h3>
                    )}
                </AuthContext.Consumer>
                <p>And I am {this.props.age} years old.</p>
                <input
                    id={this.props.id}
                    type="text"
                    onChange={this.props.nameChange}
                    //ref={(inputEl)=>{this.InputElement = inputEl;}}   //New way to doing this
                    ref={this.inputElement}
                    value={this.props.name}></input>
                <button
                    id={this.props.id}
                    onClick={this.props.click}
                    key='2'
                >Delete
            </button>
            </Aux>
        );
    }
}

//Person.prototype = {
//    click: PropTypes.func,
//    name: PropTypes.string,
//    age: PropTypes.number,
//    id: PropTypes.number,
//    nameChange: PropTypes.func
//};


export default withClass(Person, classes.Person);