import { Container, HeaderTitle } from 'components/Layout/Layout.styled';
import { Outlet } from 'react-router-dom';
import { Nav, NavLink, NavList } from '../Nav/Nav.styled';
import { Header } from '../App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>React tasks</HeaderTitle>
        <Nav>
          <NavList>
            <li>
              <NavLink to="/">Home page</NavLink>
            </li>
            <li>
              <NavLink to="/dogs">Colection</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </NavList>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
