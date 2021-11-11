import React, { useContext } from "react";
import { RiStarSFill } from "react-icons/ri";
import * as S from "./styles";
import { GlobalContext } from "../../GlobalContext";
const Abilities = () => {
  const { pokemon, pokemonSpecies } = useContext(GlobalContext);
  return (
    <S.AbilitiesContainer>
      {pokemon && (
        <>
          <h4 className={pokemonSpecies.color}>Abilities</h4>
          <S.Ul>
            {pokemon.ability &&
              pokemon.ability.map((info) => (
                <li key={info}>
                  <RiStarSFill size={16} /> {info}
                </li>
              ))}
          </S.Ul>
        </>
      )}
    </S.AbilitiesContainer>
  );
};

export default Abilities;
