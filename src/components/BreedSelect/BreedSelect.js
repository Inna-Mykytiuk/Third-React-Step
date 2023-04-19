import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from '../Error/ErrorMessage';
import { fetchBreeds } from '../services/api';
import { SelectWrapper } from './BreedSelect.styled';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedBreeds = await fetchBreeds();
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(
          'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹'
        );
      } finally {
        setIsLoading(false);
      }
    }

    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    label: breed.name,
    value: breed.id,
  }));

  return (
    <SelectWrapper>
      <h3>Choose a breed of dog</h3>

      <Select
        width="400"
        options={options}
        isLoading={isLoading}
        onChange={option => onSelect(option.value)}
      />
      {error && !isLoading && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  );
};
