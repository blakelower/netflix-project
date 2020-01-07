import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const ChoosePlan = () => {
  return (
    <MainContainer>
        {/* header top */}
      <div className="header-top">
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/200107/8b9176f83255bf05070d0b0c44e708e0.png"
            alt="netflix-font"
          ></img>
        </Link>
        <NavLink to="/login" className="btn signIn-btn">
          Sign In
        </NavLink>
      </div>
    </MainContainer>
  );
};
export default ChoosePlan;

//Main Container

const MainContainer = styled.div`
/* //header top */
.header-top{
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #6e6e6e;
    
}
`;
