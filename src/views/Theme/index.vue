<template>
  <div class="setting-page"
       :class="themeClass">
    <header class="setting-bar">
      <h1 class="setting-bar-title">个性换肤
        <img src="images/left.gif"
             alt=""
             class="left"
             @click="$router.go(-1)">
      </h1>
    </header>

    <div class="theme-bar">
      <ul class="theme-list">
        <li :class="['theme-list-item', {'selected': v.name == default_theme}]"
            v-for="(v,i) in theme_list"
            :key="i"
            @click="theme_change(v)">
          <span>{{v.name}}</span>
          <div class="right-box">
            <img src="images/selected.png"
                 alt=""
                 v-if="default_theme === v.name">
          </div>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      default_theme: '素雅白',
      default_color: 'red',
      theme_list: [{
        name: '素雅白',
        color: 'white'
      }, {
        name: '红色',
        color: 'red'
      }]
    }
  },
  methods: {
    theme_change (v) {
      console.log(v)
      this.default_theme = v.name
      this.default_color = v.color
    }
  },
  computed: {
    themeClass () {
      return `theme-${this.default_color}`
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-page {
  background-color: #f2f2f2;

  .setting-bar {
    height: 65px;
    line-height: 65px;
    // background-color: #fff;
    // color: #3a3a3a;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 35px;
    // @include themify($themes) {
    //   background-color: themed("background-color");
    //   color: themed("color");
    // }
    .mui-icon {
      color: #3a3a3a;
    }

    .left {
      width: 20px;
      height: 30px;
      position: absolute;
      top: 17px;
      left: 0;
    }

    .setting-bar-title {
      font-size: 28px;
      position: relative;
    }
  }

  .theme-bar {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 0 35px;
    //

    .theme-list {
      display: grid;
      height: 100%;
      align-items: center;
      font-size: 25px;
      padding-top: 40px;
      .theme-list-item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 77px;
        // align-items: center;
        .desc {
          margin-right: 20px;
          font-size: 25px;
          color: #9c9c9c;
        }

        img {
          height: 30px;
        }
      }
    }
  }
}
// 选中字体
.selected {
  font-size: 30px;
  color: #d81e06;
}
</style>
