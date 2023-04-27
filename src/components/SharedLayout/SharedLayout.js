import { Container, HeaderTitle } from 'components/Layout/Layout.styled';
import { Outlet } from 'react-router-dom';
import { Nav, NavLink, NavList } from '../Navigation/Navigation.styled';
import { Header } from '../App.styled';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
