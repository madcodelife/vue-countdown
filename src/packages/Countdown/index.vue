<template>
  <div class="countdown">
    <slot v-if="format" :time="formatCountdown(timeDiff)"></slot>
    <slot v-else :time="timeDiff"></slot>
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

  @Prop({ default: null, type: Boolean }) switch!: any // 开关

  @Prop({ type: String }) format!: string // 格式化

  private timeDiff: number = 0 // 倒计时

  private timer: any = null // 时间函数

  // 步长转换为毫秒
  private get computedStep() {
    return this.step * 1000
  }

  // 监听倒计时时间差变化
  @Watch('time', { immediate: true })
  private onTimeChange(val: number) {
    this.timeDiff = val
    const isSwitch = typeof this.switch === 'boolean'
    if (val && !this.timer) {
      if (isSwitch) {
        if (this.switch) {
          this.triggerTimer()
        } else {
          this.clearTimer()
        }
      } else {
        this.triggerTimer()
      }
    } else {
      this.clearTimer()
    }
  }

  // 监听开关变化
  @Watch('switch')
  private onSwitchChange(val: boolean) {
    if (val) {
      this.triggerTimer()
    } else {
      this.clearTimer()
    }
  }

  private beforeDestroy() {
    this.clearTimer()
  }

  // 清除定时器
  private clearTimer() {
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

  // 格式化时间戳
  private formatCountdown(timeDiff: number): string {
    // 获取还剩多少小时
    const hour = parseInt(((timeDiff as number) / 60 / 60).toString())
    // 获取还剩多少分钟
    let minute!: number
    if (this.format.includes('hh') || this.format.includes('HH')) {
      minute = parseInt((((timeDiff as number) / 60) % 60).toString())
    } else {
      minute = parseInt(((timeDiff as number) / 60).toString())
    }
    // 获取还剩多少秒
    let second!: number
    if (this.format.includes('mm') || this.format.includes('mm')) {
      second = (timeDiff as number) % 60
    } else {
      second = timeDiff
    }
    let result = this.format
    result = result.replace(/(hh|HH)/g, this.paddingZero(hour))
    result = result.replace(/(mm|MM)/g, this.paddingZero(minute))
    result = result.replace(/(ss|ss)/g, this.paddingZero(second))
    return result
  }

  // 补零
  private paddingZero(val: number): string {
    if (val <= 0) {
      return '00'
    } else if (val < 10) {
      return `0${val}`
    } else {
      return val.toString()
    }
  }

  // 重新倒计时
  private reCountdown() {
    this.timeDiff = this.time
  }
}
</script>

<style lang="scss" scoped>
.countdown {
  display: inline-block;
}
</style>
