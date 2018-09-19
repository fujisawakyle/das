import React from 'react';

import styled from "styled-components";
import { fromThemeProps } from "../../../helpers/utilities";
import media from "../../../helpers/media";

const SectionContainer = styled.div`
  background: ${(props) => {
    if (props.background) { return props.background; }
    return props.theme.secondary;
  }};
  margin-top: ${props => props.marginTop};
  ${(props) => props.backgroundImage && css`
    background: url(${props.backgroundImage});
    background-size: cover;
    background-position: center;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: ${props => props.jc || "center"};
  align-items: ${props => props.ai || "center"};
  padding-top: ${props => props.paddingTop || "0"};
  padding-bottom: ${props => props.paddingBottom || "0"};
  max-width: ${props => props.maxWidth}
  width: ${props => props.mobileWidth ||
    props.theme.mobileContentWidth};
  * {
    z-index: 3;
  }

  ${media.md`
    width: ${props => props.desktopWidth ||
      props.theme.contentWidth};
  `}
`;

const Shade = styled.div`
  background: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const StyledSection = (props) => {
  const { marginTop, background, backgroundImage, children, shaded, mobileWidth, desktopWidth, maxWidth } = props;
  const shade = shaded && <Shade />;
  return (
    <SectionContainer
      background={background}
      backgroundImage={backgroundImage}
      marginTop={marginTop}
    >
      {shade}
      <ContentContainer
        mobileWidth={mobileWidth}
        desktopWidth={desktopWidth}
        maxWidth={maxWidth}
      >
        {children}
      </ContentContainer>
    </SectionContainer>
  );
};

export default StyledSection;