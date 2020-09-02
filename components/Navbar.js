import styled, { css } from "styled-components";
import { useEffect, useLayoutEffect, useState } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";
import A from "./ui/A";

export default function Navbar(props) {
  const [location, setLocation] = useState("");
  const [width, setWidth] = useState(0);
  const [hamborgerOpen, setHamborgerOpen] = useState(false);

  useEffect(() => {
    // function defined to update our width
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    // bind it to the resize event
    window.addEventListener("resize", updateWidth);
    // our state has a 0 at beginning, so we need to run update once.
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    setLocation(window.location.href.replace(window.origin, ""));
  }, [location]);

  const items = [
    {
      href: "/",
      text: "Home",
      desktop: true,
    },
    {
      href: "/#schedule",
      text: "Schedule",
      desktop: true,
    },
    {
      href: "/#map",
      text: "Map",
      desktop: true,
    },
    {
      href: "/auth/signin",
      text: "Sign In",
      desktop: false,
    },
    {
      href: "/auth/signup",
      text: "Sign Up",
      desktop: false,
    },
  ];

  // hehe xd
  const useHamborger = () => {
    return width <= 700;
  };

  const renderLinks = () => {
    if (!useHamborger()) {
      return (
        <>
          <LinkContainer>
            {items.map((item) => {
              if (item.desktop) {
                return (
                  <NavItem key={item.text}>
                    <Link
                      onClick={() => setLocation(item.href)}
                      href={item.href}
                    >
                      <A color={location === item.href ? "#DD550C" : "black"}>
                        {item.text}
                      </A>
                    </Link>
                  </NavItem>
                );
              }
            })}
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
        </>
      );
    } else {
      if (hamborgerOpen) {
        return items.map((item) => (
          <MobileNavRow key={item.text}>
            <Link onClick={() => setLocation(item.href)} href={item.href}>
              <A color={location === item.href ? "#DD550C" : "black"}>
                {item.text}
              </A>
            </Link>
          </MobileNavRow>
        ));
      }
    }
  };

  return (
    <Wrapper>
      <LogoSection>
        {useHamborger() && !hamborgerOpen && (
          <Menu onClick={() => setHamborgerOpen(true)} />
        )}
        {useHamborger() && hamborgerOpen && (
          <X onClick={() => setHamborgerOpen(false)} />
        )}
        <Link href="/">
          <Logo>AuburnHacks</Logo>
        </Link>
      </LogoSection>
      {renderLinks()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #eaeaea;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const MobileNavRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 0;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 2em;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;
  line-height: 60px;
  padding-left: 20px;
  cursor: pointer;
`;

const NavItem = styled.div`
  padding: 0 20px;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 0.3em 0.3rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
