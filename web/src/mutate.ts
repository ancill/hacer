export const mutate = async (
  method: 'POST' | 'PUT' | 'DELETE',
  url: 'category' | 'task',
  params: Object,
) => {
  const response = await fetch('http://localhost:3001/' + url + '/', {
    method: method,
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();

  return data;
};
