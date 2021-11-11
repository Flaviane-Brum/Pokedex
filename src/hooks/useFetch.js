import { useCallback, useState } from "react";
import api from "../services/api";

const useFetch = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const pokemonNumbers = 8;
  const [pokemonOffset, setPokemonOffset] = useState(pokemonNumbers);

  const handlePokemonList = useCallback(async (offset) => {
    let response;
    let pokemon;
    try {
      setError(null);
      setLoading(true);
      response = await api.get("/pokemon/", {
        params: {
          limit: pokemonNumbers,
          offset,
        },
      });

      const results = response.data.results;
      setPokemonList(results);
    } catch (err) {
      pokemon = null;
      setError(err.message);
    } finally {
      setLoading(false);
      return { response, pokemon };
    }
  }, []);
  const fetchMorePokemons = useCallback(async (offset) => {
    setLoading(true);
    let res;
    let results;
    try {
      res = await api.get("/pokemon/", {
        params: {
          limit: pokemonNumbers,
          offset,
        },
      });

      results = res.data.results;
      setPokemonList((poke) => [...poke, ...results]);
      setPokemonOffset((offset) => offset + pokemonNumbers);
    } catch (err) {
      results = null;
      setError(err.message);
    } finally {
      setLoading(false);
      return { res, results };
    }
  }, []);

  return {
    pokemonList,
    error,
    loading,
    handlePokemonList,
    setPokemonList,
    fetchMorePokemons,
    pokemonOffset,
  };
};

export default useFetch;
