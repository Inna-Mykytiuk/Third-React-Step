import styled from 'styled-components';

export const NewsItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 18px;
  border-radius: 4px;
  background-color: rgb(255 255 255 / 75%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.03;
  }
  h2 {
    color: rgb(64, 69, 72);
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  a {
    padding: 5px 8px;
    background-color: rgb(43 46 48);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
    font-size: 14px;

    text-decoration: none;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
    font-family: inherit;

    &:hover,
    &:focus {
      opacity: 1;
      color: #fff;
    }

    &:active {
      scale: 0.95;
    }
  }
`;
