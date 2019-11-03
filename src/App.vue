<template>
  <div id="app">
    <Countdown :switch="true" @on-end="onCountdownEnd">
      <template slot-scope="{ time }">{{ time }}</template>
    </Countdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Countdown from './packages/Countdown/index.vue'

@Component({
  components: { Countdown }
})
export default class App extends Vue {
  private onCountdownEnd() {
    alert('countdown end~')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
