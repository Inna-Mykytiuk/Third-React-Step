import { Container } from 'components/Layout/Layout.styled';
import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/dogs">Colection</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
