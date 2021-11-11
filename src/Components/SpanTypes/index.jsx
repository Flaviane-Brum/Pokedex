import React, { useContext } from "react";
import { ReactComponent as Grass } from "../../assets/icons/grass.svg";
import { ReactComponent as Bug } from "../../assets/icons/bug.svg";
import { ReactComponent as Fire } from "../../assets/icons/fire.svg";
import { ReactComponent as Ice } from "../../assets/icons/ice.svg";
import { ReactComponent as Dark } from "../../assets/icons/dark.svg";
import { ReactComponent as Dragon } from "../../assets/icons/dragon.svg";
import { ReactComponent as Electric } from "../../assets/icons/electric.svg";
import { ReactComponent as Fairy } from "../../assets/icons/fairy.svg";
import { ReactComponent as Fighting } from "../../assets/icons/fighting.svg";
import { ReactComponent as Flying } from "../../assets/icons/flying.svg";
import { ReactComponent as Ghost } from "../../assets/icons/ghost.svg";
import { ReactComponent as Ground } from "../../assets/icons/ground.svg";
import { ReactComponent as Normal } from "../../assets/icons/normal.svg";
import { ReactComponent as Poison } from "../../assets/icons/poison.svg";
import { ReactComponent as Psychic } from "../../assets/icons/psychic.svg";
import { ReactComponent as Water } from "../../assets/icons/water.svg";
import { ReactComponent as Steel } from "../../assets/icons/steel.svg";
import { ReactComponent as Rock } from "../../assets/icons/rock.svg";

import * as S from "./styles";
import { GlobalContext } from "../../GlobalContext";
const SpanTypes = () => {
  const { pokemon } = useContext(GlobalContext);
  if (pokemon)
    return (
      <>
        {pokemon.types &&
          pokemon.types.map((typeName) => {
            switch (typeName) {
              case "grass":
                return (
                  <S.Span key={typeName}>
                    <Grass />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "bug":
                return (
                  <S.Span key={typeName}>
                    <Bug />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "fire":
                return (
                  <S.Span key={typeName}>
                    <Fire />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "water":
                return (
                  <S.Span key={typeName}>
                    <Water />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "ice":
                return (
                  <S.Span key={typeName}>
                    <Ice />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "poison":
                return (
                  <S.Span key={typeName}>
                    <Poison />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "steel":
                return (
                  <S.Span key={typeName}>
                    <Steel />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "flying":
                return (
                  <S.Span key={typeName}>
                    <Flying />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "fairy":
                return (
                  <S.Span key={typeName}>
                    <Fairy />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "ground":
                return (
                  <S.Span key={typeName}>
                    <Ground />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "rock":
                return (
                  <S.Span key={typeName}>
                    <Rock />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "dragon":
                return (
                  <S.Span key={typeName}>
                    <Dragon />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "ghost":
                return (
                  <S.Span key={typeName}>
                    <Ghost />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "normal":
                return (
                  <S.Span key={typeName}>
                    <Normal />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "dark":
                return (
                  <S.Span key={typeName}>
                    <Dark />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "psychic":
                return (
                  <S.Span key={typeName}>
                    <Psychic />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "electric":
                return (
                  <S.Span key={typeName}>
                    <Electric />
                    <p>{typeName}</p>
                  </S.Span>
                );
              case "fighting":
                return (
                  <S.Span key={typeName}>
                    <Fighting />
                    <p>{typeName}</p>
                  </S.Span>
                );

              default:
                return null;
            }
          })}
      </>
    );
  return null;
};

export default SpanTypes;
