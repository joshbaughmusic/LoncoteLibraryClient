const _apiUrl = '/api/patrons';

const getPatrons = () => {
  return fetch(`${_apiUrl}`).then((res) => res.json());
};
