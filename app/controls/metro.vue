<template>
  <div class="d-inline-block">
    <template v-for="(station,idx) in stations">
      <Comma :index="idx"/>
      <span class="text-nowrap"><span class="mr-5 station-color" :style="{backgroundColor: station.color}"></span>{{station.name}}</span>
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
