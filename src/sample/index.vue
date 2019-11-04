<template>
  <div>
    <h1>
      <a href>vue-countdown⏰</a>
    </h1>
    <Countdown @on-countdown="onCountdown" @on-end="onCountdownEnd">
      <template slot-scope="{ time }">
        <p v-if="time">countdown: {{ time }}s</p>
        <p v-else>countdown end~</p>
      </template>
    </Countdown>
    <br />
    <Countdown :time="3666" format="hh:mm:ss">
      <template slot-scope="{ time }">{{ time }}</template>
    </Countdown>
    <br />
    <br />controllable:s
    <Countdown :switch="countdownSwitch" :time="100" format="mm'ss''">
      <template slot-scope="{ time }">{{ time }}</template>
    </Countdown>&emsp;
    <button @click="handleStart">start</button>&emsp;
    <button @click="handleStop">stop</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Countdown from '../packages/Countdown/index.vue'

@Component({
  components: { Countdown }
})
export default class App extends Vue {
  private countdownSwitch: boolean = false

  private onCountdownEnd() {
    console.log('countdown end~')
  }

  private onCountdown(time: number) {
    console.log(`countdowun: ${time}s`)
  }

  private handleStart() {
    this.countdownSwitch = true
  }

  private handleStop() {
    this.countdownSwitch = false
  }
}
</script>
