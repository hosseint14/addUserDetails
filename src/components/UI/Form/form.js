import { useRef } from "react";
import Button from "../Button/button";
import Card from "../Card/card";
import classes from "./form.module.css";

const Form = (props) => {
  const userRef = useRef();
  const ageRef = useRef();

  return (
    <Card className={classes.input}>
      <form onSubmit={props.onAddUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={props.userNameValue}
          onChange={props.onUserChange}
          ref={userRef}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={props.ageValue}
          onChange={props.onAgeChange}
          ref={ageRef}
        />
        <Button type="submit" caption="Add Value" onClick={props.onClick} />
      </form>
    </Card>
  );
};

export default Form;
