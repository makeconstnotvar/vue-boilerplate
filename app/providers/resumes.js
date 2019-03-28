import axios from 'axios';

export default {
  async fetch(params) {
    let response = await axios.get('http://dev-rabota.integrum.net/ResumeApi/Search', {params});
    return response.data.data;
  },
  async ferchHits(searchText) {
    let response = await axios.get('http://dev-rabota.integrum.net/misc/SearchResumeNames', {params: {searchText}});
    return response.data.data;
  }
};
