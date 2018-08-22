import axios from 'axios';

export default {
  async fetch() {
    let response = await axios.get('https://jobrum.com/job/GetFilter');
    return serialize(response.data.data);
  }
};

function serialize(obj) {
  let filter = {};
  for (let key in obj) {
    switch (key) {
      case 'city':
        let checkedCities = obj[key].find(c => c.checked);
        filter[key] = {
          title: 'Город',
          key: key,
          mode: 'radio',
          selected: (checkedCities ? checkedCities.id : null),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.id
            }
          })
        };
        break;
      case 'metro':
        let checkedMetros = obj[key].filter(c => c.checked);
        filter[key] = {
          title: 'Метро',
          key: key,
          mode: 'checkbox',
          selected: (checkedMetros ? checkedMetros.map(cm => cm.value.id) : null),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              color: c.value.color,
              value: c.value.id
            }
          })
        };
        break;
      case 'spec':
        let checkedSpec = obj[key].filter(c => c.checked);
        filter[key] = {
          title: 'Профессиональная область',
          key: key,
          mode: 'checkbox',
          selected: (checkedSpec ? checkedSpec.map(cm => cm.value.id) : null),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.value.id
            }
          })
        };
        break;
      case 'sch':
        let checkedschs = obj[key].filter(c => c.checked);
        filter[key] = {
          title: 'Тип занятости',
          key: key,
          mode: 'checkbox',
          selected: (checkedschs ? checkedschs.map(cm => cm.value) : null),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.value
            }
          })
        };
        break;
      case 'toe':
        let checkedtoes = obj[key].filter(c => c.checked);
        filter[key] = {
          title: 'График работы',
          key: key,
          mode: 'checkbox',
          selected: (checkedtoes ? checkedtoes.map(cm => cm.value) : null),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.value
            }
          })
        };
        break;
      /*case 'zp':
        filter[key] = obj[key];
        break;
      case 'ex':
        filter[key] = obj[key];
        break;


        filter[key] = obj[key];
        break;
      case 'crippleAllow':
        filter[key] = obj[key];
        break;

      default:
        filter[key] = obj[key];*/
    }
  }
  return filter;
}