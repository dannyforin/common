<template>
  <div class="home">
    <input type="text"
           v-model="input_value">
    <button @click="search">搜索</button>
    <ul>
      <li v-for="(v,i) in list"
          :key="i">
        <p>{{v.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input_value: '',
      list: []
    }
  },
  methods: {
    search () {
      this.$axios.get(`http://api.pingcc.cn/?mhname=${this.input_value}`).then(x => {
        console.log(x)
        this.list = x.data.list
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
