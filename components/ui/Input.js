import styled, { css } from "styled-components";
export default function Input(props) {
  return (
    <Container>
      <strong>{props.header}</strong>
      <StyledInput
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledInput = styled.input`
  background: #f9f9f9;
  border: 2px solid #03244d;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  transition: 1s;
  outline: black;
  &:focus,
  &:hover {
    transition: 1s;
    box-shadow: 0px 10px 35px rgba(52, 52, 52, 0.5);
  }
`;
