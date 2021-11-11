import React, { useContext } from "react";
import * as S from "./styles";

import {
  GiBroadsword,
  GiHearts,
  GiBrokenShield,
  GiArrowsShield,
  GiConverseShoe,
  GiPointySword,
} from "react-icons/gi";
import { GlobalContext } from "../../GlobalContext";
const BaseStatus = () => {
  const { pokemon } = useContext(GlobalContext);
  return (
    <S.BaseStatsContainer className={pokemon && "slide-down"}>
      <S.HpStatus>
        <GiHearts size={20} color="#ff5959" />
        <S.HpBar>
          <span>HP</span>

          <S.HP size={`${pokemon.stats.hp}px`}></S.HP>
        </S.HpBar>
        <span>{pokemon.stats.hp}</span>
      </S.HpStatus>

      <S.AttackStatus>
        <GiBroadsword size={20} color="#7b4a28" />
        <S.AttackBar>
          <span>ATK</span>

          <S.Attack size={`${pokemon.stats.attack}px`}></S.Attack>
        </S.AttackBar>
        <span>{pokemon.stats.attack}</span>
      </S.AttackStatus>

      <S.DefenseStatus>
        <GiBrokenShield size={20} color="#4c6eaa" />
        <S.DefenseBar>
          <span>DEF</span>

          <S.Defense size={`${pokemon.stats.defense}px`}></S.Defense>
        </S.DefenseBar>
        <span>{pokemon.stats.defense}</span>
      </S.DefenseStatus>

      <S.SpecialAttackStatus>
        <GiPointySword size={20} color="#f2cc27" />
        <S.SpecialAttackBar>
          <span>SPA</span>

          <S.SpecialAttack
            size={`${pokemon.stats.specialAttack}px`}
          ></S.SpecialAttack>
        </S.SpecialAttackBar>
        <span>{pokemon.stats.specialAttack}</span>
      </S.SpecialAttackStatus>

      <S.SpecialDefenseStatus>
        <GiArrowsShield color="#4f9520" size={20} />
        <S.SpecialDefenseBar>
          <span>SPD</span>

          <S.SpecialDefense
            size={`${pokemon.stats.specialDefense}px`}
          ></S.SpecialDefense>
        </S.SpecialDefenseBar>
        <span>{pokemon.stats.specialDefense}</span>
      </S.SpecialDefenseStatus>
      <S.SpeedStatus>
        <GiConverseShoe color="#923a55" size={20} />
        <S.SpeedBar>
          <span>SPE</span>

          <S.Speed size={`${pokemon.stats.speed}px`}></S.Speed>
        </S.SpeedBar>
        <span>{pokemon.stats.speed}</span>
      </S.SpeedStatus>
    </S.BaseStatsContainer>
  );
};

export default BaseStatus;
