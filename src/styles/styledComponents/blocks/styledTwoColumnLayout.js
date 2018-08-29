import React from 'react';
import { StyledColToRow, StyledSection, StyledRow, StyledCol } from './';

const StyledTwoColumnLayout = ({ children }) => {
  return (
    <StyledColToRow>
      <StyledCol desktopWidth="50%">
        {children[0]}
      </StyledCol>
      <StyledCol desktopWidth="50%">
        {children[1]}
      </StyledCol>
    </StyledColToRow>
  )
};

export default StyledTwoColumnLayout;