<template>
  <div class="d-inline-flex">
    <a class="dashed pointer rgap6" v-for="(sort, key) in sorts" @click="changeSort(key, sort)"> <i class="fas" :class="sort.icon"></i> {{sort.name}}</a>
  </div>
</template>
<script>

  export default {
    name: 'Sorting',
    props: ['activeSort'],
    data() {
      return {
        sorts: {
          relevance: {name: 'По релевантности', icon: 'fa-arrows-alt-v'},
          date: {name: 'По дате', icon: 'fa-arrows-alt-v'},
          zp: {name: 'По зарплате', icon: 'fa-arrows-alt-v'}
        }
      }
    },
    created() {
      let {code, mode} = this.parse(this.activeSort);
      for (let key in this.sorts) {
        this.sorts[key].icon = this.setupIcon(key === code ? mode : null);
        this.sorts[key].mode = key === code ? mode : null;
      }
    },
    methods: {
      changeSort(code, sort) {
        let result;
        let {mode} = sort;
        for (let key in this.sorts) {
          if (key === code) {
            this.sorts[key].mode = this.changeMode(mode);
            result = this.sorts[key].mode + key;
          }
          else {
            this.sorts[key].mode = null;
          }
          this.sorts[key].icon = this.setupIcon(this.sorts[key].mode)
        }
        this.$emit('changeSort', result);
      },
      setupIcon(mode) {
        switch (mode) {
          case 'a':
            return 'fa-sort-amount-up';
          case 'd':
            return 'fa-sort-amount-down';
          default:
            return 'fa-arrows-alt-v'
        }
      },
      parse(activeSort) {
        let code = null, mode = null;
        if (activeSort) {
          mode = Array.from(activeSort)[0];
          code = activeSort.substr(1);
        }
        return {code, mode};
      },
      changeMode(mode) {
        switch (mode) {
          case 'd':
            return 'a';
          case 'a':
            return 'd';
          default:
            return 'd';
        }
      }
    }
  }
</script>