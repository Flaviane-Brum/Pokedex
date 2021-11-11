import React, { useContext } from "react";
import * as S from "./styles";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../../GlobalContext";
const Form = ({ input, setInput }) => {
  const { handleSubmit, setPokemon, setPokemonSpecies } =
    useContext(GlobalContext);
  function handleChange(e) {
    setInput(e.target.value.toLowerCase());
  }
  function handleReset() {
    setPokemon(null);
    setPokemonSpecies(null);
    setInput("");
  }

  return (
    <>
      <S.FormSearch
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
      >
        <button type="submit" aria-label="Procurar">
          <FaSearch />
        </button>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Procure pelo nome do Pokémon ou ID"
        />
      </S.FormSearch>
      <S.Reset openPokedex>
        <S.Button to="/" onClick={handleReset} aria-label="Resetar">
          Reset
        </S.Button>

        <div className="cross">
          <div className="c1">O</div>
        </div>
      </S.Reset>
    </>
  );
};

export default Form;
