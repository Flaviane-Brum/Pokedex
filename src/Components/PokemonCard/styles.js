import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardList = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 155px;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
  margin-bottom: 0.5rem;
  color: #888;
  text-transform: capitalize;
  .poke-img {
    border-radius: 10px;
    border-radius: 50%;
    border-radius: 7px;
    transition: all 0.4s;

    span {
      margin-left: 0.5rem;
    }
    img {
      margin: 0 auto;

      height: 100%;
    }
  }
  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 40%);
  }
  .poke-desc {
    gap: 0.2rem;
    p {
      text-transform: capitalize;
      display: block;
      margin: 0.5rem 0;
      text-align: center;
      color: #888;
      span {
        color: #333;
      }
    }
  }
`;
