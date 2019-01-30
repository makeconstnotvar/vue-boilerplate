<template>
  <div class="vacancy-item">
    <div>
      <router-link to="`/vacancy/${vacancy.id}`">{{vacancy.title}}</router-link>
    </div>
    <div>{{vacancy.employerName}}</div>
    <div>{{vacancy.city}}<span v-if="vacancy.metro">, </span>
      <Metro v-if="vacancy.metro" :stations="vacancy.metro"/>
    </div>
    <div v-if="vacancy.timeTable.length"><b>Тип занятости:</b> <span v-for="(time,idx) in vacancy.timeTable"><Comma :index="idx"/>{{time}}</span></div>
    <div v-if="vacancy.occupations.length"><b>График работы:</b> <span v-for="(occupation,idx) in vacancy.occupations"><Comma :index="idx"/>{{occupation}}</span></div>
    <div><b>Обновлено:</b> {{vacancy.updateDate | formatDate('DD.MM.YYYY в hh:mm')}} на сайте {{vacancy.sourceName}}</div>
    <div><a :href="vacancy.sourceUrl">Посмотреть</a></div>
  </div>
</template>
<script>
  import Metro from "../controls/metro";
  import Comma from "../controls/comma";


  export default {
    name: 'VacancyItem',
    components: {Metro, Comma},
    props: ['vacancy']
  }
</script>

