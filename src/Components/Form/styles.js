import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormSearch = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    border: 1px solid #eee;
    display: block;
    width: 85%;
    font-size: 0.9rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    border-color: #3763a2;
    background: white;
    box-shadow: 0 0 0 3px #fce94f;
    &:focus,
    &:hover {
      outline: none;
      border-color: #333;
      background: #dedede;
      box-shadow: 0 0 0 3px #fce94f;
    }
  }
  button {
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    color: #333;
    font-weight: bold;
    border-radius: 50%;
    border: 0;
    font-size: 1rem;
    background: #fce94f;
    box-shadow: -3px 0px 2px rgb(0 0 0 / 40%);

    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      border-color: #fff;
      background: #3763a2;
      box-shadow: 0 0 0 3px #fce94f;
      color: #fce94f;
    }
  }
`;

export const Reset = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-around;
  /* height: 100%; */
  width: 100%;
  @media (max-width: 50.25rem) {
    height: ${(props) => (props.openPokedex ? "120px" : "100%")};
  }
  button {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fce94f;
    color: #444;
    min-width: 8rem;
    padding: 1rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;
    font-weight: 700;
    box-shadow: 0 2px 4px rgb(0 0 0 / 60%);

    &:hover,
    &:focus {
      outline: none;
      border-color: #fff;
      background: #3763a2;
      box-shadow: 0 0 0 3px #fce94f;
      color: #fce94f;
    }
  }
  .cross {
    background-color: blue;
    margin-top: 1rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 60%);

    .c1 {
      width: 65px;
      height: 20px;
      background: #262626;
      text-align: center;
      box-shadow: -3px 2px 2px #0d0d0d, -2px 0px 1px #0d0d0d;
      box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
      box-shadow: 0 2px 2px rgb(0 0 0 / 60%);

      position: relative;
      z-index: 99;
      &:before {
        content: "O";
        width: 65px;
        height: 20px;
        display: block;
        z-index: 1;
        left: 0px;
        /* box-shadow: -3px 0px 2px 0px #0d0d0d; */
        color: #222;

        position: absolute;
        background-color: #262626;
        top: 0px;
        transform: rotate(-90deg);
      }
    }
  }
`;

export const Button = styled(Link)`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fce94f;
  color: #444;
  min-width: 8rem;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  font-weight: 700;
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);

  &:hover,
  &:focus {
    outline: none;
    border-color: #fff;
    background: #3763a2;
    box-shadow: 0 0 0 3px #fce94f;
    color: #fce94f;
  }
`;
