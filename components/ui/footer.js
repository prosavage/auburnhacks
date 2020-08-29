import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} auburnhacks™</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  align-items: center;
  margin: 1rem;
`;