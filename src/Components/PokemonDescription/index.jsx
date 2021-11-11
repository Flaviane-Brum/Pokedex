import React, { useContext } from "react";
import * as S from "./styles";
import pokeball from "../../assets/pokeball.png";
import { Switch, Route } from "react-router-dom";
import Description from "../Description";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GlobalContext } from "../../GlobalContext";

const PokemonDescription = ({ openPokedex, setOpenPokedex }) => {
  const { pokemonSpecies, setPokemon, setPokemonSpecies } =
    useContext(GlobalContext);
  const { push } = useHistory();
  const open = () => {
    setOpenPokedex(!openPokedex);
    setPokemon(null);
    setPokemonSpecies(null);
    push({
      pathname: `/`,
    });
  };
  return (
    <>
      <S.PokemonStatus className={openPokedex ? "open" : ""}>
        <S.PokemonStatusContainer
          className={pokemonSpecies && pokemonSpecies.color}
        >
          <Switch>
            <Route exact path="/:slug">
              <Description />
            </Route>
          </Switch>
        </S.PokemonStatusContainer>

        {openPokedex ? (
          <button onClick={open} className="btnClose">
            Close
          </button>
        ) : (
          <button
            onClick={() => {
              open();
            }}
            className="btnOpen"
          >
            Open
          </button>
        )}
        <img src={pokeball} alt="Pokeball" className="pokedex" />
        {openPokedex ? null : (
          <p className="copyright">
            Criado com <FaHeart size={13} /> por Flavi Brum
          </p>
        )}
      </S.PokemonStatus>
    </>
  );
};

export default PokemonDescription;
