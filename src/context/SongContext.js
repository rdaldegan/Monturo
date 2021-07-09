import React, { createContext, useContext, useState } from 'react';

const musicList = [
  {
    id: 1,
    url: '/musicas/tapera jardimcorrégo mix_v2.wav',
    nome: 'Tapera córrego',
  },
  {
    id: 2,
    url: '/musicas/tapera monturo mixv4.wav',
    nome: 'Tapera monturo',
  },
  {
    id: 3,
    url: '/musicas/tapera funk_mix v009 Copy.wav',
    nome: 'Tapera funk',
  },
  {
    id: 4,
    url: '/musicas/tapera 7 - um barato fundamental V6.wav',
    nome: 'Tapera barato fundamental',
  },
  {
    id: 5,
    url: '/musicas/Arpejadores_MASTER_24.03.2021.wav',
    nome: 'Tapera arpejadores',
  },
  {
    id: 6,
    url: '/musicas/tudo foi feito pra gente lacrar remix v7.wav',
    nome: 'Tudo foi feito pra gnt lacrar remix',
  },
  {
    id: 7,
    url: '/musicas/vozes_mix_v003.wav',
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
