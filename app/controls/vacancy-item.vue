<template>
  <div class="vacancy-item">
    <span class="shadow vacancy-favorite text-center"><i class="fas fa-star"></i></span>
    <div class="d-flex flex-wrap ">
      <a class="vacancy-title mr-10" :href="linkToVacancy">{{vacancy.title}}</a>
      <Income class="vacancy-income ml-auto" :from="vacancy.income.from" :to="vacancy.income.to" :currency="vacancy.income.currency"/>
    </div>
    <div>{{vacancy.employerName}}</div>
    <div>{{vacancy.city}}<span v-if="vacancy.metro">, </span>
      <Metro v-if="vacancy.metro" :stations="vacancy.metro"/>
    </div>
    <div v-if="vacancy.timeTable.length"><b>Тип занятости:</b> <span v-for="(time,idx) in vacancy.timeTable"><Comma :index="idx"/>{{time}}</span></div>
    <div v-if="vacancy.occupations.length"><b>График работы:</b> <span v-for="(occupation,idx) in vacancy.occupations"><Comma :index="idx"/>{{occupation}}</span></div>
    <div><b>Обновлено:</b> {{vacancy.updateDate | formatDate('DD.MM.YYYY в hh:mm')}} на сайте {{vacancy.sourceName}}</div>
    <div><a :href="linkToEmployerValidation">Проверить компанию</a> <a target="_blank" :href="linkToResponse">Посмотреть вакансию</a></div>
  </div>
</template>
<script>
  import Metro from "../controls/metro";
  import Comma from "../controls/comma";
  import Income from "../controls/income";
  
  
  export default {
    name: 'VacancyItem',
    components: {Metro, Comma, Income},
    props: ['vacancy'],
    computed: {
      linkToEmployerValidation() {
        return `http://dev-rabota.integrum.net/employer/${this.vacancy.employerId}/about`
      },
      linkToVacancy() {
        return `http://dev-rabota.integrum.net/vacancy/${this.vacancy.id}`
      },
      linkToResponse() {
        return `http://dev-rabota.integrum.net/Static/JobExternalJump/?jobId=${this.vacancy.id}&sourceId=1`
      }
    }
  }
</script>

