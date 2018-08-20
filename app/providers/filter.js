import axios from 'axios';

export default {
  async fetch() {
    let response = await axios.get('/api/filter/vacancies/select');
    return response.data;
  }
};