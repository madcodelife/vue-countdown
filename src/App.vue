<template>
  <div id="app">
    <Sample></Sample>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sample from './sample/index.vue'

@Component({
  components: { Sample }
})
export default class App extends Vue {}
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

a {
  text-decoration: none;
  color: rgba(129, 216, 209);
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

button {
  cursor: pointer;
}
</style>
