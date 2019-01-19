import 'whatwg-fetch';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, method, data) {
  const headers = new Headers({
    'content-type': 'json',
  });
  const options = method === 'POST' ? { method, headers, body: data } : { method };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
