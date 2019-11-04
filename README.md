# @choujiaojiao/vue2-countdown⏰

> vue倒计时插件

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gassnake999/vue-countdown)
[![npm](https://img.shields.io/npm/v/@choujiaojiao/vue2-countdown.svg)](https://www.npmjs.com/package/@choujiaojiao/vue2-countdown)
[![npm](https://img.shields.io/npm/dm/@choujiaojiao/vue2-countdown.svg)](https://npmcharts.com/compare/@choujiaojiao/vue2-countdown)
[![minified](https://badgen.net/bundlephobia/min/@choujiaojiao/vue2-countdown)](https://bundlephobia.com/result?p=@choujiaojiao/vue2-countdown)
[![gzip](https://badgen.net/bundlephobia/minzip/@choujiaojiao/vue2-countdown)](https://bundlephobia.com/result?p=@choujiaojiao/vue2-countdown)

vue-countdown是一个无依赖项的轻量级vue组件，轻松实现倒计时需求，摆脱时间函数烦恼。
支持SSR。

## [Try the demo](https://gassnake999.github.io/vue-countdown/)

### 如何使用

```bash
yarn add @choujiaojiao/vue2-countdown
or
npm install @choujiaojiao/vue2-countdown
```

### 例子

```vue
<template>
  <Countdown :time="3666" format="hh:mm:ss" @on-end="onCountdownEnd">
    <template slot-scope="{ time }">{{ time }}</template>
  </Countdown>
</template>

<script>
  import Countdown from '@choujiaojiao/vue2-countdown'
  
  export default {
    components: { Countdown },
    methods: {
      onCountdownEnd() {
        console.log('countdown end~')
      }
    }
  }
</script>
```

### 属性

| Property | Description                    |  type   | default |
| -------- | ------------------------------ | :-----: | :-----: |
| time     | 倒计时时间差（单位：秒）       | Number  |    0    |
| step     | 多久执行一次倒计时（单位：秒） | Number  |    1    |
| switch   | 倒计时开关                     | Boolean |   - -   |
| format   | 格式化                         | String  |   - -   |

### 方法

| Function Name | Description                                          |
| :-----------: | ---------------------------------------------------- |
|    on-end     | 倒计时结束回调                                       |
| on-countdown  | 每次倒计时回调                                       |
|  reCountdown  | 重新倒计时( ex: this.$refs.countdown.reCountdown() ) |
