import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontsize: "1.5rem" }}>
            Watch TV shows and Movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">TRY IT NOW</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <div>
            <img src={ImgTv} styled={{width: '18.75rem'}} alt="t"/>
            <h3>Watch on your TV</h3>
            <p>
              Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Blu-Ray
              Players and
            </p>
          </div>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <div>
            <img src={ImgTablet} styled={{width: '18.75rem', paddingTop: '0.625rem'}} alt="t" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Blu-Ray
              Players and
            </p>
          </div>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <div>
            <img src={ImgMacbook} styled={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} alt="t" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Blu-Ray
              Players and
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

//Tab Content Two
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }
  /* //Tab Top Content */
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1 / 8;
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
  }
  /* //Tab Bottom Content */
  .tab-bottom-content{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      text-align: center;
      margin-top: 2rem;
    }
`;
