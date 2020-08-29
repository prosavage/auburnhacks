import styled, { css } from "styled-components";

export default function Button(props) {
  return (
    <Container>
      <StyledButton
        secondary={props.secondary}
        background={props.background}
        color={props.color}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </StyledButton>
    </Container>
  );
}

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  background: #fbfbfb;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 8px;
  color: black;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 2px solid ${props => props.color};
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 10px 35px rgba(52, 52, 52, 0.5);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.secondary &&
    css`
      color: white;
      background: #03244d;
    `}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
`;
