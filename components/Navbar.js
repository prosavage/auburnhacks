import styled, { css } from "styled-components";
import Link from "next/link";
import A from "./ui/A";

export default function Navbar(props) {
  return (
    <Wrapper>
      <Link href="/">
        <NavItem>
          <Logo>Auburn Hacks</Logo>
        </NavItem>
      </Link>

      <LinkContainer>
        <NavItem>
          <Link href="/">
            <A color={"black"}>Home</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <A color={"black"}>Schedule</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <A color={"black"}>About</A>
          </Link>
        </NavItem>
      </LinkContainer>

      <LinkContainer>
        <NavItem>
          <Link href="/auth/signup">
            <A color={"black"}>Sign up</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/auth/signin">
            <A color={"black"}>Sign in</A>
          </Link>
        </NavItem>
      </LinkContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1em 0;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;
  line-height: 60px;
`;

const NavItem = styled.div`
  padding: 0 20px;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
