<template>
    <div class="filter">
        <button>Применить</button>
        <div class="filter-item" v-for="item in items">
            <div v-for="possibleValue in item.possibleValues">
                <label><input :type="item.mode" v-model="possibleValue.checked">{{possibleValue.name}}
                    ({{possibleValue.count}})</label>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .filter {
        margin-right: 15px;
    }

    .filter-item {
        border: 1px solid #efefef;
        border-bottom: none;
        padding: 10px;
        &:last-child {
            border-bottom: 1px solid #efefef;
        }
    }
</style>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'SearchFilter',
    mounted() {
      console.log("Filter mounted")
    },
    computed: {
      ...mapState({
        items: state => state.filter.items,
      })
    }
  }
</script>