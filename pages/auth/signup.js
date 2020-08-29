import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function SignUp(props) {
  // email, password, bio ( first_name, last_name, school )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [status, setStatus] = useState("")

  return (
    <FormContainer>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"email"}
        type={"email"}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"password"}
        type={"password"}
      />
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder={"first name"}
        type={"text"}
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder={"last name"}
        type={"text"}
      />
      <Input
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder={"school"}
        type={"text"}
      />
      <Button onClick={(e) => {
          e.preventDefault();
       axios.post("/api/users/signup", {
            email,
            password,
            bio: {
                first_name: firstName,
                last_name: lastName,
                school,
            }
       }).then(res => setStatus(`Success: ${res.data.message}`))
       .catch(error => setStatus(`Error: ${error.response.data.message}`))   
      }} type={"submit"}>
        Signup
      </Button>
      <p>{status}</p>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
