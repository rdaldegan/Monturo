import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import {
  IoPlaySkipBack, IoPlaySkipForward, IoPlay, IoPause, IoVolumeLow, IoVolumeHigh, IoClose,
} from 'react-icons/io5';

import { useSongs } from '../../context/SongContext';

const Container = styled.div`
  display: ${(props) => props.display};

  position: fixed;
  bottom: 0;

  overflow: hidden;
  background-color: peru;
  height: 80px;
  width: 100%;
  grid-template-columns: 6fr 10fr 4fr 1fr;

  button{
    background: none;
    border: none;
  }

  .button-icon{
    cursor: pointer;
    font-size: 25px;

    :hover{
      color: #895201;
    }
  }

  .icon{
    font-size: 25px;
  }

  .group{
    margin: 10px;
    display: flex;
    flex: row;
    align-items: center;

    .duration{
      width: 100%;
    }
  }

  .lastGroup{
    margin-left: auto;
  }
`;

export default function Player() {
  const {
    musicas,
    musicaAtual,
    setMusicaAtual,
    isPlaying,
    setIsPlaying,
    isOpen,
    setIsOpen,
  } = useSongs();

  return (
    <Container display={isOpen ? 'grid' : 'none'}>
      <audio src={musicaAtual.url} preload="metadata" />
      <div className="group">
        <button
          type="button"
          onClick={() => {
            if (musicaAtual.id > 1) {
              setMusicaAtual(musicas[musicaAtual.id - 2]);
            } else {
              setMusicaAtual(musicas[musicas.length - 1]);
            }
          }}
        >
          <IoPlaySkipBack className="button-icon" />
        </button>
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <IoPlay className="button-icon" /> : <IoPause className="button-icon" />}
        </button>
        <button
          type="button"
          onClick={() => {
            if (musicaAtual.id < musicas.length) {
              setMusicaAtual(musicas[musicaAtual.id]);
            } else {
              setMusicaAtual(musicas[0]);
            }
          }}
        >
          <IoPlaySkipForward className="button-icon" />
        </button>
        <p>{musicaAtual.nome}</p>
      </div>
      <div className="group">
        <span>00:00</span>
        <input className="duration" type="range" />
        <span>59:59</span>
      </div>
      <div className="group">
        <span><IoVolumeLow className="icon" /></span>
        <input className="volume" type="range" />
        <span><IoVolumeHigh className="icon" /></span>
      </div>
      <div className="group lastGroup">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="button-icon" />
        </button>
      </div>

    </Container>
  );
}
