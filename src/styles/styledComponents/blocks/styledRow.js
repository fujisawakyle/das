import styled from "styled-components";

import { flex } from '../../../helpers/mixins';

const StyledRow = styled.div`
  ${flex({ jc: "center", ai: "center" })};
  width: 100%;
  max-width: 45em; 
`

export default StyledRow;