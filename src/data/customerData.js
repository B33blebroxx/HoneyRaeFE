const _apiUrl = "/api/customers";

export const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getCustomerById = (id) => {
  const apiUrl = `${_apiUrl}/${id}`;
  return fetch(apiUrl).then((r) => r.json());
};
