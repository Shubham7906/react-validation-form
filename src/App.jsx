import React, { useState } from "react";
import Inputt from "./form-fields/Inputt.jsx";

function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  const formFields = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,6}$",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special characters!",
    },
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "It should be valid email address!"
    },
    {
      id:3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorMessage: "Password should be 8-20 characters and includes at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id:4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      errorMessage: "Password should be match!",
      pattern: values.password,
    },
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const myFunction = () => {
    document.getElementById("form").submit();
  }

  return (
    <form onSubmit={handleSubmit} id="form">
    {
      formFields.map((field)=>(
        <Inputt 
        autoComplete="off"
        key={field.id} 
        {...field}  
        onChange={onChange} 
        value={values[field.name]} />
      ))
    }
    <button className="button" onClick={myFunction}>Submit</button>
    </form>
  )
}

export default App;
