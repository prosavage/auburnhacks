import styled, { css } from "styled-components";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Link from "next/link";
import A from "../../components/ui/A";
import { Slack, Instagram, Twitter, GitHub } from "react-feather";

export default function SignIn(props) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer>
      <Row>
        <img src="/img/logo.png" />
      </Row>
      <Row center>
        <h1>Welcome Back</h1>
        <p>{status}</p>
      </Row>

      <Row>
        <FormContainer>
          
          <Row>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email:"
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
          <Row>
            <Button
              secondary
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
          </Row>
        </FormContainer>
      </Row>
      <Row>
        <p>
          Dont have an account? Sign up{" "}
          <Link href={"/auth/signup"}>
            <A>here</A>
          </Link>
          .
        </p>
      </Row>
     
      <Row>
        <Slack />
        <Instagram />
        <Twitter />
        <GitHub />
      </Row>
      <Row>
        <h3>Social Media</h3>
      </Row>
    </PageContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 10px 35px rgba(52, 52, 52, 0.13); */
  min-width: 350px;
`;

const Row = styled.div`
  padding: 0.5em 0;
  display: flex;

  svg {
    height: 25px;
    width: 25px;
    margin: 5px;
    transition: all 1s ease-in-out;
  }

  svg:hover {
    color: orange;
  }

  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
    `}

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
