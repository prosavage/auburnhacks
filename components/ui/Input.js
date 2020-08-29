import styled from "styled-components";
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
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const StyledInput = styled.input`
  background: #F9F9F9;
    border:  2px solid #C11275;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    transition: 1s;
    
    &:focus {
      outline: none;
      transition: 1s;
      border:  2px solid #FF1180;
    }
`