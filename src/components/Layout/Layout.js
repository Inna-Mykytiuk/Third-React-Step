import {
  Container,
  HeaderTitle,
  FooterTitle,
  MainContainer,
} from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <MainContainer>
      <header>
        <section>
          <Container>
            <HeaderTitle>React tasks</HeaderTitle>
          </Container>
        </section>
      </header>

      <main>
        <Container>{children}</Container>
      </main>

      <footer>
        <section>
          <Container>
            <FooterTitle>Footer</FooterTitle>
          </Container>
        </section>
      </footer>
    </MainContainer>
  );
};
