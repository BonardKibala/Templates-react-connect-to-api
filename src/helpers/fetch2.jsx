const host = "http://localhost:3000"
export const fetch2 = async (api, body) => {
  //localhost:4000
  const res = await fetch(api, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("mycampa_token"),
      Host: host,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const fetch3 = async (api, type) => {
  //localhost:4000
  const res = await fetch(api, {
    method: `${type}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("mycampa_token"),
      Host: host,
    },
  });
  return await res.json();
};

export const fetchUpdateRemove = async (api, type) => {
  //localhost:4000
  const res = await fetch(api, {
    method: `${type}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("mycampa_token"),
      Host: host,
    },
  });
  return await res.json();
};
