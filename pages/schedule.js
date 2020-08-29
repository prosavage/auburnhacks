import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Auburn Hacks</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer>
        <SubContainer>
          <BigFont>Schedule</BigFont>
          <p>
            AuburnHacks is currently planned for February 11th-12th in person.{' '}
          </p>
          <p>Coming soon...</p>
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
  margin: 2vw;
  padding: 2vw;
  border: 1px black solid;
  border-radius: 25px;
  overflow-wrap: break-word;
`;
const BigFont = styled.h3`
  font-weight: 600;
  font-size: 2em;
  line-height: 90px;
`;
