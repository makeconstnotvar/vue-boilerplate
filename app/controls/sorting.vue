<template>
    <i class="fas fa-arrows-alt-v"></i>
    <i class="fas fa-sort-numeric-down"></i>
    <i class="fas fa-sort-numeric-up"></i>
    <a v-for="sort in sorts" @click="changeSort(sort.code)"> <i class="fas" :></i> {sort.name}</a>

</template>
<script>
  function setupIcon(mode) {
    switch (mode) {
      case 'a':
        return 'fa-sort-numeric-up';
      case 'd':
        return 'fa-sort-numeric-down';
      default:
        return 'fa-arrows-alt-v'
    }
  }

  function getMode(code) {
    let codeArr = Array.from(code);
    return codeArr ? codeArr[0] : null;
  }

  let sorts = {
    relevance: {code: 'relevance', name: 'По релевантности'},
    date: {code: 'date', name: 'По дате'},
    zp: {code: 'zp', name: 'По зарплате'}
  };

  let periods = {
      all: {code: 'all', name: 'За все время'},
      d1: {code: 'd1', name: 'За сутки'},
      d3: {code: 'd3', name: 'За три дня'},
      d7: {code: 'd7', name: 'За неделю'},
      d30: {code: 'd30', name: 'За месяц'},
      y: {code: 'y', name: 'За год'}
    }
  ;
  export default {
    name: 'Sorting',
    props: ['activeSort', 'activePeriod'],
    data() {
      return {
        periods, sorts
      }
    },
    methods:{
      changeSort(){

      }
    }
  }
</script>