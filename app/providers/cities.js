import axios from 'axios';

export default {
  async fetch() {
    let response = await axios.get('https://jobrum.com/Job/GetTopRegionFilter');
    return response.data.data.map(city => {
      return {
        id: city.value,
        name: city.name,
        code: city.altName,
        major: city.checked,
        count: city.count
      }
    });
  },
  async search(name) {
    let response = await axios.get('https://jobrum.com/misc/SearchRegions', {params: {searchText: name}});
    return response.data.data.result.map(city => {
      return {
        id: city.id,
        name: city.name,
        code: city.nameEn,
      }
    });
  }

};