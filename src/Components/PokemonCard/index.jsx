import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ErrorComponent from "../Helper/ErrorComponent";

import * as S from "./styles";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokeList, setPokeList] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { name } = pokemonUrl;
  useEffect(() => {
    try {
      setLoading(true);
      setError(false);
      api.get(`/pokemon/${name}`).then((response) => {
        const { id, sprites, species, weight, height } = response.data;
        setPokeList({
          id,
          name: species.name,
          number: `#${"000".substr(id.toString().length)}${id}`,
          sprite: sprites.other["official-artwork"].front_default
            ? sprites.other["official-artwork"].front_default
            : sprites.other.dream_world.front_default,

          weight: `${weight / 10} kg`,
          height: `${height / 10} m`,
        });
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [name]);
  if (error) return <ErrorComponent error={error} />;
  if (loading) return <p>CARREGANDO...</p>;
  if (pokeList === null) return null;
  return (
    <S.CardList to={`/${pokeList.name} `}>
      <div className="poke-img">
        {pokeList.name}
        <span>{pokeList.number}</span>

        <img src={pokeList.sprite} alt={pokeList.name} />
      </div>
      <div className="poke-desc">
        <p>
          Weight <span>{pokeList.weight}</span>
        </p>
        <p>
          Height <span> {pokeList.height}</span>
        </p>
      </div>
    </S.CardList>
  );
};

export default PokemonCard;
