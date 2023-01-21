export const mutate = async (
  method: 'POST' | 'PUT' | 'DELETE',
  url: string,
  params: Object,
) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();

  return data;
};
