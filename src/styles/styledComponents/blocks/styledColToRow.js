import styled from 'styled-components';

import { flex } from '../../../helpers/mixins';
import media from '../../../helpers/media';

const StyledColToRow = styled.div`
  ${flex({ dir: "column", jc: "center", ai: "center" })};
  box-shadow: ${props => props.boxShadow};
  padding: ${props => props.mobilePadding};
  ${media.sm`
    ${flex({ dir: "row", jc: "center", ai: "center" })};
    padding: ${props => props.desktopPadding};
  `}
`

export default StyledColToRow;