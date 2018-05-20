<style lang="scss" scoped>
</style>

<template lang="pug">
b-table(:data="data" :columns="columns")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BenchmarkPage extends Vue {
  data = {}
  columns = [{
  }]
}
</script>
