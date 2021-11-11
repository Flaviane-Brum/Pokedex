import styled from "styled-components";

export const PokemonSearchContainer = styled.div`
  background: #bd0f34;
  background-color: #ce1131;
  grid-column: 1/2;
  padding: 1rem;
  box-shadow: 0px 7px 0px #951828, -6px 7px 0px #951828, -6px -20px 0px #951828;
  flex-direction: column;
  top: 0;
  grid-row: 2/-1;
  border-radius: 20px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  /* width: calc(100% - 50px);
  height: calc(100% - 69px); */

  /* testes */
  /* width: 100%;
  background-color: blue;
  /* height: 100%; */
  @media (max-width: 50.25rem) {
    grid-row: 2/3;
    grid-column: 1/4;
    border-bottom-right-radius: 20px;
  }
`;

export const PokemonSearchContent = styled.div`
  border-radius: 20px;
  background: #bd0f34;
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%), 0 -1px 2px rgb(0 0 0 / 40%);
  padding: 1rem;
  max-width: 100%;
  min-height: 100%;
`;

export const Display = styled.div`
  max-width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  border: 15px solid #dedede;
  background-color: #dedede;
  margin-bottom: 2rem;
  box-shadow: -6px 2px 1px 1px #626368, 2px 1px 3px 0px #626368;
  box-shadow: -6px 4px 2px #626368;
`;

export const DisplayNav = styled.nav`
  max-width: 100%;
`;
export const Screen = styled.ul`
  border-radius: 10px;
  overflow: auto;
  max-width: calc(100% - 12px);
  margin: 0 auto;
  height: 170px;
  padding: 0.5rem;
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 60%);
  background-color: #ffffff;
  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #fce94f; /* color of the tracking area */
    border: 10px;
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 60%);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3763a2; /* color of the scroll thumb */
    border-radius: 21px; /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 60%);
  }
`;

export const Sound = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  .m-red-circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-image: linear-gradient(135deg, #f30d00 10%, #db111d 100%);

    box-shadow: 0 2px 2px rgb(0 0 0 / 85%);
  }
  .lines {
    height: 2px;
    width: 50px;
    position: relative;
    background: #5c5c5c;
    box-shadow: 0px -5px 0px 0px #5c5c5c;

    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 50px;
      position: absolute;
      top: 5px;
      background: #5c5c5c;
      box-shadow: 0px 5px 0px 0px #5c5c5c;
    }
  }
  button {
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: #444;
    min-width: 4rem;
    padding: 0.5rem;
    box-sizing: border-box;
    transition: 0.1s;
    font-weight: 400;
    box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
    transition: 0.1s;

    &:hover,
    &:focus {
      outline: none;
      color: #333;
      box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
      box-shadow: inset 0 2px 2px rgb(0 0 0 / 40%);

      background-color: transparent;
    }
  }
`;
