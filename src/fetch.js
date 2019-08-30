import axios from 'axios';

export default async (url) => {
  const result = await axios.get(url);
  return result;
};
