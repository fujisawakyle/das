import React from "react";
import Media from 'react-media';
import SVG from 'react-inlinesvg';

import { StyledColToRow } from "../styles/styledComponents/blocks";
import INLIStackedLogo from '../assets/svg/INLI-stacked-logo.svg';
import INLIHorizLogo from '../assets/svg/INLI-horiz.svg';
import { H1 } from '../styles/styledComponents/elements';


const TitleBar = () => {
  return (
    <StyledColToRow boxShadow="-4px -6px 40px 0px #000" mobilePadding="2.5em 0" desktopPadding="0">
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <SVG style={{ width: '75%', maxWidth: '500px', marginBottom: '2em' }} src={INLIHorizLogo} />
          ) : (
              <SVG style={{ width: '35%', maxWidth: '200px', padding: '2em' }} src={INLIStackedLogo} />
            )
        }
      </Media>
      <H1 maxWidth="12em" desktopAlign="left">A National Art Show For Chickens</H1>
    </StyledColToRow>
  )

}

export default TitleBar;