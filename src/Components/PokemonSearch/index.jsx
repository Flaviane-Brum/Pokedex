import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Form from "../Form";
import PokemonCard from "../PokemonCard";
import * as S from "./styles";
const PokemonSearch = ({ openPokedex }) => {
  const [input, setInput] = useState("");
  const {
    pokemonList,
    handlePokemonList,
    loading,
    fetchMorePokemons,
    pokemonOffset,
  } = useFetch();
  useEffect(() => {
    if (openPokedex) {
      handlePokemonList();
      setInput("");
    }
  }, [handlePokemonList, openPokedex]);

  return (
    <>
      <S.PokemonSearchContainer>
        <S.PokemonSearchContent openPokedex>
          <S.Display>
            <S.DisplayNav>
              <S.Screen>
                {pokemonList &&
                  pokemonList.map((pokemon, index) => (
                    <li key={index}>
                      <PokemonCard pokemonUrl={pokemon} />
                    </li>
                  ))}
              </S.Screen>
            </S.DisplayNav>

            <S.Sound>
              <div className="m-red-circle"></div>
              {loading ? (
                <button disabled>Loading...</button>
              ) : (
                <button onClick={() => fetchMorePokemons(pokemonOffset)}>
                  Show more
                </button>
              )}

              <div className="lines"></div>
            </S.Sound>
          </S.Display>

          <Form input={input} setInput={setInput} openPokedex={openPokedex} />
        </S.PokemonSearchContent>
      </S.PokemonSearchContainer>
    </>
  );
};

export default PokemonSearch;
