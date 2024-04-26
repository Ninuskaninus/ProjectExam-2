import React, {useState} from "react";
import {FormCheckbox, FormContainer, FormItem, FormBtnContainer} from "../index.styles";
import Icons from "../../icons";
import FormBtn from "../../buttons/FormBtn";
import register from "../../../js/createUser/post.js";

export default function SignUp() {
  const [registerObject, setRegisterObject] = useState({ name: "", email: "", password: "", venueManager: false });
  const [error, setError] = useState(null);

  const submitForm = async () => {
    try {
        if (registerObject.email === "") {
        throw new Error("Please enter a valid email address.");
      }
      if (!checkEmail(registerObject.email)) {
        throw new Error("Email is not valid.");
      }
      if (registerObject.password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
      }
      if (!registerObject.email.endsWith("@stud.noroff.no")) {
        throw new Error("Email must end with '@stud.noroff.no'.");
      }

      if (registerObject.password === "") {
        throw new Error("Please enter a valid password.");
      }
      
      await register(registerObject);
    } catch (error) {
      setError(error.message);
    }
  };

  const checkEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  return (
    <FormContainer action="">
      <FormItem className={error ? "error errorMessage" : ""}>
        <label htmlFor="username">Username</label>
        <input
          value={registerObject.name}
          onSubmit={checkEmail}
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => setRegisterObject({ ...registerObject, name: e.target.value })}
        />
        {error ? <Icons.UserIconRed /> : <Icons.UserIcon />}
      </FormItem>
      <FormItem className={error ? "error" : ""}>
        <label htmlFor="email">Email</label>
        <input
          value={registerObject.email}
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setRegisterObject({ ...registerObject, email: e.target.value })}
        />
        {error ? <Icons.MailRed /> : <Icons.Mail />}
      </FormItem>
      <FormItem className={error ? "error" : ""}>
        <label htmlFor="password">Password</label>
        <input
          value={registerObject.password}
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => setRegisterObject({ ...registerObject, password: e.target.value })}
          minLength={8}
        />
        {error ? <p>{error}</p> : null}
        {error ? <Icons.PasswordRed /> : <Icons.Password />}
      </FormItem>
      <FormCheckbox>
        <input
          type="checkbox"
          name="venuemanager"
          id="venuemanager"
          value={registerObject.venueManager}
          onChange={(e) => setRegisterObject({ ...registerObject, venueManager: e.target.checked })}
        />
        <label htmlFor="venuemanager">I want to be venue manager*</label>
      </FormCheckbox>
      <FormBtnContainer>
        <FormBtn onClick={submitForm} type="button" Text="Sign Up" />
      </FormBtnContainer>
    </FormContainer>
  );
}