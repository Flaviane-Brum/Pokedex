import styled, { keyframes } from "styled-components";
const Size = (size) => keyframes`
 0% {
    width:0%;
  }
  100% {
    width:${size};

  }

`;
export const BaseStatsContainer = styled.div`
  padding: 1rem;
  height: 100%;
  border-radius: 10px;

  @media (max-width: 25.625rem) {
    padding: 0.5rem;
    span {
      font-size: 11px;
    }
  }
`;

export const HpStatus = styled.div`
  display: flex;
  padding: 0.6rem 0;
  gap: 0.5rem;
  align-items: center;

  max-width: 100%;
  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
  justify-content: center;
`;
export const HpBar = styled.div`
  height: 20px;
  position: relative;
  border: 0px;
  line-height: 10px;
  background-color: #eee;

  padding: 5px;
  width: 100%;
  max-width: 255px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);
  span {
    color: #888;
    font-family: Var(--type-first);
    z-index: 99;
    align-self: center;
    position: relative;
  }
`;
export const HP = styled.div`
  height: 20px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  display: flex;
  animation: ${(props) => Size(props.size)} forwards;
  animation-duration: 1.5s;
  align-items: center;
  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #7c2300;
  top: 0;
  background-color: #ff5959;
`;
export const AttackStatus = styled.div`
  display: flex;
  grid-template-columns: 17px 1fr 17px;
  padding: 0.6rem 0;
  gap: 0.5rem;
  align-items: center;
  max-width: 100%;
  justify-content: center;
  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
`;
export const AttackBar = styled.div`
  background-color: transparent;
  height: 20px;
  position: relative;
  display: flex;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);
  width: 100%;
  max-width: 255px;
  border: 0px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  span {
    color: #888;
    z-index: 99;
    font-family: Var(--type-first);
  }
`;

export const Attack = styled.div`
  height: 20px;
  border-radius: 5px;

  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  text-align: left;
  animation-duration: 1s;
  top: 0;
  background-color: #f7ac73;
  animation: ${(props) => Size(props.size)} forwards;
  animation-duration: 1s;
  align-items: center;
  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #562a00;
`;
export const DefenseStatus = styled.div`
  display: flex;
  padding: 0.6rem 0;
  max-width: 295px;
  border-radius: 5px;
  gap: 0.5rem;
  max-width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
`;
export const DefenseBar = styled.div`
  background-color: transparent;
  width: 100%;
  height: 20px;
  position: relative;
  display: flex;
  border: 0px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  max-width: 255px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);

  padding: 5px;
  span {
    color: #888;

    z-index: 99;
    font-family: Var(--type-first);
  }
`;

export const Defense = styled.div`
  height: 20px;
  border-radius: 5px;

  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  text-align: left;
  top: 0;
  background-color: #9cb5f5;
  animation-duration: 0.7s;
  animation: ${(props) => Size(props.size)} forwards;
  animation-duration: 1s;
  align-items: center;
  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #112022;
`;
export const SpecialAttackStatus = styled.div`
  display: flex;
  grid-template-columns: 17px 1fr 17px;
  padding: 0.6rem 0;
  gap: 0.5rem;
  border-radius: 5px;
  justify-content: center;
  max-width: 100%;
  align-items: center;

  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
`;
export const SpecialAttackBar = styled.div`
  background-color: transparent;
  width: 100%;
  height: 20px;
  position: relative;
  display: flex;
  border: 0px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);

  max-width: 255px;
  padding: 5px;
  span {
    color: #888;

    z-index: 99;
    font-family: Var(--type-first);
  }
`;
export const SpecialAttack = styled.div`
  height: 20px;
  border-radius: 5px;

  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  text-align: left;
  top: 0;
  background-color: #f9df7e;
  animation: ${(props) => Size(props.size)} forwards;
  align-items: center;
  animation-duration: 0.7s;

  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #764701;
`;
export const SpecialDefenseStatus = styled.div`
  display: flex;
  padding: 0.6rem 0;
  gap: 0.5rem;
  max-width: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
`;
export const SpecialDefenseBar = styled.div`
  background-color: transparent;
  width: 100%;
  height: 20px;
  position: relative;
  display: flex;
  border: 0px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 0;
  max-width: 255px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);

  span {
    color: #888;
    z-index: 99;
    font-family: Var(--type-first);
  }
`;
export const SpecialDefense = styled.div`
  height: 20px;
  border-radius: 5px;

  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  top: 0;
  background-color: #aada8e;
  animation: ${(props) => Size(props.size)} forwards;
  animation-duration: 0.6s;
  align-items: center;
  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #135848;
`;
export const SpeedStatus = styled.div`
  display: flex;
  grid-template-columns: 17px 1fr 17px;
  gap: 0.5rem;
  max-width: 100%;
  padding: 0.6rem 0;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 25.625rem) {
    gap: 0.3rem;
  }
`;

export const SpeedBar = styled.div`
  background-color: transparent;
  height: 20px;
  position: relative;
  display: flex;
  border: 0px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 255px;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);

  span {
    color: #888;

    z-index: 99;
    font-family: Var(--type-first);
  }
`;
export const Speed = styled.div`
  height: 20px;
  border-radius: 5px;

  position: absolute;
  left: 0;
  display: flex;
  width: 0;
  align-items: center;
  text-align: left;
  top: 0;
  background-color: #f893b3;
  animation: ${(props) => Size(props.size)} forwards;
  animation-duration: 1s;
  align-items: center;
  animation-delay: 0.3s;
  box-shadow: 1px 0px 2px #5e0011;
`;
