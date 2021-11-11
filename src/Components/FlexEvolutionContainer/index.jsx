import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import * as S from "./styles";
const FlexEvolutionContainer = () => {
  const { pokemonEvolution, pokemonSpecies } = useContext(GlobalContext);
  function userToClass(div) {
    var userClass = "";

    switch (div) {
      case 0:
        return (userClass = "rotate3");
      case 1:
        return (userClass = "rotate1");
      case 2:
        return (userClass = "rotate2");
      case 3:
        return (userClass = "rotate4");
      default:
        break;
    }

    return userClass;
  }
  return (
    <S.FlexEvolutionContainer>
      {pokemonEvolution.map((item, index) => (
        <S.FlexEvolutionLink
          key={item.species_name}
          to={`/${item.species_name}`}
          className={` ${userToClass(index)} `}
        >
          <img
            src={item.image_url}
            alt={item.species_name}
            className={pokemonSpecies.color}
          />
          {pokemonEvolution.length > 1 ? (
            <small className={pokemonSpecies.color}>{item.species_name}</small>
          ) : (
            <>
              <small className={pokemonSpecies.color}>
                {item.species_name}
              </small>
              <h4 className={pokemonSpecies.color}>Este Pokémon não evolui.</h4>
            </>
          )}
        </S.FlexEvolutionLink>
      ))}
    </S.FlexEvolutionContainer>
  );
};

export default FlexEvolutionContainer;
