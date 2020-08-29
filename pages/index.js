import Head from "next/head";
import styled, { css } from "styled-components";
import CodeAnimation from "../components/home/hero/CodeAnimation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "../components/ui/Button";
import Calendar from "../components/calendar/Calendar";
import Footer from "../components/ui/Footer";
import {useState} from "react";
// server side rendering misses up the map :(
const MapWithNoSSR = dynamic(() => import("../components/map/map"), {
  ssr: false,
});

export default function Home() {



  return (
    <>
      <Head>
        <title>Auburn Hacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <SubContainer>
          <BigFont>Auburn Hacks 2021</BigFont>
          <CodeAnimation  />
        </SubContainer>
        <SubContainer>
          <ButtonContainer>
            <Link href="/auth/signin">
              <Button tertiary>Get Started</Button>
            </Link>
          </ButtonContainer>
        </SubContainer>
        <SubContainer secondary>
          <BigFont id="schedule">Schedule</BigFont>
          <Calendar />
        </SubContainer>
        <SubContainer id="map">
          <BigFont>Auburn University, Brown Kopel</BigFont>
        </SubContainer>
        <MapContainer>
          <MapWithNoSSR />
        </MapContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  padding-top: 4em;
  flex-wrap: wrap;
  width: 100%;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;

  ${(props) =>
    props.secondary &&
    css`
      width: 100%;
      background: rgba(246, 128, 38, 0.15);
      padding-bottom: 2rem;
    `}
`;
const MapContainer = styled.div`
  height: 100vh;
  padding: 1rem;
  width: 80%;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding-top: 4em;
`;
const BigFont = styled.h3`
  font-weight: 600;
  font-size: 2em;
  line-height: 90px;

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;
const HeroImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 750px;

  @media (max-width: 700px) {
    display: none;
  }
`;
