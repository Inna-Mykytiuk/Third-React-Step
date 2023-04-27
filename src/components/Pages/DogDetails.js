import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Title } from 'components/App.styled';
import {
  ButtonLink,
  Wrapper,
  LinkList,
  LinkItem,
  StyledLink,
} from 'components/Dog/Dogs.styled';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  //створюємо змінну, якщо локація на яку ми хочемо перейти не визначена, то переходимо на сторінку /dogs. Передаємо цю змінну пропсом в Link
  const backlinkLocationRef = useRef(location.state?.from ?? '/dogs');
  // console.log(location);
  // console.log(backlinkLocationRef);

  return (
    <Wrapper>
      <ButtonLink to={backlinkLocationRef.current}>Go back</ButtonLink>{' '}
      {/* виправлено помилку з дочірнім елементом */}
      <Title>Dog Details for: {dogId}</Title>
      <LinkList>
        <LinkItem>
          <StyledLink to="subbreeds">Subbreeds</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="gallery">Gallery</StyledLink>
        </LinkItem>
      </LinkList>
      <Outlet />
    </Wrapper>
  );
};

export default DogDetails;
