<template>
  <div class="setting-page">
    <header class="setting-bar">
      <!-- <a class="mui-icon mui-action-menu mui-icon-arrowleft mui-pull-left"></a> -->
      <h1 class="setting-bar-title">设置
        <!-- <img src="images/left.gif"
             alt=""
             class="left"> -->
      </h1>
    </header>
    <div class="brightness">
      <span class="brightness-title">亮度</span>
      <img src="images/brightness.png"
           alt=""
           class="small">
      <van-slider v-model="value"
                  active-color="#f9201f"
                  @change="onChange" />
      <img src="images/brightness.png"
           alt=""
           class="big">
    </div>
    <div class="personality-bar">
      <ul class="personality-list">
        <li class="personality-list-item">
          <span>阅读设置</span>
          <div class="right-box">
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
        <li class="personality-list-item">
          <span class="title">阅读兴趣</span>
          <div class="right-box">
            <span class="desc">男频 原创小说</span>
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
        <li class="personality-list-item">
          <span>个性换肤</span>
          <div class="right-box">
            <span class="desc">素雅白</span>
            <img src="images/right.png"
                 alt="">
          </div>

        </li>
        <li class="personality-list-item">
          <span>当前版本</span>
          <div class="right-box">
            <span class="desc">1.0</span>

          </div>
        </li>
      </ul>
    </div>
    <div class="feedback">
      <ul class="feedback-list">
        <li class="feedback-list-item">
          <span>清除缓存</span>
          <div class="right-box">
            <span class="desc">3.37MB</span>
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
        <li class="feedback-list-item">
          <span>意见反馈</span>
          <div class="right-box">
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
        <li class="feedback-list-item">
          <span>评价APP</span>
          <div class="right-box">
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
        <li class="feedback-list-item">
          <span>关于</span>
          <div class="right-box">
            <img src="images/right.png"
                 alt="">
          </div>
        </li>
      </ul>
    </div>
    <button class="change-user">切换账户</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  methods: {
    onChange (value) {
      this.$toast('当前值：' + value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/reset.scss";
.setting-page {
  background-color: #f2f2f2;

  .setting-bar {
    height: 65px;
    line-height: 65px;
    background-color: #fff;
    color: #3a3a3a;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 35px;
    @include themify(red) {
      background-color: themed("background-color");
      color: themed("color");
    }

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

  .brightness {
    height: 115px;
    line-height: 115px;
    background-color: #fff;
    margin-bottom: 20px;
    font-size: 26px;
    padding: 0 35px;

    /deep/.van-slider__button {
      background-color: #ff272b;
    }

    /deep/.van-slider__bar {
      height: 4px !important;
    }

    /deep/.van-slider {
      float: left;
      width: 490px;
      margin-top: 55px;
    }

    .brightness-title {
      float: left;
      margin-right: 30px;
    }

    .small {
      float: left;
      width: 28px;
      height: 28px;
      margin-right: 15px;
      margin-top: 43px;
    }

    .big {
      float: right;
      width: 43px;
      height: 43px;
      margin-top: 36px;
    }
  }

  .personality-bar {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 0 35px;
    height: 422px;

    .personality-list {
      display: grid;
      height: 100%;
      align-items: center;
      font-size: 25px;

      .personality-list-item {
        display: flex;
        justify-content: space-between;

        .desc {
          margin-right: 20px;
          font-size: 25px;
          color: #9c9c9c;
        }

        img {
          height: 17px;
        }
      }
    }
  }

  .feedback {
    background-color: #fff;
    padding: 0 35px;

    .feedback-list {
      padding: 38px 0;
      display: grid;
      row-gap: 77px;
      font-size: 25px;

      .feedback-list-item {
        display: flex;
        justify-content: space-between;

        .desc {
          margin-right: 20px;
          font-size: 25px;
          color: #9c9c9c;
        }

        img {
          height: 17px;
        }
      }
    }
  }

  .change-user {
    width: 590px;
    height: 75px;
    border: none;
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 25px;
    display: block;
    background: linear-gradient(#fe6d52, #fc4743);
    color: #fff;
    font-size: 25px;
  }
}
</style>
