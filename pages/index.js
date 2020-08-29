import Head from "next/head";
import styled from "styled-components";
import CodeAnimation from "../components/home/hero/CodeAnimation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auburn Hacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <SubContainer>
          <BigFont>Auburn Hacks 2020</BigFont>
          <CodeAnimation/>
        </SubContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  padding: 1em 0;
  padding-top: 4em;
  flex-wrap: wrap;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const BigFont = styled.h3`
  font-weight: 600;
  font-size: 2em;
  line-height: 90px;
`;
const HeroImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 750px;

  @media (max-width: 700px) {
    display: none;
  }
`;

