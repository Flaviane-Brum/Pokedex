import styled from "styled-components";
export const ContainerSpan = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;
export const Span = styled.span`
  font-weight: bold;
  border-radius: 7px;
  font-weight: 100;
  position: relative;
  display: flex;
  gap: 0.5rem;
  z-index: 9999;
  align-items: center;
  margin-bottom: 0.5rem;
  p {
    font-size: 1rem;
  }
  svg {
    box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
    border-radius: 7px;
    padding: 0.1rem;
    width: 30px;
    background-color: #fff;
    height: 30px;
  }
`;
