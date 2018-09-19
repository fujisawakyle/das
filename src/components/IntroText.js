import React from "react";
import Media from 'react-media';
import SVG from 'react-inlinesvg';

import { StyledSection } from "../styles/styledComponents/blocks";
import INLIStackedLogo from '../assets/svg/INLI-stacked-logo.svg';
import INLIHorizLogo from '../assets/svg/INLI-horiz.svg';
import { H1, H2, P } from '../styles/styledComponents/elements';


const IntroText = () => {
  return (
    <StyledSection marginTop="2em" >
      <H2>
        I’m Not Lovin’ It: A National Art Show for Chickens is a way to merge art and activism. Artists from across the country have submitted their pieces as a way to take a stand towards ending the abuse of chickens used for food.
        </H2>
      <hr style={{
        borderBottom: '2px solid black',
        width: '100%'
      }} />
      <H1>
        Cast Your Vote!
        </H1>
      <P>
        Vote on your favorite piece of artwork. At the end of the contest, the top three submissions will be chosen as winners. You may cast a vote once a day.
        </P>
    </StyledSection>

  )
}

export default IntroText;