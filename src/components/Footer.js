import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown';

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <span style={{marginLeft: '15%', fontSize: '1.125rem'}}>
          Questions? <Link>Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
          </ul>
          {/* Lang Btn */}
          <div className="lang-btn">
              <Icon icon={iosWorld} size={20}/>
              English
              <Icon icon={arrowSortedDown} />
          </div>
        </div>
      </FooterContainer>
    );
  }
}
export default Footer;

const FooterContainer = styled.footer`
background: var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3reem;
color: #999;

.footer-columns{
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr)
}
ul li{
    list-style: none;
    line-height: 2.5;
}
a{
    color: #999;
}
a:hover{
    text-decoration: underline;
    cursor: pointer;
}
`;