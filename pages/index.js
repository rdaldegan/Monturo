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

  font-size: 2rem;
  font-weight: 700;
  background: white;
  border-radius: 25px;  
  padding: 10px;
  font-family: sans-serif;

  text-transform: uppercase;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  box-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  :hover{
    animation: glitchBox 500ms infinite;
  }
  @keyframes glitchBox {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: 0.1em 0 0 rgba(255, 0, 0, 0.75),
        -0.1em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.05em 0.1em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: 0.1em 0 0 rgba(255, 0, 0, 0.75),
        -0.1em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.05em 0.1em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: -0.1em -0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0.05em 0 rgba(0, 255, 0, 0.75),
        -0.1m -0.1em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: -0.1em -0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0.05em 0 rgba(0, 255, 0, 0.75),
        -0.1em -0.1em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: 0.05em 0.1em 0 rgba(255, 0, 0, 0.75),
        0.1em 0 0 rgba(0, 255, 0, 0.75), 0 -0.1em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: 0.05em 0.1em 0 rgba(255, 0, 0, 0.75),
        0.1em 0 0 rgba(0, 255, 0, 0.75), 0 -0.1em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      box-shadow: -0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.1em 0 rgba(0, 0, 255, 0.75);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

const musics = [
  {
    url: '/moleca.mp3',
    nome: 'Musica1',
  },
  {
    url: '/moleca.mp3',
    nome: 'Musica2',
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
            <span>
              {musica.nome}
            </span>
          </Musica>
        ))}
      </Bg>
    </Container>
  );
}
