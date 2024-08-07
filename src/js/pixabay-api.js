export function doFetch(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '45213182-a2ebd71b41c91d92e61bbdb2a';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
