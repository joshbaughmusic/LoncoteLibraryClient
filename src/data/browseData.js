const _apiUrl = '/api/materials';
const _apiUrl2 = '/api/checkouts';

export const getAvailableMaterials = () => {
  return fetch(`${_apiUrl}/available`).then((r) => r.json());
};

export const checkoutMaterial = newCheckout => {
    return fetch(_apiUrl2, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCheckout)})
        .then(res => res.json())
    }

