<template>
  <div class="app-root"
       :class="themeClass">
    <div class="app-container">
      <p>{{ msg }}</p>
      <select v-model="theme">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Dynamic Themes',
      theme: 'red'
    }
  },
  computed: {
    themeClass () {
      return `theme-${this.theme}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/reset.scss";

.app-container {
  @include themify($themes) {
    background-color: themed("background-color");
    color: themed("color");
  }
}
</style>
