import axios from 'axios';

export default {
  async fetch(params) {
    let response = await axios.get('https://jobrum.com/Job/Search', {params});
    return serialize(response.data.data);
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
        employerName: employer.displayName
      }
    })
  }
}