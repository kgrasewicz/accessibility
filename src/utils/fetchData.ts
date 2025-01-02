const fetchData = (path: string) =>
  fetch(`/proxy/${path}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

export default fetchData;
