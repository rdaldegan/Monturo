import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  overflow: hidden;
  font-size: 62.5%;
  width: 100%;
  height: 160px;
  background: #222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #f2923c;
  font-family: 'Press Start 2P', cursive;
  font-weight: 100;

  hr{
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 40%;
  }
  @media (max-width: 550px) {
    font-size: 40%;
    flex-direction: column;
    hr {
      display: block;
      width: 100vw;
      border: 1px solid #f2923c;
    }
  }
  @media (max-width: 310px) {
    font-size: 30%;
    flex-direction: column;
    hr {
      display: block;
      width: 100vw;
      border: 1px solid #f2923c;
    }
  }
  
  .menu-options{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    li{
      font-size: 2em;
      margin: 30px;
      color: #f2923c;
      font-family: 'Press Start 2P', cursive;
      font-weight: 100;
      text-decoration: none;
      list-style: none;
      transition: 0.1s;
      :hover{
        transform: scale(1.1);
      }
      :active{
        transform: scale(1);
      }
    }
  }

  .glitch {
    cursor: pointer;
    font-size: 6em;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .glitch span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .glitch span:first-child {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 45%);
    transform: translate(-0.045em, -0.0425em);
  }

  .glitch span:last-child {
    clip-path: polygon(0 60%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.045em, 0.025em);
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
      <hr />
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
