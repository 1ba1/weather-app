import axios from 'axios';

export default async (url) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (err) {
    return err;
  }
};
