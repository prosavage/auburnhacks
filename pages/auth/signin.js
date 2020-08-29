import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function SignIn(props) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer>
      <FormContainer>
        <Row>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
          />
        </Row>
        <Row>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password:"
            type="password"
          />
        </Row>

        <Button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("/api/users/signin", {
                email,
                password,
              })
              .then((res) => setStatus(`Success: ${res.data.message}`))
              .catch((error) =>
                setStatus(`Error: ${error.response.data.message}`)
              );
          }}
          type="submit"
        >
          Login
        </Button>
        <p>{status}</p>
      </FormContainer>
    </PageContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
`;

const Row = styled.div`
  padding: 0.5em 0;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
