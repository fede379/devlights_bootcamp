import { useRef, useState } from "react";
import RegisterError from "./RegisterError";
import "./RegisterForm.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const nameRef = useRef();
  const errorRef = useRef();

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onLastnameChange(event) {
    setLastname(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClick() {
    // const nameInput = nameRef.current;
    // nameInput.value = "Test to copy";
    // nameInput.focus();
    // nameInput.select();
    // document.execCommand("copy");

    // NOT RECOMMENDED
    const errorComponent = errorRef.current;
    errorComponent.setError("Falta el nombre");
    errorComponent.toggle();
  }

  function closeError() {
    // setError("");
  }

  return (
    <div className="RegisterForm">
      <h3 className="RegisterFormTitle">Register</h3>
      <div className="RegisterFormContainer">
        <label htmlFor="name" className="RegisterFormInputLabel">
          Name
        </label>
        <input
          ref={nameRef}
          name="name"
          id="name"
          type="text"
          className="RegisterFormInput"
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="lastname" className="RegisterFormInputLabel">
          Lastname
        </label>
        <input
          name="lastname"
          id="lastname"
          type="text"
          className="RegisterFormInput"
          value={lastname}
          onChange={onLastnameChange}
        />
        <label htmlFor="email" className="RegisterFormInputLabel">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="RegisterFormInput"
          value={email}
          onChange={onEmailChange}
        />
        <label htmlFor="password" className="RegisterFormInputLabel">
          Password
        </label>
        <input
          name="password"
          id="password"
          value={password}
          type="password"
          className="RegisterFormInput"
          onChange={onPasswordChange}
        />
        <button className="RegisterFormButton" onClick={handleClick}>
          Registrarse
        </button>
        {/* {error.length > 0 ? (
          <div className="RegisterFormError">
            <p className="RegisterFormErrorMessage">{error}</p>
            <button className="RegisterFormErrorButton" onClick={closeError}>
              X
            </button>
          </div>
        ) : null} */}
        <RegisterError ref={errorRef} />
      </div>
    </div>
  );
}

export default RegisterForm;
