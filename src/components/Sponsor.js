import React from "react";
import SVG from "react-inlinesvg";
import { StyledSection } from "../styles/styledComponents/blocks";
import { H2, } from '../styles/styledComponents/elements';
import herbivorousLogo from '../assets/png/herbivorous-butcher-black.png'

const Sponsor = () => {
  return (
    <StyledSection>

      <H2 textTransform="uppercase">Sponsored by</H2>
      <img style={{ width: '300px' }} src={herbivorousLogo} />
    </StyledSection>

  )
}

export default Sponsor;