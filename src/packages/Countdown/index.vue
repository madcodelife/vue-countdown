<template>
  <div class="countdown">
    <slot :time="timeDiff"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'Countdown'
})
export default class Countdown extends Vue {
  @Prop({ default: 60, type: Number }) time!: number // 时间差

  @Prop({ default: 1, type: Number }) step!: number // 步长

  @Prop({ type: Boolean }) switch!: boolean // 开关

  private timeDiff: number = 0 // 倒计时

  private timer: any = null // 时间函数

  // 步长转换为毫秒
  private get computedStep() {
    return this.step * 1000
  }

  @Watch('switch', { immediate: true })
  onCountdownSwitch(val: boolean) {
    if (val && !this.timer) {
      this.timeDiff = this.time
      this.triggerTimer()
    } else {
      this.clearTimer()
    }
  }

  private beforeDestroy() {
    this.clearTimer()
  }

  // 清除定时器
  clearTimer() {
    if (this.timer) clearTimeout(this.timer)
  }

  // 触发倒计时函数
  private triggerTimer() {
    this.timer = setTimeout(() => {
      this.timeDiff--
      if (this.timeDiff <= 0) {
        this.$emit('on-end')
      } else {
        this.$emit('on-countdown', this.timeDiff)
        this.triggerTimer()
      }
    }, this.computedStep)
  }
}
</script>

<style lang="scss" scoped>
.countdown {
  display: inline-block;
}
</style>
