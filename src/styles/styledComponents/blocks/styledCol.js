import styled from "styled-components";
import Media from '../../../helpers/media';

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.jc || "center"};
  align-items: ${props => props.ai || "center"};
  padding: 0 2em;
  padding-top: ${props => props.paddingTop || "0"};
  width: 100%;

  ${Media.md`
    width: ${props => props.desktopWidth}
  `}
`

export default StyledCol;