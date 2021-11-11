import styled from "styled-components";

export const GridEvolutionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 69px);
  justify-content: space-around;
  height: 100%;
  align-content: stretch;
  padding: 1rem;
  gap: 0.5rem;

  @media (max-width: 50.25rem) {
    grid-template-columns: repeat(auto-fit, 53px);
  }
  @media (max-width: 21.75rem) {
    grid-template-columns: repeat(auto-fit, 40px);
  }
`;
export const GridEvolutionItem = styled.div`
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
  border-radius: 7px;
  &:hover {
    box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
  }
`;

export const GridEvolutionSprite = styled.div`
  border-radius: 7px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
