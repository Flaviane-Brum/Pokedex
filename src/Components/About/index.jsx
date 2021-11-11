import React, { useContext } from "react";
import Habitat from "../../Components/Habitat";
import * as S from "./styles";
import EggGroup from "../../Components/EggGroup";
import Abilities from "../../Components/Abilities";
import { GlobalContext } from "../../GlobalContext";
const About = () => {
  const { pokemonSpecies } = useContext(GlobalContext);
  return (
    <>
      {pokemonSpecies && (
        <S.ABoutContainer className="slide-down">
          <S.Container>
            <EggGroup />
            <Abilities />
          </S.Container>
          <S.Bio>
            <h4>Biography</h4>

            <p>{pokemonSpecies.flavor[1]}</p>
            <Habitat />
          </S.Bio>
        </S.ABoutContainer>
      )}
    </>
  );
};

export default About;
