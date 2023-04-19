const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'e085078306eb45ddbc19d2dfb94659d4';

export const getNews = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
};
