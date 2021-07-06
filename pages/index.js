/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import React, { useEffect } from 'react';

import { FaRedoAlt } from 'react-icons/fa';

import { useSongs } from '../src/context/SongContext';

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


  .reRandom{
    background: none;
    border: none;
    margin: 5px;

    .icon{
      font-size: 30px;
      color: #a4715a;
      cursor: pointer;
      
      transition: 0.7s;
      :hover{
        transform: rotate(360deg);
      }
    }
  }
`;

const Musica = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.y}vh;
  left: ${(props) => props.x}vw;

  font-size: 1.1rem;
  border-radius: 25px;
  padding: 0 15px;
  margin: 0;
  font-family: 'Press Start 2P', cursive;
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
    transform: scale(1.02);
    transition: 0.1s;
    
    ::before{
      background-color: #f2923c;
    }
  }
  :active{
    transform: scale(1);
    transition: 0.1s;
  }
`;

export default function Home() {
  const {
    musicas,
    setMusicas,
    setMusicaAtual,
    setIsPlaying,
    setIsOpen,
  } = useSongs();

  function randomize() {
    const mus = [...musicas];
    for (let i = 0; i < musicas.length; i += 1) {
      mus[i] = {
        ...mus[i],
        x: Math.random() * (70 - 10) + 10,
        y: Math.random() * (70 - 10) + 10,
      };
    }
    setMusicas(mus);
  }

  function playSong(musica) {
    setIsPlaying(true);
    setMusicaAtual(musica);
    setIsOpen(true);
  }

  useEffect(() => {
    randomize();
  }, []);

  return (
    <Container>
      <Bg>
        <button
          type="button"
          className="reRandom"
          onClick={() => randomize()}
        >
          <FaRedoAlt
            className="icon"
          />
        </button>
        {musicas.map((musica, index) => (
          <Musica
            key={index}
            x={musica.x}
            y={musica.y}
            onClick={() => playSong(musica)}
          >
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
