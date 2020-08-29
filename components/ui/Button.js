import styled from "styled-components";

export default function Button(props) {
  return (
    <Container>
      <StyledButton
        type={props.type}
        secondary={props.secondary}
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
  border: 2px solid #464646;
  box-sizing: border-box;
  border-radius: 8px;
  color: black;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;

  ${(props) =>
    props.secondary &&
    css`
      background: #fbfbfb;
      border: 2px solid #464646;
      box-sizing: border-box;
      border-radius: 8px;
      color: black;
    `}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
`;
