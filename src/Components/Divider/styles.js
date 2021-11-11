import styled from "styled-components";
export const DividerContainer = styled.div`
  border-top: 0;
  background: #ce1131;
  border-bottom: 0;
  height: 100%;
  grid-column: 2/3;
  grid-row: 2/-1;
  position: relative;
  top: 0px;
  left: 0;
  width: 50px;
  border-left: 1px solid #810a1e;
  box-shadow: 0px 7px 0px #951828;
  border-bottom-right-radius: 10px;
  @media (max-width: 50.25rem) {
    display: none;
  }
  &::before {
    content: "";
    display: block;
    width: 98%;
    position: absolute;
    height: 12px;
    border: 1px solid #810a1e;
    top: 46px;
  }
  &::after {
    content: "";
    display: block;
    width: 98%;
    position: absolute;
    height: 12px;
    border: 1px solid #810a1e;

    bottom: 46px;
  }
`;
