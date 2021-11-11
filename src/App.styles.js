import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 1rem auto;
  flex-direction: column;
  height: 95vh;
  @media (max-width: 50.25rem) {
    padding: 0 0.5rem;
    padding-bottom: 1rem;
    height: 100%;
  }
`;
export const Circles = styled.div`
  display: flex;
  gap: 5px;
  height: 100%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  grid-row: 1/2;
  background-color: #ce1131;
  padding: 0.3rem 1rem;
  grid-column: 1/3;
  border-bottom: 1px solid #333;
  box-shadow: -6px -4px 0px #951828;

  img {
    align-self: center;
    width: 59%;
    height: auto;
  }
`;
export const Container = styled.div`
  text-align: center;
  position: relative;
  height: 100%;
  border-radius: 20px;
  background: transparent;
  display: grid;
  max-width: 59.375rem;
  grid-template-columns: minmax(21.25rem, 25rem) 50px minmax(
      23.125rem,
      26.875rem
    );

  grid-template-rows: 4.313rem 1fr;
  margin: 0 auto;
  @media (max-width: 50.25rem) {
    grid-template-columns: 1fr;
    max-width: 27.188rem;
    margin: 0 auto;
    transition: grid-template-rows 1s linear;
    grid-template-rows: ${(props) =>
      props.openPokedex ? "4.313rem 1fr   1fr " : "4.313rem   1fr"};
  }
`;

export const BigCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #08fafb;
  border: 5px solid #e7f4eb;
  box-shadow: inset -1px 0px 4px rgb(0 0 0 / 85%), 2px 1px 2px rgb(0 0 0 / 60%);
  @media (max-width: 50.25rem) {
    width: 50px;
    height: 50px;
  }
`;
export const RedCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(135deg, #ffaa85 10%, #db111d 100%);
  box-shadow: 2px 1px 2px rgb(0 0 0 / 60%);
`;

export const YellowCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(135deg, #ffff66 10%, #ffff00 100%);
  box-shadow: 2px 1px 2px rgb(0 0 0 / 60%);
`;

export const GreenCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(135deg, #66ff66 10%, #00ff00 100%);
  box-shadow: 2px 1px 2px rgb(0 0 0 / 60%);
`;
