const _apiUrl = '/api/materials';

export const getAvailableMaterials = () => {
  return fetch(`${_apiUrl}/available`).then((r) => r.json());
};
