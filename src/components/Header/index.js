import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`

@font-face {
  font-family: "slkscrb";
  src: url('/font/slkscr-webfont.woff') format("woff");
  font-style: normal;
  font-weight: 100;
}

  height: 160px;
  background: #222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #f2923c;
  font-family: 'slkscrb';
  font-weight: 100;
  
  .menu-options{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    :hover{
      transform: scale(1.1);
      transition: 0.3s;
    }

    li{
      font-size: 2rem;
      margin: 30px;
      color: #f2923c;
      font-family: 'slkscrb';
      font-weight: 100;
      text-decoration: none;
      list-style: none;
    }
  }

  .glitch {
    cursor: pointer;
    font-size: 7rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    text-shadow: 0.05em 0 0 #f2923c;
  }

  .glitch span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .glitch span:first-child {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 45%);
    transform: translate(-0.045em, -0.0425em);
    opacity: 0.8;
  }

  .glitch span:last-child {
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.0425em, 0.045em);
    opacity: 0.8;
  }

`;

export default function Header() {
  return (
    <Container>
      <Link href="/" className="title">
        <h1 className="glitch">
          <span aria-hidden="true">Monturo</span>
          Monturo
          <span aria-hidden="true">Monturo</span>
        </h1>
      </Link>
      <div className="menu-options">
        <Link href="/coletivo">
          <li className="glitch">
            <span aria-hidden="true">O Coletivo</span>
            O Coletivo
            <span aria-hidden="true">O Coletivo</span>
          </li>
        </Link>
      </div>
    </Container>
  );
}
