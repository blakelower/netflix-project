import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterChoosePlan = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <span className="question-link">
          Questions?&nbsp;<Link to="/">Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterChoosePlan;

// Footer Container
const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  background: #f3f3f3;
  padding: 1.875rem 0;
  margin-top: 10rem;
  position: relative;
  border-top: 1px solid #e6e6e6;
  z-index: 5;
  .footer-columns {
    width: 80%;
    margin: 1rem 3rem 0 3rem;
    color: #999;
    display: grid;
    grid-template-columns: repeat(4, 15.625rem);
    grid-gap: 0.3rem;
  }
  .footer-wrapper {
    margin: 0 auto;
    padding: 1.25rem;
  }
  .question-link {
    margin-left: 3rem;
    font-size: 1rem;
    color: #999;
  }
  a {
    color: #999;
    font-size: 0.8125rem;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  ul {
    list-style-type: none;
  }
`;