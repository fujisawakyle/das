import styled from "styled-components";

import { flex } from "../../../helpers/mixins";
import media from "../../../helpers/media";

const StyledHero = styled.div`
    position: relative;
    ${flex({ dir: "column", jc: "center", ai: "center" })};
    height: 500px;
    padding-top: 1em;
    width: 100%;

    background: url(${props => props.backgroundSm}) center center / cover;

    text-align: center;

    ${media.xs`
        background: url(${props => props.backgroundLg}) center center / cover;
    `}
`

export default StyledHero;