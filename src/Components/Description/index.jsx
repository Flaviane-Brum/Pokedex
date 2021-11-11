import React, { useContext, useEffect, useState } from "react";
import SpanTypes from "../SpanTypes";
import About from "../About";
import BaseStats from "../BaseStatus";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import Loading from "../Helper/Loading";
import ErrorComponent from "../Helper/ErrorComponent";
import { GlobalContext } from "../../GlobalContext";
import GridEvolutionContainer from "../GridEvolutionContainer";
import FlexEvolutionContainer from "../FlexEvolutionContainer";

const Description = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { slug } = useParams();
  const {
    handleSubmit,
    pokemon,
    loading,
    pokemonSpecies,
    error,
    pokemonEvolution,
  } = useContext(GlobalContext);
  useEffect(() => {
    if (slug !== undefined) {
      handleSubmit(slug);
    }
  }, [handleSubmit, slug]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent error="Erro 404 - Não Encontrado" />;
  if (pokemon && pokemonSpecies)
    return (
      <S.Sprite className={`flip-in-ver-left `}>
        <S.SpriteContent>
          <S.SpriteImg className={`${pokemonSpecies.color} slide-right  `}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={`pokemon  `}
            />
          </S.SpriteImg>
          <S.SpriteItem>
            <h4>
              {pokemon.name}
              <span>{pokemon.number}</span>
            </h4>

            <SpanTypes />
          </S.SpriteItem>
        </S.SpriteContent>
        <S.Container>
          <S.BlockTabs>
            <S.Button
              className={
                toggleState === 1 ? ` ${pokemonSpecies.color} active-tabs` : ""
              }
              onClick={() => toggleTab(1)}
              color={pokemonSpecies.color}
            >
              About
            </S.Button>
            <S.Button
              color={pokemonSpecies.color}
              className={
                toggleState === 2 ? `${pokemonSpecies.color}   active-tabs` : ""
              }
              onClick={() => toggleTab(2)}
            >
              Status
            </S.Button>
            <S.Button
              color={pokemonSpecies.color}
              className={
                toggleState === 3 ? ` ${pokemonSpecies.color}  active-tabs` : ""
              }
              onClick={() => toggleTab(3)}
            >
              Evolutions
            </S.Button>
          </S.BlockTabs>

          <S.ContentTabs>
            <S.Content className={toggleState === 1 ? "  active-content" : ""}>
              <About />
            </S.Content>
            <S.Content className={toggleState === 2 ? "  active-content" : ""}>
              <BaseStats />
            </S.Content>
            <S.Content className={toggleState === 3 ? "  active-content" : ""}>
              {pokemonEvolution &&
                (pokemonEvolution.length > 4 ? (
                  <GridEvolutionContainer />
                ) : (
                  <FlexEvolutionContainer />
                ))}
            </S.Content>
          </S.ContentTabs>
        </S.Container>
      </S.Sprite>
    );
  else return null;
};

export default Description;
