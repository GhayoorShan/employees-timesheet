import React from "react";
import styled from "styled-components";

function Header(props) {
  console.log("User in Appstate", props.user);
  return (
    <Container>
      <AppName>
        <h2>EMPLOYEES TIMESHEET</h2>
      </AppName>
      <UserContainer>
        <Name>{props.user.name}</Name>
        <UserImage>
          <img
            alt="user"
            src={
              props.user.photo
                ? props.user.photo
                : "https://i.imgur.com/6VBx3io.png"
            }
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #1d1f27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppName = styled.div`
  margin-right: 50px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  margin: 5px 0;

  img {
    width: 100%;
  }
`;
