import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token token=fg88hUkUczuzGL8gxyXJAA",
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Accept: "application/json, text/javascript, */*; q=0.01",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getProducts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-465019586991918096.myfreshworks.com/crm/sales/cpq/products`,
    method: "get",
    params: {
      segment_id: "70003565063",
      sort: "name",
      sort_type: "desc",
      ...params,
    },
    headers: {
      Authorization: "Token token=kE5LRJOjD9lc246u11D0fA",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      Connection: "keep-alive",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Accept-Language": "en-US,en;q=0.9",
      Accept: "application/json, text/javascript, */*; q=0.01",
      ...headers,
    },
    data,
  });
};
export const getSalesaccounts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-465019586991918096.myfreshworks.com/crm/sales/sales_accounts`,
    method: "get",
    params: { segment_id: "70003565045", sort_type: "desc", ...params },
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Connection: "keep-alive",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Token token=kE5LRJOjD9lc246u11D0fA",
      "content-type": "application/json",
      ...headers,
    },
    data,
  });
};
export const getTasks = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-465019586991918096.myfreshworks.com/crm/sales/api/tasks`,
    method: "get",
    params: { filter: "open", ...params },
    headers: {
      Authorization: "Token token=kE5LRJOjD9lc246u11D0fA",
      "Content-Type": "application/json",
      ...headers,
    },
    data,
  });
};
export const postContacts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-465019586991918096.myfreshworks.com/crm/sales/api/contacts`,
    method: "post",
    params,
    headers: {
      Authorization: "Token token=kE5LRJOjD9lc246u11D0fA",
      "Content-Type": "application/json",
      "content-type": "application/json",
      ...headers,
    },
    data: {
      contact: {
        first_name: "jainil",
        last_name: "Tala",
        mobile_number: "9265504587",
        emails: "jainil@gmail.com",
        city: "surat",
        country: "India",
        job_title: "Intern",
        zipcode: "395006",
      },
      ...data,
    },
  });
};
export const getContacts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-465019586991918096.myfreshworks.com/crm/sales/contacts`,
    method: "get",
    params: { segment_id: "70003565022", page: "1", ...params },
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Connection: "keep-alive",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Token token=kE5LRJOjD9lc246u11D0fA",
      "content-type": "application/json",
      ...headers,
    },
    data,
  });
};
