import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 160px;
  background: #222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-family: 'Press Start 2P', cursive;
`;

export default function Footer() {
  return (
    <Container>
      <p>
        Plano de fundo por
        {' '}
        <a href="https://unsplash.com/@stri_khedonia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alice Pasqual</a>
      </p>
    </Container>
  );
}
