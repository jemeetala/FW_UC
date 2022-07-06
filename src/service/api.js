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

export const postContacts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/api/contacts`,
    method: "post",
    params,
    headers: { "Content-Type": "application/json", ...headers },
    data: {
      contact: {
        first_name: "John",
        last_name: "Duo",
        mobile_number: "9265504587",
        emails: "john@gmail.com",
      },
      ...data,
    },
  });
};
export const getContactssegmentid70003418989 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/contacts?segment_id=70003418989`,
    method: "get",
    params: { page: "1", segment_id: "70003418989", ...params },
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Connection: "keep-alive",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "X-Requested-With": "XMLHttpRequest",
      ...headers,
    },
    data,
  });
};
