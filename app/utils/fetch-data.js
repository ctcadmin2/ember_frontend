import fetch from 'fetch';

export default function fetchData(url, token) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.json());
}
