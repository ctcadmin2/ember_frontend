import fetch from 'fetch';

export default function fetchData(url) {
  return fetch(url).then(data => data.json());
}
