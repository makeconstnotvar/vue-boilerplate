<template>
  <div class="d-inline-block">
    <template v-for="(station,idx) in stations">
      <Comma :index="idx"/>
      <span class="rgap6 station-color" :style="{backgroundColor: station.color}"></span><span>{{station.name}}</span>
    </template>
  </div>
</template>

<script>
  import Comma from "../controls/comma";

  export default {
    name: "Metro",
    components: {Comma},
    props: ['stations']
  }
</script>
