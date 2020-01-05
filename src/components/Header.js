import React, { Component } from "react";
import {Button} from './Button';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import {generateMedia} from 'styled-media-query';

class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          {/* <Logo src={logo} alt="Netflix" /> */}
          <a href="https://fontmeme.com/netflix-font/"><Logo src="https://fontmeme.com/permalink/200105/8b9176f83255bf05070d0b0c44e708e0.png"/></a>
          <NavLink to className="signIn-btn">
            SignIn
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
            <Title>Stream Now</Title>
            <SubTitle >WATCH ANYWHERE, CANCEL ANYTIME</SubTitle>
            <Button className="main-offer-btn" primary>TRY IT NOW 
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
            </Button>
        </div>
      </HeaderContainer>
    );
  }
}
export default Header;

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px'
})


// Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
    left: 20%;
  `}
`;
const HeaderContainer = styled.header`
.Icon svg {
  vertical-align: bottom !important;
  margin-left: 1.5rem;
  ${customMedia.lessThan('smTablet')`
    display: none !important;
  `}
}
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
      background: #d30913;
    }
    ${customMedia.lessThan('smTablet')`
      margin-top: 1.25rem;
      right: 5%;
    `}
  }
  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }
  // Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan('smTablet')`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}
    // Lg Main
    .main-offer-btn {
      ${customMedia.lessThan('lgDesktop')`
      margin: 0 33%;
      font-size: 1.5rem;
    `}
    
      ${customMedia.lessThan('mdDesktop')`
      margin: 0 25%;
      font-size: 1.5rem;
      `}
    
      ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size: 1.3rem;
      `}
    }
  }
`;
// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  ${customMedia.lessThan('tablet')`
    font-size: 2.3rem;
  `}
`;
// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan('smTablet')`
   font-size: 1.4rem;
   margin: 0;
  `}
`;