import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 62.5%;
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
    color: #CCCCCC;
    padding: 80px;
    width: 80%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 4em;
      line-height: 1.5em;
      padding-bottom: 50px;
    }
    p {
      font-size: 2.4em;
      line-height: 2em;
      text-align: justify;
      text-justify: inter-word;
    }
             
    @media (max-width: 830px) {
      h2{
        text-align: center;
      }
      p{
        text-align: left;
      }             
    @media (max-width: 590px) {
      p{
        font-size: 1.4em;
      }
    } 
  }
`;

const lorem = `O coletivo monturo propõe explorar potencialidades criativas do tensionamento, do encontro/desencontro entre linguagens experimentais da música eletrônica e linguagens já amplamente difundidas e inscritas no campo da escuta cotidiana. 
O coletivo monturo se utiliza da decomposição em ruínas e destilação de sucatas.
O coletivo monturo é formado por Isaías Barbosa e Nathanael Martins.`;

export default function Coletivo() {
  return (
    <Container>
      <Bg>
        <div className="content">
          <h2>Coletivo Monturo</h2>
          <p>
            {lorem}
          </p>
        </div>
      </Bg>
    </Container>
  );
}
