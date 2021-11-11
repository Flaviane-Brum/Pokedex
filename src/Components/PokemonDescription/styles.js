import styled from "styled-components";
export const PokemonStatus = styled.div`
  box-sizing: border-box;
  transform-style: preserve-3d;
  position: relative;
  top: 0px;
  z-index: 999;
  grid-column: 1/3;
  grid-row: 2;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
  background-color: #ce1131;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
  transition: transform 0.6s linear;
  transform-origin: 100% 50%;
  gap: 0.5rem;
  .copyright {
    color: #4d0000;
  }
  @media (max-width: 50.25rem) {
    border-radius: 20px;
    transform-origin: 100% 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 20px;
    top: 0px;
    width: 100%;
    min-height: 100%;
  }

  &.open {
    transform-origin: 100% 50%;
    transform: perspective(1050px) rotateY(-180deg);
    box-shadow: inset 5px 0px 20px rgba(0, 0, 0, 0.2), 1px 0px 1px #810a1e;
    width: calc(100% - 20px);
    left: 0px;
    transition: transform 0.6s linear;
    height: 100%;
    grid-row: 2/3;
    grid-column: 1/3;
    left: 20px;
    border-bottom-right-radius: 0px;
    .copyright {
      transform: rotateY(180deg);
    }
    @media (max-width: 50.25rem) {
      transform-origin: 100% 100%;
      -webkit-transform: perspective(1050px) rotateX(180deg);
      transform: perspective(1050px) rotateX(180deg);
      left: 0px;
      grid-column: 1/4;
      width: 100%;
      border-bottom-right-radius: 20px;
      .copyright {
        transform: rotateX(180deg);
      }
      height: 100%;
    }
  }
  .pokedex {
    width: 60%;
    position: absolute;
    border-radius: 50%;
    align-self: center;
    backface-visibility: hidden;
    margin: 0 auto;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 30%), -1px -1px 2px rgb(0 0 0 / 30%);
  }

  .btnOpen {
    width: 55px;
    height: 25px;
    color: #333;
    font-weight: 400;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    background: #fce94f;
    bottom: 5px;
    box-shadow: -3px 0px 2px rgb(0 0 0 / 40%);
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      border-color: #fff;
      background: #3763a2;
      box-shadow: 0 0 0 3px #fce94f;
      color: #fce94f;
    }
  }
  .btnClose {
    width: 55px;
    height: 25px;
    justify-self: flex-start;
    color: #333;
    border: 0;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1rem;
    background: #fce94f;
    box-shadow: -3px 0px 2px rgb(0 0 0 / 40%);
    transform: rotateY(-180deg);
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      border-color: #fff;
      background: #3763a2;
      box-shadow: 0 0 0 3px #fce94f;
      color: #fce94f;
    }
    @media (max-width: 50.25rem) {
      transform: rotateX(-180deg);
    }
  }
`;
export const PokemonStatusContainer = styled.div`
  transform: rotateY(180deg);
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  @media (max-width: 50.25rem) {
    -webkit-transform: rotateX(-180deg);
  }
`;
