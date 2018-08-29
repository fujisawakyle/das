import styled from "styled-components";
import ReactSVG from "react-svg";
import { fromThemeProps } from "../../../helpers/utilities";
import { flex } from "../../../helpers/mixins";
import media from "../../../helpers/media";

const StyledHeader = styled.div`
  ${flex({ jc: "space-between", ai: "center" })}
  height: 5em;
  position: fixed;
  width:100%;
  z-index:1;

  background: ${fromThemeProps("transparentBlack")};
  transition: .4s linear;

  &+ * {
    padding-top: 5em;
  }
`

StyledHeader.SVG = styled(ReactSVG)`
    width: 150px;
    margin-left: .5em;
    
`

export default StyledHeader;