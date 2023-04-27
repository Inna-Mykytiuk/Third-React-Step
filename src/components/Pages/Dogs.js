import { useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Input,
  Wrapper,
  ButtonLink,
  LinkList,
  LinkItem,
  StyledLink,
} from 'components/Dog/Dogs.styled';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  console.log(setDogs);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ dogId: evt.target.value });
  };

  return (
    <Wrapper>
      <ButtonLink exact="true" to="..">
        {' '}
        {/* додано властивість exact */}
        Home
      </ButtonLink>
      <Input
        type="text"
        placeholder="search"
        value={dogId}
        onChange={updateQueryString}
      />

      <LinkList>
        {visibleDogs.map(dog => {
          return (
            <LinkItem key={dog}>
              <StyledLink to={`${dog}`} state={{ from: location }}>
                {' '}
                {/* додано атрибут state */}
                {dog}
              </StyledLink>
            </LinkItem>
          );
        })}
      </LinkList>
    </Wrapper>
  );
};

export default Dogs;
