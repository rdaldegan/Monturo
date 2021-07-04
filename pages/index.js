import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  background-image: url('/alice-pasqual-evvaSEv1QIE-unsplash.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  min-height: 100vh;
`;

const Bg = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Musica = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.y}vh;
  left: ${(props) => props.x}vw;

  font-size: 1.4rem;
  border-radius: 25px;
  padding: 0 15px;
  margin: 0;
  font-family: 'slkscrb';
  font-weight: 100;

  text-transform: uppercase;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  ::before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #a4715a;
  }  
  ::after{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #a4715a;
    filter: blur(40px);
  }

  p{
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: 0;
    }
    span:first-child {
      clip-path: polygon(0 0, 100% 0, 100% 75%, 0 45%);
      transform: translate(-0.045em, -0.0425em);
      opacity: 0.8;
    }
    span:last-child {
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.0425em, 0.045em);
      opacity: 0.8;
    }
  }

  :hover{
    z-index: 100;
    transform: scale(1.1);
    transition: 0.3s;
    
    ::before{
      background-color: #f2923c;
    }
  }
`;

const musics = [
  {
    url: '/moleca.mp3',
    nome: 'Tapera córrego',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tapera monturo',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tapera funk',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tapera barato fundamental',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tapera arpejadores',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tudo foi feito pra gnt lacrar remix',
  },
  {
    url: '/moleca.mp3',
    nome: 'Tapera voz',
  },
];

export default function Home() {
  const [musicas, setMusicas] = useState(musics);

  useEffect(() => {
    const mus = [...musicas];
    for (let i = 0; i < musicas.length; i += 1) {
      mus[i] = {
        ...mus[i],
        x: Math.random() * (70 - 10) + 10,
        y: Math.random() * (70 - 10) + 10,
      };
    }
    setMusicas(mus);
  }, []);

  return (
    <Container>
      <Bg>
        {musicas.map((musica, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Musica key={index} x={musica.x} y={musica.y}>
            <p>
              <span aria-hidden="true">
                {musica.nome}
              </span>
              {musica.nome}
              <span aria-hidden="true">
                {musica.nome}
              </span>
            </p>
          </Musica>
        ))}
      </Bg>
    </Container>
  );
}
