import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import { generateMedia } from "styled-media-query";

class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="header-top"></div>
        <a href="https://fontmeme.com/netflix-font/">
          <Logo src="https://fontmeme.com/permalink/200105/8b9176f83255bf05070d0b0c44e708e0.png" />
        </a>
        <LoginForm />
        <LoginFooter />
      </div>
    );
  }
}
export default Login;

// Media
const customMedia = generateMedia({
  tablet: "640px",
  lgTablet: "740px"
});

// Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
  top: 45%;
  left: 23%;
`}
`;
