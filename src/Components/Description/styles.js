import styled from "styled-components";
export const Sprite = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  align-items: center;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);
`;

export const SpriteContent = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  padding: 0.5rem;
  width: 100%;
  gap: 0.5rem;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 155px;
`;
export const SpriteImg = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 140px;

  box-shadow: 0 2px 4px rgb(0 0 0 / 60%);

  .pokemon {
    width: 100%;
    position: relative;
    z-index: 99;
    height: 100%;
    padding: 0.5rem;
  }
`;
export const SpriteItem = styled.div`
  padding: 0.5rem;
  border-radius: 10px;
  height: 140px;

  h4 {
    font-weight: 400;
    text-transform: capitalize;
    display: flex;
    gap: 0.3rem;
    font-size: 1.5rem;
    align-items: center;
    padding-bottom: 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: space-between;

    position: relative;
    span {
      font-size: 1rem;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px auto 0;
  word-break: break-all;
  border-radius: 10px;
`;

export const BlockTabs = styled.div`
  display: flex;
`;
export const Button = styled.button`
  padding: 0.5rem;
  text-align: center;
  width: 50%;

  background: #fff;
  cursor: pointer;
  border: none;
  box-sizing: content-box;
  position: relative;
  outline: none;
  font-family: var(--type-first);
  box-shadow: 0 1px 4px rgb(0 0 0 / 40%);

  border: 1px solid transparent;

  font-weight: 400;
  &.active-tabs {
    position: relative;
    transition: all 0.4s;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 60%);
    transition: all 0.4s;
  }
  &:hover {
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 40%);
    transition: all 0.4s;
  }
`;
export const ContentTabs = styled.div`
  flex-grow: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100%;
  background-color: #fff;
`;
export const Content = styled.div`
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100%;
  display: none;
  &.active-content {
    display: block;
  }
`;

export const Tabs = styled.button`
  padding: 1rem;
  text-align: center;
  width: 50%;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  outline: none;

  &.active-tabs {
    background: white;
    border-bottom: 1px solid transparent;
  }
`;
