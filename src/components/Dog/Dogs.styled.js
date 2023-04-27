import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const ButtonLink = styled(NavLink)`
  padding: 5px 10px;
  background-color: #5b93b1;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  box-shadow: inset 1px 1px 3px #798099, inset -1px -1px 1px #ffffff; */
  box-shadow: rgb(94 99 118) 1px 1px 5px inset,
    rgb(255, 255, 255) -1px -1px 1px inset;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 700;

  color: rgb(255, 255, 255);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;

  &:hover,
  &:focus {
    color: #5b93b1;
    background-color: #fff;
  }
  &:active {
    scale: 0.95;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  background-color: transparent;
  backdrop-filter: blur(10px);
`;

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 10px;

  font-size: 16px;
  font-weight: 700;
  background-color: transparent;

  border: none;
  border-radius: 5px;
  outline: none;
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px; */
  box-shadow: inset 1px 1px 3px #798099, inset -1px -1px 1px #ffffff;

  &::placeholder {
    color: rgb(255, 255, 255);
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LinkItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px;

  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5b93b1;
    /* border: 1px solid #5b93b1; */
    background-color: #fff;
  }
`;
