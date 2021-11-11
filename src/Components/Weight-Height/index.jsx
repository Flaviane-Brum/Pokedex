import React, { useContext } from "react";
import { UserContext } from "../../global";
// import { GlobalContext } from "../../GlobalContext";
import * as S from "./style";
const WeightHeight = () => {
  const { pokemon } = useContext(UserContext);

  return (
    <S.Ul>
      {pokemon && (
        <>
          <li>weight {pokemon.weight}</li>
          <li>Height {pokemon.height}</li>
        </>
      )}
    </S.Ul>
  );
};

export default WeightHeight;
