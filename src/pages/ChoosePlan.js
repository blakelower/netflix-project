import React, {Component}from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import checkmarkLogo from '../images/Checkmark.png';
import {Button} from '../components/Button';
import FooterChoosePlan from "../components/chooseplan/FooterChoosePlan";

class  ChoosePlan extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
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
                <NavLink to="/login" className="btn-signIn-btn">
                  Sign In
                </NavLink>
              </div>
              {/* header content */}
              <div className="header-content">
                <img className="checkmark-logo" src={checkmarkLogo} alt="checkmark logo"/>
                <p>Step <strong> 1</strong> of <strong>3</strong>
                </p>
                <h2>Choose Your Plan.</h2>
                <div className="checked-list">
                    <div className="bullet">No commitments, cancel anytime.</div>
                    <div className="bullet"> Everything on Pupflix for one low price.</div>
                    <div className="bullet">Unlimited pup films on all your devices.</div>
                </div>
                <Button>See the Plans</Button>
                </div>
                <FooterChoosePlan />
            </MainContainer>
          );
        };
    }
export default ChoosePlan;

//Main Container

const MainContainer = styled.div`
background: #fff;
/* //header top */
.header-top{
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
}
/* //header content */
.header-content{
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-direction: columns;
    z-index: 2;
}
/* checkmarklogo */
.checkmark-logo{
    width: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 2rem;
}
.header-content img{
    margin: 6.25rem auto 1.875rem;
}
/* //check list */
.checked-list{
    text-align: left;
    margin: 1rem auto 3rem;
    padding-left: 1.5625rem;
    width: 8 5%;
    font-size: 17px;
    padding: auto;
}
/* //bullets */
.bullet{
    margin-top:1rem; 
    margin-left: 1rem;
    text-indent: -1em;
    line-height: 1.2rem;
}
.checked-list .bullet::before{
    color: transparent;
    display: inline-block;
    position: relative;
    height: 0.3em;
    width: 0.8em;
    content: '';
    left: -0.9375rem;
    bottom: 0.1875rem;
    border-bottom: 1px solid #e50914;
    border-left: 1px solid #e50914;
    transform: rotate(-45deg);
}
/* //the signin btn  */
.btn-signIn-btn{
    margin: 1.5625rem 3% 0;
    padding: 0.2475rem 1.0625rem;
    line-height: normal;
    font-weight: 700;
    color: var(--main-dark);
    font-size: 1.25rem;
    right: 0; 
    position: absolute;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}
`;
