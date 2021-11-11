import { Link } from "react-router-dom";
import styled from "styled-components";
export const FlexEvolutionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  gap: 0.5rem;
  height: 100%;
`;

export const FlexEvolutionLink = styled(Link)`
  margin: 0 auto;
  max-width: 32%;
  background-color: transparent;
  text-transform: capitalize;
  img {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
    &:hover {
      box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
    }
  }
  small {
    text-transform: capitalize;
    background-color: transparent;
  }
  h4 {
    font-weight: 400;
    margin-top: 1rem;
    background-color: transparent;
  }
`;
