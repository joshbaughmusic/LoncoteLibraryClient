const _apiUrl = '/api/patrons';

export const getPatrons = () => {
  return fetch(`${_apiUrl}`).then((res) => res.json());
};

export const getUniquePatron = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const updatePatron = (id, patron) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patron),
  });
};

export const deactivatePatron = (id) => {
  return fetch(`${_apiUrl}/${id}/deactivate`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'}
  });
};
