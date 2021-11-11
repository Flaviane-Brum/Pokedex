import styled from "styled-components";

export const P = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0rem 0 0;
  text-transform: capitalize;

  grid-column: 1/-1;
  span {
    text-transform: capitalize;
  }
`;
