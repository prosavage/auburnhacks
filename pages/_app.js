import "./../styles/styles.css";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageContainer>
        <Navbar/>
        <Component {...pageProps} />
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default MyApp;