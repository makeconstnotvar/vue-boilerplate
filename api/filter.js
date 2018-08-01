module.exports = [
  {
    key: 'city',
    mode: 'radio',
    possibleValues: [
      {name: 'Москва', count: 120, checked: true, value: 1},
      {name: 'Петерург', count: 90, checked: false, value: 2}
    ]
  },
  {
    key: 'metro',
    mode: 'checkbox',
    possibleValues: [
      {name: "Речной вокзал", count: 2808, value: 22, color: "#00CD00", checked: true},
      {name: "Юго-Западная", value: 33, color: "#cd1818", count: 2571, checked: false},
      {name: "Октябрьская", value: 81, color: "#8B5A00", count: 2571, checked: false},
      {name: "Авиамоторная", value: 142, color: "#FFFF00", count: 2500, checked: false},
      {name: "Фрунзенская", value: 20, color: "#FF0000", count: 2292, checked: false}
    ]
  },
  {
    key: 'spec',
    mode: 'checkbox',
    possibleValues: [
      {name: "Продажи", value: 639, count: 25647, checked: true},
      {name: "Информационные технологии, интернет, телеком", value: 326, count: 15904, checked: false,},
      {name: "Производство", value: 685, count: 7893, checked: false},
      {name: "Маркетинг, реклама, PR", value: 392, count: 7212, checked: false}
    ]
  }
];