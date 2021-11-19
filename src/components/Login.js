import React from "react";
import styled from "styled-components";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { authentication } from "./../firebase";

function Login(props) {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };

        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/a/3/a3b13f18c7f0fbc35fb1d6c3d6e4b6419ab2db46.png" />
        <h2>Employees TimeSheet</h2>
        <SignInButton onClick={() => signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background: white;
  padding: 80px;
  border-radius: 5px;
`;
const SlackImg = styled.img`
  height: 100px;
`;
const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
