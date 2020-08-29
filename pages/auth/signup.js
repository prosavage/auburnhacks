import styled, { css } from "styled-components";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import A from "../../components/ui/A";
import Link from "next/link"

export default function SignUp(props) {
  // email, password, bio ( first_name, last_name, school )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [status, setStatus] = useState("");

  return (
    <PageContainer>
      <Row>
        <img src="/img/logo.png" />
      </Row>
      <Row center>
        <h1>Welcome to Auburn Hacks</h1>
        <p>{status}</p>
      </Row>
      <FormContainer>
        <Row>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"email"}
            type={"email"}
          />
        </Row>
        <Row>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"password"}
            type={"password"}
          />
        </Row>
        <Row>
          <InputWrapper>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={"first name"}
              type={"text"}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={"last name"}
              type={"text"}
            />
          </InputWrapper>
        </Row>
        <Row>
          <Input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder={"school"}
            type={"text"}
          />
        </Row>
        <Row>
          <Button
            secondary
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/api/users/signup", {
                  email,
                  password,
                  bio: {
                    first_name: firstName,
                    last_name: lastName,
                    school,
                  },
                })
                .then((res) => setStatus(`Success: ${res.data.message}`))
                .catch((error) =>
                  setStatus(`Error: ${error.response.data.message}`)
                );
            }}
            type={"submit"}
          >
            Signup
          </Button>
        </Row>
      </FormContainer>
      <Row>
          <p>Already have an account? Login <Link href="/auth/signin"><A>here</A></Link></p>
      </Row>
    </PageContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5em 2.5em;
  /* box-shadow: 0px 10px 35px rgba(52, 52, 52, 0.13); */
  border-radius: 8px;
  min-width: 350px;
`;
const InputWrapper = styled.div`
  &:first-child {
    padding-right: 10px;
  }
`;
const Row = styled.div`
  padding: 0.5em 0;
  display: flex;

  ${(props) =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background: linear-gradient(
        90deg,
        hsl(256, 33, 10) (22px - 1px),
        transparent 1%
      )
      center,
    linear-gradient(hsl(256, 33, 10) (22px - 1px), transparent 1%) center,
    hsl(256, 33, 70);
  background-size: 22px 22px;
`;
