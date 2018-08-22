<template>
    <div class="vacancy-item">
        <div>
            <router-link to="`/vacancy/${vacancy.id}`">{{vacancy.title}}</router-link>
        </div>
        <div>{{vacancy.city}}, {{vacancy.employerName}}</div>
        <div><b>Опыт работы:</b></div>
        <div><b>Обновлено:</b> {{vacancy.updateDate}} на сайте {{vacancy.sourceName}}</div>
        <div><a :href="vacancy.sourceUrl">Посмотреть</a></div>
    </div>
</template>
<script>
  export default {
    name: 'VacancyItem',
    props: ['vacancy']
  }
</script>

