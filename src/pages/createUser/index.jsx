import React from "react";
import {ContentBottom, ContentHeader, Content, Container, PageContainer, Gradient} from "../login/index.styles";
import { Link } from "react-router-dom";
import SignUp from "../../components/forms/createuser";

export default function CreateUser() {
  return (
    <PageContainer>
      <Container>
        <Content>
          <ContentHeader>
            <p>Join us!</p>
            <h2>Create new account</h2>
            <p>Already a member? <Link to="/login">Log in</Link></p>
          </ContentHeader>
          <SignUp />
          <ContentBottom>
            <p>*If you want to upload and rent your venues, pick “join as host”. Note: Only a @stud.noroff.no mail is accepted as host user.</p>
          </ContentBottom>
        </Content>
      </Container>
      <Gradient />
    </PageContainer>
  );
}