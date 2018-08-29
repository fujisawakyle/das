import styled from "styled-components";

import { fromThemeProps } from "../../../helpers/utilities";
import media from "../../../helpers/media";

export const H1 = styled.h1`
  color: ${fromThemeProps("h1Color")};
  font-family: ${fromThemeProps("h1Font")};
  font-size: ${fromThemeProps("h1FontSizeMobile")};
  font-weight: ${fromThemeProps("h1Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h1FontSizeDesktop")};
  `}
`;

export const H2 = styled.h2`
  color: ${fromThemeProps("h2Color")};
  font-family: ${fromThemeProps("h2Font")};
  font-size: ${fromThemeProps("h2FontSizeMobile")};
  font-weight: ${fromThemeProps("h2Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h2FontSizeDesktop")};
  `}
`;

export const H3 = styled.h3`
  color: ${fromThemeProps("h3Color")};
  font-family: ${fromThemeProps("h3Font")};
  font-size: ${fromThemeProps("h3FontSizeMobile")};
  font-weight: ${fromThemeProps("h3Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h3FontSizeDesktop")};
  `}
`;

export const H4 = styled.h4`
  color: ${fromThemeProps("h4Color")};
  font-family: ${fromThemeProps("h4Font")};
  font-size: ${fromThemeProps("h4FontSizeMobile")};
  font-weight: ${fromThemeProps("h4Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h4FontSizeDesktop")};
  `}
`;
export const H5 = styled.h5`
  color: ${fromThemeProps("h5Color")};
  font-family: ${fromThemeProps("h5Font")};
  font-size: ${fromThemeProps("h5FontSizeMobile")};
  font-weight: ${fromThemeProps("h5Weight")};

  ${media.xs`
    font-size: ${fromThemeProps("h5FontSizeDesktop")};
  `}
`;

export const P = styled.p`
  color: ${fromThemeProps("h5Color")};
  font-family: ${fromThemeProps("pFont")};
  font-size: ${fromThemeProps("pFontSizeMobile")};
  font-weight: ${fromThemeProps("pWeight")};

  ${media.xs`
    font-size: ${fromThemeProps("pFontSizeDesktop")};
  `}
`;

export const A = styled.a`
  color: ${fromThemeProps("aColor")};
  font-family: ${fromThemeProps("aFont")};
  font-size: ${fromThemeProps("aFontSizeMobile")};
  font-weight: ${fromThemeProps("aWeight")};
  text-decoration: underline;

  ${media.xs`
    font-size: ${fromThemeProps("aFontSizeDesktop")};
  `}
`;

export const Button = styled(A)`
  background: ${fromThemeProps("buttonBackground")};
  padding: 0.5em 1em;

  color: ${fromThemeProps("buttonForeground")};
  font-family: ${fromThemeProps("buttonFont")};
  font-size: ${fromThemeProps("buttonFontSizeMobile")};
  font-weight: ${fromThemeProps("buttonWeight")};
  text-decoration: none;

  ${media.xs`
    font-size: ${fromThemeProps("buttonFontSizeDesktop")};
  `}
`

export const Ol = styled.ol``;

export const Ul = styled.ul``

export const Li = styled.li``;

export const Strong = styled.strong``;