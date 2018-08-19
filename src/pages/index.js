import React, { Component } from "react";

import { StyledSection, StyledHero } from "../styles/styledComponents/blocks";
import bgSm from "../assets/backgroundImages/homepage-pig_small.jpg";
import bgLg from "../assets/backgroundImages/homepage-pig_large.jpg";

export default class Index extends Component {
  render() {
    return (
      <div>
        {this.renderHero()}
      </div>
    )
  }

  renderHero() {
    return (
      <StyledSection paddingTop={"5em"}>
        <StyledHero backgroundSm={bgSm} backgroundLg={bgLg}>

        </StyledHero>
      </StyledSection>
    );
  }
}