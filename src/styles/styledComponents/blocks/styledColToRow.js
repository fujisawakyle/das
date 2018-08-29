import styled from 'styled-components';

import { flex } from '../../../helpers/mixins';
import media from '../../../helpers/media';

const StyledColToRow = styled.div`
  ${flex({ dir: "column", jc: "center", ai: "center" })};

  ${media.sm`
    ${flex({ dir: "row" })};
  `}
`

export default StyledColToRow;