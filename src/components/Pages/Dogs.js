import { Link, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);

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
    <div>
      <NavLink exact="true" to="..">
        {' '}
        {/* додано властивість exact */}
        Home
      </NavLink>
      <input
        type="text"
        placeholder="search"
        value={dogId}
        onChange={updateQueryString}
      />

      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {' '}
                {/* додано атрибут state */}
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
