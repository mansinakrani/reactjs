import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //[hold the latest state snapshot ,holds afunction which we can call]
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // entered value utilize here
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //only executes if we have valid inputs
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "please enter a valid nam e and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (> 0).",
      });
      return;
    } // force a conversion of entered age to a number by adding a plus
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''; // Rarely use refs too manipulate the DOM.
    ageInputRef.current.value = '';
  };

  //function which is triggered on every keystroke of that input here.
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
