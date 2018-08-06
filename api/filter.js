module.exports = {
  city: {
    key: 'city',
    mode: 'radio',
    selected: 1,
    possibleValues: [
      {name: 'Москва', count: 120, value: 1},
      {name: 'Петерург', count: 90, value: 2}
    ]
  },
  metro: {
    key: 'metro',
    mode: 'checkbox',
    selected: [22, 33],
    possibleValues: [
      {name: "Речной вокзал", value: 22, color: "#00CD00", count: 2808},
      {name: "Юго-Западная", value: 33, color: "#cd1818", count: 2571},
      {name: "Октябрьская", value: 81, color: "#8B5A00", count: 2571},
      {name: "Авиамоторная", value: 142, color: "#FFFF00", count: 2500},
      {name: "Фрунзенская", value: 20, color: "#FF0000", count: 2292}
    ]
  },
  spec: {
    key: 'spec',
    mode: 'checkbox',
    selected: [326],
    possibleValues: [
      {name: "Продажи", value: 639, count: 25647},
      {name: "Информационные технологии, интернет, телеком", value: 326, count: 15904},
      {name: "Производство", value: 685, count: 7893},
      {name: "Маркетинг, реклама, PR", value: 392, count: 7212}
    ]
  }
};