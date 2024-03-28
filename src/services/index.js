import axios from "axios";

const URL = "https://tests.szapi.ru/ts10/public_html/payments";

export const fetchData = async (params = "") => {
  const { data } = await axios.get(`${URL}${params}`);
  return data;
};

export const sendData = async (paramsData) => {
  const { data } = await axios.post(URL, paramsData);
  return data;
};
