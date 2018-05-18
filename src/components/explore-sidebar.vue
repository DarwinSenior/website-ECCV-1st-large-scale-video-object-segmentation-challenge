<style lang="scss" scoped>
.explore-sidebar {
  .icon {
    vertical-align: middle;
  }
}
</style>

<template lang="pug">
nav.panel.explore-sidebar
  b-collapse(
    v-for="(categories, groupname) in groups")
    p.panel-heading(slot="trigger" slot-scope="props")
      | {{groupname}}
      b-icon(:icon="props.open ? 'chevron-down' : 'chevron-up'")
    a.panel-block(
      v-for="(vids, cat) in categories"
      :class="{ 'is-active': category == cat }"
      @click='go(groupname, cat)'
    ) {{cat}} ({{len(vids)}})
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ExploreSidebar extends Vue {
  @Prop({default: ''})
  category: string = ''
  @Prop({default: ''})
  group: string = ''

  @Prop({ default: {} })
  groups: any

  len(x: object) { return Object.keys(x).length }

  go(group: string, cat: string) {
    this.category = cat
    this.group = group
    this.$emit('update:group', group)
    this.$emit('update:category', cat)
  }

}
</script>
