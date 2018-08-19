import styled from "styled-components";

import { fromThemeProps } from "../../../helpers/utilities";

export const H1 = styled.h1`
    font-family: ${fromThemeProps("h1Font")};
    font-weight: ${fromThemeProps("h1Weight")};
`;

export const H2 = styled.h2`
    font-family: ${fromThemeProps("h2Font")};
    font-weight: ${fromThemeProps("h2Weight")};
`;

export const H3 = styled.h3`
    font-family: ${fromThemeProps("h3Font")};
    font-weight: ${fromThemeProps("h3Weight")};
`;

export const H4 = styled.h4`
    font-family: ${fromThemeProps("h4Font")};
    font-weight: ${fromThemeProps("h4Weight")};
`;
export const H5 = styled.h5`
    font-family: ${fromThemeProps("h5Font")};
    font-weight: ${fromThemeProps("h5Weight")};
`;

export const P = styled.p`
    font-family: ${fromThemeProps("pFont")};
    font-weight: ${fromThemeProps("pWeight")};
`;

export const A = styled.a``;

export const Button = styled(A)`
    font-family: ${fromThemeProps("buttonFont")};
    font-weight: ${fromThemeProps("buttonWeight")};
`

export const Ol = styled.ol``;

export const Ul = styled.ul``

export const Li = styled.li``;

export const Strong = styled.strong``;