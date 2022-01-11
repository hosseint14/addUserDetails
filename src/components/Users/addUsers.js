import React, { useState ,Fragment} from "react";
import Form from "../UI/Form/form";
import ErrorModal from "./errorModal";

const AddUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter value in Name and Age",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please eneter valid Age(>0)",
      });
      return;
    }
    {
      props.onAddUser(userName, age);
    }
    setUserName("");
    setAge("");
  };

  const onUserChange = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const errorHandler=()=>{
    setError(null)
  }
  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Form
        onClick={addUserHandler}
        onUserChange={onUserChange}
        onAgeChange={onAgeChange}
        userNameValue={userName}
        ageValue={age}
      />
    </Fragment>
  );
};

export default AddUsers;
