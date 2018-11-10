<template>
  <div class="periods d-inline-flex">
    <a class="period d-flex" @click="open"><span v-text="selectedPeriod"></span> <i class="align-self-center page-chevron fas" :class="[isOpen?'fa-angle-up':'fa-angle-down']"></i></a>
    <div class="period-dropdown" :class="{opened:isOpen}" @mouseleave="close" @click.self="close">
      <a class="period-dropdown-item" v-for="(period, key) in periods" @click="changePeriod(key)" v-text="period.name"></a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Period",
    props: {
      activePeriod: String
    },
    data() {
      return {
        isOpen: false,
        periods: {
          all: {name: 'За все время'},
          d1: {name: 'За сутки'},
          d3: {name: 'За три дня'},
          d7: {name: 'За неделю'},
          d30: {name: 'За месяц'},
          y: {name: 'За год'}
        }
      }
    },
    computed: {
      selectedPeriod() {
        return this.periods[this.activePeriod].name;
      }
    },
    methods: {
      changePeriod(key) {
        this.isOpen = false;
        this.$emit('changePeriod', key);
      },
      open() {
        this.isOpen = true;
      },
      close() {
        this.isOpen = false;
      }
    }
  }
</script>

