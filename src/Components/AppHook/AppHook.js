import React, { useState } from 'react';
import '../App.css';
import Person from '../Person/Person'

const AppHook = props => {
    const [personState, setPersonState] = useState({
        person: [
            { name: "James", age: 28 },
            { name: "Rajan", age: 24 }
        ]
    });

    const [otherState, setOtherState] = useState({
         otherState:"Some other Sstate"
    });

    const switchNameHandler = () => {
        setPersonState({
            person: [
                { name: "James Bond", age: 30 },
                { name: "Rajan Singh Baliyan", age: 24 }
            ]
        });
    };

    console.log(personState,otherState);
    return (
        <div>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.person[0].name} age={personState.person[0].age} />
            <Person name={personState.person[1].name} age={personState.person[1].age} />
        </div>
    )

}

export default AppHook;