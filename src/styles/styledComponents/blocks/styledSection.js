import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.jc || "center"};
  align-items: ${props => props.ai || "center"};
  padding-top: ${props => props.paddingTop || "0"};
`