import React, { Component } from "react";

import { StyledSection } from "../styles/styledComponents/blocks";

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
        Hello World
      </StyledSection>
    );
  }
}