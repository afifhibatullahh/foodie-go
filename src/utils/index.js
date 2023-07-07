import axios from "axios";

const instance = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/",
});

const GET_API = async (url) => {
  return await instance
    .get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY,
        "X-RapidAPI-Host": process.env.RAPID_HOST,
      },
    })
    .then((response) => response);
};

export default GET_API;
