import styled from "styled-components";

export const ABoutContainer = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const Bio = styled.div`
  padding: 1rem;

  h4 {
    padding-bottom: 0.5rem;
    font-weight: 400;
    text-align: left;
  }

  p {
    text-align: left;
    color: #333;
    text-transform: lowercase;
  }
`;
