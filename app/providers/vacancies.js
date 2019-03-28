import axios from 'axios';

export default {
  async fetch(params) {
    let response = await axios.get('http://dev-rabota.integrum.net/Job/Search', {params});
    return serialize(response.data.data);
  },
  async ferchHits(searchText) {
    let response = await axios.get('http://dev-rabota.integrum.net/misc/SearchJobNames', {params: {searchText}});
    return response.data.data;
  }
};


function serialize(data) {
  return {
    count: data.vacanciesCount,
    vacancies: data.vacancies.map(v => {
      let source = v.sources.length ? v.sources[0] : {sourceName: 'Не указан', jobLink: ''};
      let employer = v.employer || {displayName: ''};
      return {
        id: v.id,
        sourceName: source.sourceName,
        sourceUrl: source.jobLink,
        isFavorite: v.isFavorite,
        title: v.title,
        updateDate: v.updateDate,
        city: v.city.name,
        employerName: employer.displayName,
        employerId: employer.id,
        metro: v.metro,
        timeTable: v.timeTable || [],
        occupations: v.occupation && v.occupation.filter(occ => occ != 'Не указано') || [],
        income: {
          from: v.monthIncomeFrom,
          to: v.monthIncomeTo,
          currency: v.currencyRead.name,
        }
      }
    })
  }
}
