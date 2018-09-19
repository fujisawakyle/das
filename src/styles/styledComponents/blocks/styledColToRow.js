import styled from 'styled-components';

import { flex } from '../../../helpers/mixins';
import media from '../../../helpers/media';

const StyledColToRow = styled.div`
  ${flex({ dir: "column", jc: "center", ai: "center" })};
  box-shadow: ${props => props.boxShadow};

  ${media.sm`
    ${flex({ dir: "row", jc: "center", ai: "center" })};
  `}
`

export default StyledColToRow;