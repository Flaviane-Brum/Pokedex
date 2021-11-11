import GlobalStyle from "./styles/global";
import * as S from "./App.styles";
import pokedex from "./assets/pokedex.png";
import Divider from "./Components/Divider";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import PokemonSearch from "./Components/PokemonSearch";
import PokemonDescription from "./Components/PokemonDescription";
import { GlobalProvider } from "./GlobalContext";

function App() {
  const [openPokedex, setOpenPokedex] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <GlobalProvider>
        <S.Main openPokedex={openPokedex}>
          <S.Container openPokedex={openPokedex}>
            <S.Circles>
              <S.BigCircle> </S.BigCircle>
              <S.RedCircle> </S.RedCircle>
              <S.YellowCircle> </S.YellowCircle>
              <S.GreenCircle> </S.GreenCircle>
              <img src={pokedex} alt="Pokedex" />
            </S.Circles>

            <PokemonDescription
              openPokedex={openPokedex}
              setOpenPokedex={setOpenPokedex}
            />
            <Divider />

            <PokemonSearch openPokedex={openPokedex} />
          </S.Container>
        </S.Main>
      </GlobalProvider>
    </Router>
  );
}

export default App;
