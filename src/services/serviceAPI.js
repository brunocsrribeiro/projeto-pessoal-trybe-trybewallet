const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const requestApiService = () => (
  fetch(URL_API)
    .then((response) => response.json()
      .then((data) => (response.ok
        ? Promise.resolve(data)
        : Promise.reject(data))))
);

export default requestApiService;
