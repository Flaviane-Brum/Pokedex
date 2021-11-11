import React, { useContext } from "react";
import {
  GiBurningForest,
  GiGrass,
  GiMountaintop,
  GiEarthSpit,
  GiMountainCave,
  GiModernCity,
  GiWaterfall,
} from "react-icons/gi";
import { BiWater } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import * as S from "./styles";
import { GlobalContext } from "../../GlobalContext";
const Habitat = () => {
  const { pokemonSpecies } = useContext(GlobalContext);
  return (
    <>
      {pokemonSpecies.habitat === "forest" && (
        <>
          <S.P>
            Habitat
            <span>{pokemonSpecies.habitat}</span>
            <GiBurningForest color="green" size={16} />
          </S.P>
        </>
      )}
      {pokemonSpecies.habitat === "grassland" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiGrass color="#F7AC73" size={16} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "mountain" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiMountaintop color="grey" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "waters-edge" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiWaterfall color="blue" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "rough-terrain" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiEarthSpit color="brown" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "cave" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiMountainCave color="#444" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "urban" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <GiModernCity color="grey" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "sea" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <BiWater color="lightblue" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === "rare" && (
        <S.P>
          <span>Habitat</span> {pokemonSpecies.habitat}
          <FaQuestion color="#333" size={20} />
        </S.P>
      )}
      {pokemonSpecies.habitat === null && (
        <S.P>
          <span>NULL</span> {pokemonSpecies.habitat}
          <FaQuestion color="#333" size={20} />
        </S.P>
      )}
    </>
  );
};

export default Habitat;
