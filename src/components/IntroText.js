import React from "react";
import Media from 'react-media';
import SVG from 'react-inlinesvg';

import { StyledSection } from "../styles/styledComponents/blocks";
import INLIStackedLogo from '../assets/svg/INLI-stacked-logo.svg';
import INLIHorizLogo from '../assets/svg/INLI-horiz.svg';
import { H1, H2, P } from '../styles/styledComponents/elements';
import { fromThemeProps } from "../helpers/utilities";


const IntroText = () => {
  return (
    <StyledSection marginTop="4em" mobileWidth={fromThemeProps("mobileWidth")} desktopWidth={fromThemeProps("mobileWidth")} maxWidth="65em" >
      <H2>
        I’m Not Lovin’ It: A National Art Show for Chickens is a way to merge art and activism. Artists from across the country have submitted their pieces as a way to take a stand towards ending the abuse of chickens used for food.
        </H2>
      <hr style={{
        borderBottom: '2px solid black',
        width: '100%',
        marginBottom: '3em'
      }} />
      <H1 marginBottom="1.5rem" color={fromThemeProps("altRed")}>
        The votes are in!
        </H1>
      <P>
        You voted on your favorite pieces of artwork. The top three submissions have be chosen as winners:
        </P>
    </StyledSection>

  )
}

export default IntroText;