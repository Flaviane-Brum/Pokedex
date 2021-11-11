import axios from "axios";
import { createContext, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "./services/api";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { push } = useHistory();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemonEvolution, setPokemonEvolution] = useState([]);
  const fetchEvoImages = async (evoChainArr) => {
    for (let i = 0; i < evoChainArr.length; i++) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${evoChainArr[i].species_name}`
      );
      evoChainArr[i][
        "image_url"
      ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`;
    }
    setPokemonEvolution(evoChainArr);
  };

  const handleSubmit = useCallback(
    async (input) => {
      push({
        pathname: `/${input}`,
        state: {
          input,
        },
      });
      setError(false);
      setLoading(true);
      api
        .get(`pokemon-species/${input}`)
        .then((response) => {
          setPokemonSpecies({
            id: response.data.id,
            color: response.data.color.name,
            egg: response.data.egg_groups.map((eggInfo) => eggInfo.name),
            flavor: response.data.flavor_text_entries.map(
              (flavor) => flavor.flavor_text
            ),
            habitat: response.data.habitat?.name,
            evolution: response.data.evolution_chain.url,
          });

          api.get(response.data.evolution_chain.url).then((response) => {
            let evoChain = [];
            let evoData = response.data.chain;
            do {
              var evoDetails = evoData["evolution_details"][0];
              let numberOfEvolutions = evoData.evolves_to.length;
              evoChain.push({
                species_name: evoData.species.name,
                min_level: !evoDetails ? 1 : evoDetails.min_level,
                trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                item: !evoDetails ? null : evoDetails.item,
              });

              if (numberOfEvolutions > 1) {
                for (let i = 1; i < numberOfEvolutions; i++) {
                  evoChain.push({
                    species_name: evoData.evolves_to[i].species.name,
                    min_level: !!evoData.evolves_to[i]
                      ? 1
                      : evoData.evolves_to[i].min_level,
                    trigger_name: !!evoData.evolves_to[i]
                      ? null
                      : evoData.evolves_to[i].trigger.name,
                    item: !!evoData.evolves_to[i]
                      ? null
                      : evoData.evolves_to[i].item,
                  });
                }
              }

              evoData = evoData.evolves_to[0];
            } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

            fetchEvoImages(evoChain);
          });
          api.get(`pokemon/${input}`).then((response) => {
            const {
              id,
              species,
              weight,
              height,
              sprites,
              types,
              abilities,
              stats,
            } = response.data;

            setPokemon({
              id: id,
              name: species.name,
              url: species.url,
              number: `#${"000".substr(id.toString().length)}${id}`,
              sprites: sprites.front_default,
              // TESTE
              image: sprites.other.dream_world.front_default
                ? sprites.other.dream_world.front_default
                : sprites.other["official-artwork"].front_default,
              weight: `${weight / 10} kg`,
              height: `${height / 10} m`,
              types: types.map((typeInfo) => typeInfo.type.name),
              ability: abilities.map((abilityInfo) => abilityInfo.ability.name),
              stats: {
                hp: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                specialAttack: stats[3].base_stat,
                specialDefense: stats[4].base_stat,
                speed: stats[5].base_stat,
              },
            });
          });
        })
        .catch((err) => {
          setError(err);
          console.log(err.message);
          setPokemonSpecies(null);
          setPokemon(null);
          setPokemonEvolution([]);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [push]
  );

  return (
    <GlobalContext.Provider
      value={{
        pokemon,
        pokemonSpecies,
        handleSubmit,
        setPokemon,
        setPokemonSpecies,
        setPokemonEvolution,
        pokemonEvolution,
        error,
        loading,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
