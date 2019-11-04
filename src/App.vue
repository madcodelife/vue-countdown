<template>
  <div id="app">
    <Countdown :time="time" @on-countdown="onCountdown" @on-end="onCountdownEnd">
      <template slot-scope="{ time }">{{ time }}</template>
    </Countdown>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Vue } from 'vue-property-decorator'
import Countdown from './packages/Countdown/index.vue'

@Component({
  components: { Countdown }
})
export default class App extends Vue {
  private time: number = 5

  private onCountdownEnd() {
    console.log('countdown end~')
  }

  private onCountdown(time: number) {
    console.log(`countdowun: ${time}s`)
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
