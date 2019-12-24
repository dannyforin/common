![image-20191125183802008](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20191125183802008.png)

#### jsonp

```javascript
<script type="text/javascript">
  //添加<script>标签的方法
  function addScriptTag(src) {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.src = src;
    document.body.appendChild(script);

  }

  window.onload = function () {
    //搜索apple，将自定义的回调函数名result传入callback参数中
    addScriptTag("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1574739983450&jsonpCallback=result");


  }
  //自定义的回调函数result
  function result(data) {
    //我们就简单的获取apple搜索结果的第一条记录中url数据
    console.log(data)

  }
```

#### keep-alive

```vue
<keep-alive>      
    <router-view v-if="$route.meta.keepAlive"/>    
</keep-alive>    
<router-view v-if="!$route.meta.keepAlive"/>
```

```javascript
// list是我们的搜索结果页面
{      
    path: '/list',  
    name: 'List',      
    component: resolve => require(['@/pages/list'], resolve),    
    meta: {        
        isUseCache: false,  // 这个字段的意思稍后再说      
        keepAlive: true  // 通过此字段判断是否需要缓存当前组件  
    }    
},
```

```javascript
// list组价的activated钩子
 activated() {
    // isUseCache为false时才重新刷新获取数据
    // 因为对list使用keep-alive来缓存组件，所以默认是会使用缓存数据的         
    if(!this.$route.meta.isUseCache){            
        this.list = []; // 清空原有数据
        this.onLoad(); // 这是我们获取数据的函数   
    }
    // 通过这个控制刷新
    this.$route.meta.isUseCache = false;
},
// 列表页面的beforeRouteLeave钩子函数
beforeRouteLeave (to, from, next) {        
    if (to.name == 'Detail') {
        from.meta.isUseCache = true;    
    }        
    next();
},
```

#### 移动端适配(有设计图)

```html
npm install postcss-px-to-viewport --save-dev
```

```html
"postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-px-to-viewport": {
        "unitToConvert": "px",
        "viewportWidth": 750,
        "unitPrecision": 5,
        "propList": [
          "*"
        ],
        "viewportUnit": "vw",
        "fontViewportUnit": "vw",
        "selectorBlackList": [
          "vant"
        ],
        "minPixelValue": 1,
        "mediaQuery": false,
        "replace": true,
        "exclude": [],
        "landscape": false,
        "landscapeUnit": "vw",
        "landscapeWidth": 568
      }
    }
  },
```

#### 解决vue轮播图不切换bug

```html
加个标记：<swiper :options="swiperOption" ref="mySwiper">
配置项：init: false,
computed: {
    // 解决swiper loop失效
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
updated () {
    if (this.bannerList.length > 1) {
      this.swiper.init()
    }
  },
```

#### 默认meta头部

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

#### vue路由切换动画

```html
<template>
  <div id="app">
    <transition :name="slideDirection">
      <router-view class="router-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      slideDirection: 'slide-left' // 默认动态路由变化为slide-right
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth < fromDepth) {
        this.transitionName = 'slide-right'
      } else if (toDepth > fromDepth) {
        this.transitionName = 'slide-left'
      } else {
        if (to.meta.num > from.meta.num) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }
      }
    }
}
</script>


<style>
.router-view {
  position: absolute;
  transition: all 0.5s ease;
}

.slide-left-enter {
  transform: translate3d(100%, 0, 0);
  opacity: 0
}

.slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
  opacity: 0
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>

```



#### transition

```html
.fadeInUp-enter-active,
.fadeInUp-leave-active {
  transition: 0.5s;
  transform: translate3d(0, 0%, 0);
}

.fadeInUp-enter,
.fadeInUp-leave-to {
  transition: 0.5s;
  transform: translate3d(0, 100%, 0);
}

```

#### svg

```css
// 设置颜色
fill: red; 
// 设置大小
svg => width:20px

```

#### 处理样式，最后不显示的效果 not

![image-20191210143045751](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20191210143045751.png)

#### 节流

```html
function throttle(fn, delay) {
    var last = 0;
    return function () {
        var now = Date.now();
        if (now - last >= delay) {
            fn.apply(this, arguments);
            last = now;
        }
    }
}

// 优惠劵点击，事件处理函数
function snatchCouponFn() {
	console.log('恭喜您，优惠券已到手');
}

// 使用 节流函数（已给出实现，往上找找）包装抢优惠劵的事件处理函数
$coupon.onclick = throttle(snatchCouponFn, 2000)



```

#### 返回顶部

![image-20191211122418282](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20191211122418282.png)

#### 滚动卡顿

![image-20191212190428519](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20191212190428519.png)

 ####  遮罩弹框阻止用户滚动

```html
<div class="mask" @touchumove.prevent></div>
//
<div class="mask" @touchumove.self.prevent></div>

```

####  PC端的桌面通知 

```javascript
Notification.requestPermission(prem => {
        if (prem == 'granted') {
          const notice = new Notification('hello', {
            body: '1',
            icon: '',
            data: {
              url: 'https://www.baidu.com'
            }
          })
          notice.onclick = () => {
            window.open(notice.data.url)
          }
        }
      })

```

#### PC全屏

```javascript
const launchFullScreen = (elem = document.documentElement) => {
        console.log(elem)
        if (elem.requestFullScreen) {
          elem.requestFullScreen()
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen()
        }
      }
      launchFullScreen()

```

#### URLSearchParams

![image-20191212195911638](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20191212195911638.png)

#### 监听下载

```javascript
let ajax = new XMLHttpRequest()
ajax.open('GET', '../../../package.json')
ajax.send()
ajax.onprogress = (event) => {
    console.log(event)
    if (event.lengthComputable) {
        console.log(event.loaded)
        console.log(event.total)
    }
}

```

