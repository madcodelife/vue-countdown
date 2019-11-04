# @choujiaojiao/vue-countdown⏰

> vue倒计时插件

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gassnake999/vue-countdown)
<!-- [![npm](https://img.shields.io/npm/v/vue-count-to.svg)](https://www.npmjs.com/package/vue-count-to)
[![npm](https://img.shields.io/npm/dm/vue-count-to.svg)](https://npmcharts.com/compare/vue-count-to)
[![minified](https://badgen.net/bundlephobia/min/vue-count-to)](https://bundlephobia.com/result?p=vue-count-to)
[![gzip](https://badgen.net/bundlephobia/minzip/vue-count-to)](https://bundlephobia.com/result?p=vue-count-to) -->

vue-countdown是一个无依赖项的轻量级vue组件，轻松实现倒计时需求，摆脱时间函数烦恼。
支持SSR。

## [Try the demo](http://panjiachen.github.io/countTo/demo/)

### 如何使用?

```bash
yarn add vue-countdown
or
npm install vue-countdown
```

### 例子

```vue
<template>
  <Countdown :time="3666" format="hh:mm:ss" @on-end="onCountdownEnd">
    <template slot-scope="{ time }">{{ time }}</template>
	</Countdown>
</template>

<script>
  import Countdown from 'vue-count-to'
  
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
| step     | 多久执行一次倒计时（单位：秒） | Number  |   1s    |
| switch   | 倒计时开关                     | Boolean |   - -   |
| format   | 格式化                         | String  |   - -   |

### 方法
| Function Name | Description    |
| :-----------: | -------------- |
|    on-end     | 倒计时结束回调 |
| on-countdown  | 每次倒计时回调 |