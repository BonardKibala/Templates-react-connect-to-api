const host = "https://mycampa-api.herokuapp.com";
export const fetch2 = async (api, body) => {
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

export const fetchRemove = async (api, type) => {
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
