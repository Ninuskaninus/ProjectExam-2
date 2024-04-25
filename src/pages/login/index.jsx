import React from "react";
import {ContentHeader, Content, Container, PageContainer, Gradient} from "./index.styles";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/login";

export default function Login() {
  return (
    <PageContainer>
      <Container>
        <Content>
          <ContentHeader>
            <p>Please come in!</p>
            <h2>Log in</h2>
            <p>Not a member yet? <Link to="/createAccount">Create an account</Link></p>
          </ContentHeader>
          <LoginForm />
        </Content>
      </Container>
      <Gradient />
    </PageContainer>
  );
}