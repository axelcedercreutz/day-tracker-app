import axios from 'axios';
import { BASE_URL } from '../../utils/config';
const baseUrl = BASE_URL + '/api/login';

const login = async (username: string, password: string) => {
  const response = await axios.post(baseUrl, {
    username,
    password,
  });
  return response.data;
};

export default { login };
