import styled, { css } from "styled-components";

import { fromThemeProps } from "../../../helpers/utilities";
import media from "../../../helpers/media";

export const H1 = styled.h1`
  margin-bottom: ${props => props.marginBottom};

  color: ${props => props.color || fromThemeProps("h1Color")};
  font-family: ${fromThemeProps("h1Font")};
  font-size: ${fromThemeProps("h1FontSizeMobile")};
  font-weight: ${fromThemeProps("h1Weight")};
  text-align: center;
  text-transform: uppercase;
  max-width: ${props => props.maxWidth};
  line-height: ${fromThemeProps("smallLineHeight")};

  ${media.sm`
    text-align: ${props => props.desktopAlign};
  `}

  ${media.md`
    font-size: ${fromThemeProps("h1FontSizeDesktop")};
    
  `}
`;

export const H2 = styled.h2`
  margin-bottom: ${props => props.marginBottom || fromThemeProps("copyMarginBottom")};

  color: ${props => props.color || fromThemeProps("h2Color")};
  font-family: ${fromThemeProps("h2Font")};
  font-size: ${fromThemeProps("h2FontSizeMobile")};
  font-weight: ${fromThemeProps("h2Weight")};
  text-transform: ${props => props.textTransform};
  line-height: ${fromThemeProps("lineHeight")};

  ${media.sm`
    font-size: ${fromThemeProps("h2FontSizeDesktop")};
  `}
`;

export const H3 = styled.h3`
  color: ${fromThemeProps("h3Color")};
  font-family: ${fromThemeProps("h3Font")};
  font-size: ${props => props.fontSizeMobile || fromThemeProps("h3FontSizeMobile")};
  font-style: ${props => props.fontStyle};
  font-weight: ${fromThemeProps("h3Weight")};
  line-height: ${fromThemeProps("lineHeight")};
  text-transform: uppercase;

  ${media.sm`
    font-size: ${props => props.fontSizeDesktop || fromThemeProps("h3FontSizeDesktop")};
  `}
`;

export const H4 = styled.h4`
  color: ${fromThemeProps("h4Color")};
  font-family: ${fromThemeProps("h4Font")};
  font-size: ${fromThemeProps("h4FontSizeMobile")};
  font-weight: ${fromThemeProps("h4Weight")};
  line-height: ${fromThemeProps("lineHeight")};

  ${media.sm`
    font-size: ${fromThemeProps("h4FontSizeDesktop")};
  `}
`;
export const H5 = styled.h5`
  color: ${fromThemeProps("h5Color")};
  font-family: ${fromThemeProps("h5Font")};
  font-size: ${fromThemeProps("h5FontSizeMobile")};
  font-weight: ${fromThemeProps("h5Weight")};
  line-height: ${fromThemeProps("lineHeight")};

  ${media.sm`
    font-size: ${fromThemeProps("h5FontSizeDesktop")};
  `}
`;

export const P = styled.p`
  margin-bottom: ${props => props.marginBottom || fromThemeProps("copyMarginBottom")};

  color: ${fromThemeProps("h5Color")};
  font-family: ${fromThemeProps("pFont")};
  font-size: ${props => props.fontSizeMobile || fromThemeProps("pFontSizeMobile")};
  font-weight: ${fromThemeProps("pWeight")};
  line-height: ${fromThemeProps("lineHeight")};

  ${media.sm`
    font-size: ${props => props.fontSizeDesktop || fromThemeProps("pFontSizeDesktop")};
  `}
`;

export const A = styled.a`
  color: ${fromThemeProps("aColor")};
  font-family: ${fromThemeProps("aFont")};
  font-size: ${fromThemeProps("aFontSizeMobile")};
  font-weight: ${fromThemeProps("aWeight")};
  text-decoration: underline;
  text-align: center;

  ${media.sm`
    font-size: ${fromThemeProps("aFontSizeDesktop")};
  `}
`;

export const Button = styled(A)`
  border: ${fromThemeProps("buttonBorder")};
  border-radius: 1em;
  background: ${fromThemeProps("buttonBackground")};
  padding: 0.4em 0.9em 0.3em;

  color: ${fromThemeProps("buttonForeground")};
  font-family: ${fromThemeProps("buttonFont")};
  font-size: 1.2rem;
  font-weight: ${fromThemeProps("buttonWeight")};
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.05s ease;

  cursor: pointer;

  ${media.sm`
    font-size: ${fromThemeProps("buttonFontSizeDesktop")};
  `}

  &:hover {
    background: ${fromThemeProps("buttonHoverBackground")};
  }

  ${(props) => props.hasVoted && css`
    filter: opacity(.3);
    cursor: not-allowed;
  `}
`

export const FauxButton = styled.div`
  border: 3px solid #fff;
  border-radius: 1em;
  background: ${fromThemeProps("fauxButtonBackground")};
  padding: 0.4em 0.9em 0.3em;

  color: ${fromThemeProps("fauxButtonForeground")};
  font-family: ${fromThemeProps("buttonFont")};
  font-size: 1.2rem;
  font-weight: ${fromThemeProps("buttonWeight")};
  text-decoration: none;
  text-transform: uppercase;
  
  ${media.sm`
    font-size: ${fromThemeProps("buttonFontSizeDesktop")};
  `}

`

export const Ol = styled.ol``;

export const Ul = styled.ul``

export const Li = styled.li``;

export const Strong = styled.strong``;