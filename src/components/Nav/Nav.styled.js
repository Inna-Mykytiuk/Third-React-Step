import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 30px; */
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 30px; */
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;

  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;

  margin-bottom: 30px;

  &.active,
  &:hover,
  &:focus {
    color: #ccc;
    /* text-shadow: 0 0 15px #eb9486; */
  }
`;
