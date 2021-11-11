import React, { useContext } from "react";
import { Egg } from "../../Components/PokemonEggSvg";

import * as S from "./styles";
import { GlobalContext } from "../../GlobalContext";
const EggGroup = () => {
  const { pokemonSpecies } = useContext(GlobalContext);
  return (
    <S.ContainerSpan>
      <h4 className={pokemonSpecies.color}>Egg Groups</h4>
      {pokemonSpecies.egg &&
        pokemonSpecies.egg.map((eggName) => {
          switch (eggName) {
            case "plant":
              return (
                <S.Span key={eggName}>
                  <Egg color="#78C850" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "bug":
              return (
                <S.Span key={eggName}>
                  <Egg color="#A8B820" />

                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "monster":
              return (
                <S.Span key={eggName}>
                  <Egg color="#D25064" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "water1":
              return (
                <S.Span key={eggName}>
                  <Egg color="#4592C4" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "water2":
              return (
                <S.Span key={eggName}>
                  <Egg color="#729AFA" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "water3":
              return (
                <S.Span key={eggName}>
                  <Egg color="#5876BE" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "mineral":
              return (
                <S.Span key={eggName}>
                  <Egg color="#7A6252" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "flying":
              return (
                <S.Span key={eggName}>
                  <Egg color="#3DC7EF" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "fairy":
              return (
                <S.Span key={eggName}>
                  <Egg color="#EE99AC" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "ground":
              return (
                <S.Span key={eggName}>
                  <Egg color="#AB9842" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "humanshape":
              return (
                <S.Span key={eggName}>
                  <Egg color="#D29682" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "dragon":
              return (
                <S.Span key={eggName}>
                  <Egg color="#7A42FF" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "ditto":
              return (
                <S.Span key={eggName}>
                  <Egg color="#A664BF" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "indeterminate":
              return (
                <S.Span key={eggName}>
                  <Egg color="#888" />
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );
            case "no-eggs":
              return (
                <S.Span key={eggName}>
                  <S.EggName>{eggName}</S.EggName>
                </S.Span>
              );

            default:
              return null;
          }
        })}
    </S.ContainerSpan>
  );
};

export default EggGroup;
