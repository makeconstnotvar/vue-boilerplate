import axios from 'axios';

export default {
  async fetch(params) {
    let response = await axios.get('https://jobrum.com/job/GetFilter', {params});
    return serialize(response.data.data);
  }
};

function serialize(obj) {
  let selectedCity = {}, items = {};
  for (let key in obj) {
    switch (key) {
      case 'city':
        let checkedCity = obj[key].find(c => c.checked) || {};
        selectedCity = {
          id: checkedCity.id,
          name: checkedCity.name,
          code: checkedCity.value,
          count: checkedCity.count
        };
        items[key] = {
          title: 'Город',
          key: key,
          mode: 'radio',
          selected: checkedCity.value,
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.value
            }
          })
        };
        break;
      case 'metro':
        items[key] = {
          title: 'Метро',
          key: key,
          mode: 'checkbox',
          selected: obj[key].filter(c => c.checked).map(cm => cm.value.id),
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
        items[key] = {
          title: 'Профессиональная область',
          key: key,
          mode: 'checkbox',
          selected: obj[key].filter(c => c.checked).map(cm => cm.value.id),
          possibleValues: obj[key].map(c => {
            return {
              name: c.name,
              count: c.count,
              value: c.value.id
            }
          })
        };
        break;
      case 'zp':
        items[key] = {
          title: 'Зарплата',
          key: key,
          mode: 'checkbox',
          selected: obj[key].filter(c => c.checked).map(cm => cm.name),
          possibleValues: obj[key].map(c => {
            return {
              name: c.value.from ? `от ${c.value.from}` : 'не указана',
              count: c.count,
              value: c.name
            }
          })
        };
        break;
      case 'sch':
        items[key] = {
          title: 'Тип занятости',
          key: key,
          mode: 'checkbox',
          selected: obj[key].filter(c => c.checked).map(cm => cm.value),
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
        items[key] = {
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
  return {selectedCity, items};
}