import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const searchGithubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    return null; // user not found
  }
};
