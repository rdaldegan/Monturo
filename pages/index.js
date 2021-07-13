/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import React, { useEffect } from 'react';

import { FaRedoAlt } from 'react-icons/fa';

import { useSongs } from '../src/context/SongContext';

const Container = styled.div`
  font-size: 90%;
  overflow: hidden;
  position: relative;
  min-height: 100vh;

   
  @media (max-width: 1440px) {
    font-size: 62.5%;
  }
  @media (max-width: 450px) {
    font-size: 50%;
  }
  @media (max-width: 375px) {
    font-size: 45%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
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
      font-size: 2em;
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

  font-size: 1em;
  line-height: 2em;
  max-width: 20vw;
  max-height: 10vh;
  border-radius: 25px;
  padding: 0 15px;
  margin: 0;
  font-family: 'Press Start 2P', cursive;

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
      let fit = false;
      let counter = 0;
      while (!fit) {
        counter += 1;
        let hit = false;
        const x = Math.random() * (70 - 10) + 10;
        const y = Math.random() * (70 - 10) + 10;
        for (let j = 0; j < i; j += 1) {
          const hitX = Math.abs(mus[j].x - x) < 25;
          const hitY = Math.abs(mus[j].y - y) < 12;
          if (hitX && hitY && counter < 100) {
            hit = true;
          }
        }
        if (!hit) {
          fit = true;
          mus[i] = {
            ...mus[i],
            x,
            y,
          };
        }
      }
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
      <video autoPlay muted loop>
        <source src="/videos/nathi.mp4" type="video/mp4" />
      </video>
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
