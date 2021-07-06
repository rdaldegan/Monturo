import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  background-image: url('/alice-pasqual-evvaSEv1QIE-unsplash.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  min-height: 100vh;
  font-family: 'Press Start 2P', cursive;
  color: white;
`;
const Bg = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  .content{
    width: 80%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default function Coletivo() {
  return (
    <Container>
      <Bg>
        <div className="content">
          <h2>Monturo</h2>
        </div>
      </Bg>
    </Container>
  );
}
