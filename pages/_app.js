import "./../styles/styles.css";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default MyApp;