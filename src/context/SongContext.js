import React, { createContext, useContext, useState } from 'react';

const musicList = [
  {
    id: 1,
    url: '/moleca.mp3',
    nome: 'Tapera córrego',
  },
  {
    id: 2,
    url: '/fuifiel.mp3',
    nome: 'Tapera monturo',
  },
  {
    id: 3,
    url: '/moleca.mp3',
    nome: 'Tapera funk',
  },
  {
    id: 4,
    url: '/moleca.mp3',
    nome: 'Tapera barato fundamental',
  },
  {
    id: 5,
    url: '/moleca.mp3',
    nome: 'Tapera arpejadores',
  },
  {
    id: 6,
    url: '/moleca.mp3',
    nome: 'Tudo foi feito pra gnt lacrar remix',
  },
  {
    id: 7,
    url: '/moleca.mp3',
    nome: 'Tapera voz',
  },
];

const SongContext = createContext();

export default function SongsProvider({ children }) {
  const [musicas, setMusicas] = useState(musicList);
  const [musicaAtual, setMusicaAtual] = useState(musicas[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SongContext.Provider value={{
      musicas,
      setMusicas,
      musicaAtual,
      setMusicaAtual,
      isPlaying,
      setIsPlaying,
      isOpen,
      setIsOpen,
    }}
    >
      {children}
    </SongContext.Provider>
  );
}

export function useSongs() {
  const context = useContext(SongContext);
  if (!context) throw new Error('useSongs must have a Songs provider wrapper in root application');
  const {
    musicas,
    setMusicas,
    musicaAtual,
    setMusicaAtual,
    isPlaying,
    setIsPlaying,
    isOpen,
    setIsOpen,
  } = context;

  return {
    musicas,
    setMusicas,
    musicaAtual,
    setMusicaAtual,
    isPlaying,
    setIsPlaying,
    isOpen,
    setIsOpen,
  };
}
