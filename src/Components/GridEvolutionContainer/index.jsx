import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { GlobalContext } from "../../GlobalContext";

const GridEvolutionContainer = () => {
  const { pokemonEvolution, pokemonSpecies } = useContext(GlobalContext);
  return (
    <S.GridEvolutionContainer>
      {pokemonEvolution.map((item) => (
        <S.GridEvolutionItem key={item.species_name}>
          <S.GridEvolutionSprite className={pokemonSpecies.color}>
            <Link to={`/${item.species_name}`}>
              <img
                src={item.image_url}
                alt={item.species_name}
                className="rotate1"
              />
            </Link>
          </S.GridEvolutionSprite>

          {pokemonEvolution.length > 1 ? (
            <>
              <small>{item.species_name}</small>
            </>
          ) : (
            <>
              <p>{item.species_name}</p>
              <h4>Este Pokémon não evolui.</h4>
            </>
          )}
        </S.GridEvolutionItem>
      ))}
    </S.GridEvolutionContainer>
  );
};

export default GridEvolutionContainer;
