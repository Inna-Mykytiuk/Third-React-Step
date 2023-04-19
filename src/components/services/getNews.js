// const BASE_URL = 'https://newsapi.org/v2';
// const API_KEY = 'e085078306eb45ddbc19d2dfb94659d4';

// export const getNews = searchText => {
//   return fetch(`${BASE_URL}/everything?q=${searchText}`, {
//     headers: {
//       'X-Api-Key': API_KEY,
//     },
//   });
// };

// const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
// const API_KEY = '8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p';

// export const getNews = searchText => {
//   return fetch(`${BASE_URL}/world.json?q=${searchText}&api-key=${API_KEY}`, {});
// };
// console.log(getNews());

let URL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;

fetch(URL) //передаємо в fetch нашу змінну URL
  .then(response => response.json()) //перетворюємо в json
  .then(data => {
    console.log(data.results);
  });
