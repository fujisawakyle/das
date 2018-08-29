import styled from 'styled-components';

import { flex } from '../../../helpers/mixins';
import media from '../../../helpers/media';

const StyledRowToCol = styled.div`
  ${flex({ jc: "center", ai: "center" })};

  ${media.sm`
    ${flex({ dir: "column" })};
  `}
`

export default StyledRowToCol;