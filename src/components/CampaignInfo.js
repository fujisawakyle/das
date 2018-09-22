import React from "react";

import { StyledSection, StyledRow, StyledCol } from "../styles/styledComponents/blocks";
import { P, Button } from '../styles/styledComponents/elements';
import { fromThemeProps } from '../helpers/utilities';
import Themed from '../helpers/Themed';

const IntroText = () => {
  return (
    <Themed dark>
      <StyledSection paddingTop="3em" paddingBottom="3em" mobileWidth={fromThemeProps("mobileWidth")} background={fromThemeProps("altRed")}>
        <P>
          The art show is a part of the I’m Not Lovin’ It campaign, which highlights McDonald’s failure to address the practice of selectively-breeding chickens to grow unnaturally large at a rapid rate, approximately six times faster than chickens grow naturally. The campaign is asking McDonald's to implement higher, science-based animal welfare standards for its chicken supply chain by switching to healthier breeds of birds, providing more room for the chickens to move, monitoring air and litter quality, and providing environmental enrichments.
        </P>
        <Button href="https://imnotlovinit.com">Vist the campaign site</Button>
      </StyledSection>
    </Themed>

  )
}

export default IntroText;