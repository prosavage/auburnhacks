import styled from "styled-components";

const A = styled.a`
  cursor: pointer;
  color: #496e9c;
  color: ${props => props.color};
  transition: 1.0s;
  &:hover {
    outline: none;
    transition: 0.5s;
    color: #F68026;
    color: ${props => props.hoverColor}
  }
`;

export default A;
