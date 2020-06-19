import React from 'react';
import Person from './Person/Person'

const persons = props => props.personArray.map((person, index) => {
    return (
        <Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            nameChange={props.nameChange.bind(this, person.id)}
            click={props.click.bind(this, index)}
        />
    )
});

export default persons;

