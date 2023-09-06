const _apiUrl = '/api/materials';

export const getMaterials = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = async (id) => {
  const res = await fetch(`${_apiUrl}/${id}`)
  const data = await res.json();
  return data;
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};
