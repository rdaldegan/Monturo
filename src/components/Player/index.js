import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  IoPlaySkipBack, IoPlaySkipForward, IoPlay, IoPause, IoVolumeLow, IoVolumeHigh, IoClose,
} from 'react-icons/io5';

import { useSongs } from '../../context/SongContext';

const Container = styled.div`
  display: ${(props) => props.display};

  font-size: 62.5%;

  position: fixed;
  bottom: 0;

  overflow: hidden;
  background-color: peru;
  height: 60px;
  width: 100%;
  grid-template-columns: 6fr 10fr 2fr 1fr;
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  button{
    background: none;
    border: none;
  }

  .button-icon{
    cursor: pointer;
    font-size: 25px;
    color: red;
    color: #222222;
    :hover{
      color: #895201;
    }
  }

  .icon{
    font-size: 25px;
    color: #222222;
  }

  .songTitle{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  .group{
    margin: 10px;
    display: flex;
    flex: row;
    align-items: center;
    overflow: hidden !important;

    .duration, .volume{
      width: 100%;
      margin: 10px;
      appearance: none;
      background: #895201;
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 7px;
      outline: none;
      cursor: pointer;
      transform: translateY(-2px);
    }
    .duration::-webkit-slider-runnable-track {
      width: 100%;
      background: #895201;
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 7px;
      outline: none;
    }
    .duration::-moz-range-track {
      width: 100%;
      background: #895201;
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 7px;
      outline: none;
    }
    .duration::-moz-focus-ouuter {
      border: 0;
    }
    .duration::before {
      content: '';
      height: 7px;
      width: ${(props) => props.durationProgress};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      cursor: pointer;
      background-color: #222222;
    }
    .duration::-moz-range-progress {
      background-color: #222222;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 7px;
    }
    .duration::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      border: none;
      background-color: #222222;
      transform: translateY(-25%);
      cursor: pointer;
      position: relative;
      z-index: 103;
    }
    .duration::-webkit-slider-thumb:hover {
      background-color: #432800;
    }
    .duration:active::-webkit-slider-thumb {
      transform: scale(1.2) translateY(-20%);
    }
    .duration::-moz-range-thumb {
      -webkit-appearance: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      border: transparent;
      background-color: #222222;
      cursor: pointer;
      position: relative;
      z-index: 103;
    }
    .duration::-moz-slider-thumb:hover {
      background-color: #432800;
    }
    .duration:active::-moz-slider-thumb {
      transform: scale(1.2) translateY(-20%);
    }
    .volume::-webkit-slider-runnable-track {
      width: 100%;
      background: #895201;
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 7px;
      outline: none;
    }
    .volume::-moz-range-track {
      width: 100%;
      background: #895201;
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 7px;
      outline: none;
    }
    .volume::-moz-focus-ouuter {
      border: 0;
    }
    .volume::before {
      content: '';
      height: 7px;
      width: ${(props) => props.volume};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      cursor: pointer;
      background-color: #222222;
    }
    .volume::-moz-range-progress {
      background-color: #222222;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 7px;
    }
    .volume::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      border: none;
      background-color: #222222;
      transform: translateY(-25%);
      cursor: pointer;
      position: relative;
      z-index: 103;
    }
    .volume::-webkit-slider-thumb:hover {
      background-color: #432800;
    }
    .volume:active::-webkit-slider-thumb {
      transform: scale(1.2) translateY(-20%);
    }
    .volume::-moz-range-thumb {
      -webkit-appearance: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      border: transparent;
      background-color: #222222;
      cursor: pointer;
      position: relative;
      z-index: 103;
    }volume
    .volume::-moz-slider-thumb:hover {
      background-color: #432800;
    }
    .volume:active::-moz-slider-thumb {
      transform: scale(1.2) translateY(-20%);
    }
  }

  .lastGroup{
    min-width: 30px;
    margin-left: auto;
    grid-column-start: 4;
    grid-column-end: 5;
  }

  @media (max-width: 1200px){
    .volumeGroup {
      background-color: red;
      display: none;
    }
    .durationGroup {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  } 
  @media (max-width: 768px){
    .durationGroup {
      display: none;
    }
    .volumeGroup {
      grid-column-start: 3;
      grid-column-end: 5;
    }
    .firstGroup{
      grid-column-start: 1;
      grid-column-end: 3;
    }
  } 
`;

export default function Player() {
  const player = useRef();
  const durationInput = useRef(null);
  const animation = useRef(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolme, setCurrentVolume] = useState(50);

  const {
    musicas,
    musicaAtual,
    setMusicaAtual,
    isPlaying,
    setIsPlaying,
    isOpen,
    setIsOpen,
  } = useSongs();

  const whilePlaying = () => {
    durationInput.current.value = player.current.currentTime;
    setCurrentTime(durationInput.current.value);
    if (player.current.currentTime !== player.current.duration) {
      if (!player.current.paused) {
        requestAnimationFrame(whilePlaying);
      }
    } else if (musicaAtual.id < musicas.length) {
      setMusicaAtual(musicas[musicaAtual.id]);
    } else {
      setMusicaAtual(musicas[0]);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      player.current.load();
      player.current.play();
      animation.current = requestAnimationFrame(whilePlaying);
    } else {
      player.current.pause();
    }
  }, [musicaAtual]);

  function changeIsPlaying() {
    const play = !isPlaying;
    setIsPlaying(!isPlaying);
    if (play) {
      player.current.play();
      animation.current = requestAnimationFrame(whilePlaying);
    } else {
      player.current.pause();
      setIsPlaying(false);
    }
  }

  function convertTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutesString}:${secondsString}`;
  }

  return (
    <Container display={isOpen ? 'grid' : 'none'} durationProgress={`${(currentTime / duration) * 100}%`} volume={`${currentVolme}%`}>
      <audio
        ref={player}
        src={musicaAtual.url}
        preload="metadata"
        onLoadedMetadata={(e) => {
          setDuration(e.target.duration);
          player.current.volume = (currentVolme / 100);
        }}
      />
      <div className="group firstGroup">
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
          onClick={() => changeIsPlaying()}
        >
          {isPlaying ? <IoPause className="button-icon" /> : <IoPlay className="button-icon" />}
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
        <p className="songTitle ">{musicaAtual.nome}</p>
      </div>
      <div className="group durationGroup">
        <span>{(currentTime && !Number.isNaN(currentTime)) ? convertTime(currentTime) : '00:00'}</span>
        <input
          ref={durationInput}
          className="duration"
          type="range"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            player.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />
        <span>{(duration && !Number.isNaN(duration)) ? convertTime(duration) : '00:00'}</span>
      </div>
      <div className="group volumeGroup">
        <span><IoVolumeLow className="icon" /></span>
        <input
          className="volume"
          type="range"
          max="100"
          value={currentVolme}
          onChange={(e) => {
            player.current.volume = e.target.value / 100;
            setCurrentVolume(e.target.value);
          }}
        />
        <span><IoVolumeHigh className="icon" /></span>
      </div>
      <div className="group lastGroup">
        <button
          type="button"
          onClick={() => {
            player.current.pause();
            setIsOpen(false);
            setIsPlaying(false);
          }}
        >
          <IoClose className="button-icon" />
        </button>
      </div>

    </Container>
  );
}
