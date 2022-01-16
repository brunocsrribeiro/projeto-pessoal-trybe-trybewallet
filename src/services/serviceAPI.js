const awesomeAPI = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = () => fetch(awesomeAPI)
  .then((response) => response.json())
  .then((data) => data);

export default fetchAPI;
