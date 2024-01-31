const _apiUrl = "/api/employees";

export const getEmployees = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getEmployeeById = (id) => {
  const apiUrl = `${_apiUrl}/${id}`;
  return fetch(apiUrl).then((r) => r.json());
};
