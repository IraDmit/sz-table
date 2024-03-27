import axios from "axios";

export const fetchData = async () => {
  const { data } = await axios.get(
    "https://tests.szapi.ru/ts10/public_html/payments"
  );
  return data;
};
