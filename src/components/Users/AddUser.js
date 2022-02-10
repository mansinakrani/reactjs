import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
          //[hold the latest state snapshot ,holds afunction which we can call]
    const [enteredUsername, setEnteredUsername] = useState(''); // array de-structuring (useState always returns an array with exactly two elements)
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); // entered value utilize here
        
        //only executes if we have valid inputs
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if (+enteredAge < 1) {
            return;
        } // force a conversion of entered age to a number by adding a plus
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');//resetting
        setEnteredAge('');
    };

    //function which is triggered on every keystroke of that input here.
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
