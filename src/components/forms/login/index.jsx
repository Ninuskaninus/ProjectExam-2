import React, { useState } from "react";
import Icons from "../../icons";
import { FormBtnContainer, FormContainer, FormItem } from "../index.styles";
import FormBtn from "../../buttons/FormBtn";
import login from "../../../js/login/post.js";

export default function LoginForm() {
  const [loginObject, setLoginObject] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const submitForm = async () => {
    try {
      if (loginObject.email === "") {
        throw new Error("Please enter a valid email address.");
      } if (loginObject.password === "") {
        throw new Error("Please enter a valid password.");
      }
      await login(loginObject);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <FormContainer action="submit" id="loginForm" aria-description="Log in form">
      <FormItem className={error ? "error" : ""}>
        <label htmlFor="email">Email</label>
        <input
          placeholder={error ? "Please enter a valid email address" : ""}
          type="email"
          id="email"
          value={loginObject.email}
          onChange={(e) => setLoginObject({ ...loginObject, email: e.target.value })}
          className={error ? "error" : ""}
        />
        {error ? <Icons.MailRed /> : <Icons.Mail />}
      </FormItem>
      <FormItem className={error ? "error" : ""}>
        <label htmlFor="password">Password</label>
        <input
          placeholder={error ? "Please enter a valid password" : ""}
          type="password"
          id="password"
          value={loginObject.password}
          onChange={(e) => setLoginObject({ ...loginObject, password: e.target.value })}
          className={error ? "error" : ""}
        />
        {error ? <p>{error}</p> : null}
        {error ? <Icons.PasswordRed /> : <Icons.Password />}
      </FormItem>
      <FormBtnContainer>
        <FormBtn onClick={submitForm} Text="Log in" type="button" />
      </FormBtnContainer>
    </FormContainer>
  );
}
