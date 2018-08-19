import styled from "styled-components";

import { A } from '../elements';

import { fromThemeProps } from "../../../helpers/utilities";
import { flex } from "../../../helpers/mixins";

const StyledNav = styled.div`
    ${flex({ dir: "column", jc: "space-between", ai: "center" })}
`

StyledNav.LinkContainer = styled.div`
    ${flex({ dir: "column", jc: "center", ai: "center" })}
`

StyledNav.Link = styled(A)`
    margin-bottom: 0.5em;

    color: ${fromThemeProps("white")};
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;   
`

StyledNav.Divider = styled.div`
    margin: 0.5em auto 1em;
    width: 30px;
    
    border-bottom: 6px solid ${fromThemeProps("orange")};
`

export default StyledNav;