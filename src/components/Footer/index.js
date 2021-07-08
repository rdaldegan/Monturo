import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  font-size: 62.5%;
  height: 250px;
  width: 100%;
  background: #222;
  color: white;
  font-family: 'Press Start 2P', cursive;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;

  
  @media (max-width: 1250px) {
    font-size: 40%;
    grid-gap: 3px;
  }
  
  @media (max-width: 800px) {
    font-size: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .element{
      justify-content: center;
    }
  }

  @media (max-width: 310px) {
    font-size: 25%;
    grid-gap: 3px;
  }

  .proac{
    width: 70%;
    height: 100%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      height: 20em;
      max-height: 90%;
    }
  }

  .element {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2em;

    grid-column-start: 1;
    grid-column-end: 2;
    img {
      width: 3em;
      height: 3em;
      margin-right: 20px;
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <div className="element">
        <h2>Fale conosco</h2>
      </div>
      <div className="element">
        <img src="/ig-icon.png" alt="instagram" />
        <span>@coletivo_monturo</span>
      </div>
      <div className="element">
        <img src="/email-icon.png" alt="email" />
        <span>coletivomonturo@gmail.com</span>
      </div>
      <div className="proac">
        <img src="/logo.svg" alt="proac" />
      </div>
    </Container>
  );
}
