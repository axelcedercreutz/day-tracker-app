import axios from 'axios';
import { BASE_URL } from '../../utils/config';
const baseUrl = BASE_URL + '/api/users';
console.log(baseUrl);

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createUser = async (username: string, password: string) => {
  const response = await axios.post(baseUrl, { username, password });
  return response.data;
};

export default { getAll, createUser };
