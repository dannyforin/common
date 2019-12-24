/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = function (func, delay) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        // 或者直接 func()
        timer = null
      }, delay)
    }
  }
}

/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = function (fn, wait) {
  let timeout = null
  return function () {
    if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}

/**
 * 获取当前时间 yyyy-mm-dd,hh:mm:ss
 */
export const getYyMmDdHhMmSs = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minu = date.getMinutes()
  const second = date.getSeconds()
  const arr = [month, day, hours, minu, second]
  arr.forEach(item => {
    item < 10 ? '0' + item : item
  })
  return (
    year +
    '-' +
    arr[0] +
    '-' +
    arr[1] +
    ' ' +
    arr[2] +
    ':' +
    arr[3] +
    ':' +
    arr[4]
  )
}

/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @returns {年月日}
 */
export const timesToYyMmDd = (times, ymd, hms) => {
  const oDate = new Date(times)
  const oYear = oDate.getFullYear()
  const oMonth = oDate.getMonth() + 1
  const oDay = oDate.getDate()
  const oHour = oDate.getHours()
  const oMin = oDate.getMinutes()
  const oSec = oDate.getSeconds()
  let oTime // 最后拼接时间
  // 年月日格式
  switch (ymd) {
    case 'yyyy-mm-dd':
      oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
      break
    case 'yyyy/mm/dd':
      oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay)
      break
  }
  // 时分秒格式
  switch (hms) {
    case 'hh':
      oTime = ' ' + oTime + getzf(oHour)
      break
    case 'hh:mm':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin)
      break
    case 'hh:mm:ss':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSec)
      break
  }
  return oTime
}

/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const arrOrderAscend = (arr, ascendFlag = true) => {
  return arr.sort((a, b) => {
    return ascendFlag ? a - b : b - a
  })
}

/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = url => {
  const a = document.createElement('a')
  a.href = url
  return [
    /^(http|https):$/.test(a.protocol),
    a.host,
    a.pathname !== url,
    a.pathname !== `/${url}`
  ].find(x => !x) === undefined
}

/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent;
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
    iPad: u.indexOf("iPad") > -1, //是否iPad
  }
  return Object.keys(obj)[Object.values(obj).indexOf(true)]
};


/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export const fileFormatSize = size => {
  var i
  var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  for (i = 0; i < unit.length && size >= 1024; i++) {
    size /= 1024
  }
  return (Math.round(size * 100) / 100 || 0) + unit[i]
}

/**
 * localStorage 存贮
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param {String} key  属性
 * @param {Object} value 值
 */
export const localStorageSet = (key, value) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

/**
 * localStorage 获取
 * @param {String} key  属性
 */
export const localStorageGet = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * localStorage 移除
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => {
  localStorage.removeItem(key)
}

/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
  setTimeout(() => {
    localStorage.removeItem(key)
  }, expire)
}

/**
 * sessionStorage 存贮
 * @param {String} key  属性
 * @param {*} value 值
 */
export const sessionStorageSet = (key, value) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
}

/**
 * sessionStorage 获取
 * @param {String} key  属性
 */
export const sessionStorageGet = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

/**
 * sessionStorage 删除
 * @param {String} key  属性
 */
export const sessionStorageRemove = (key, value) => {
  sessionStorage.removeItem(key, value)
}

/**
 * sessionStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
  if (typeof (value) === 'object') value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
  setTimeout(() => {
    sessionStorage.removeItem(key)
  }, expire)
}

/**
 * cookie 存贮
 * @param {String} key  属性
 * @param {*} value  值
 * @param String expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
  const d = new Date()
  d.setDate(d.getDate() + expire)
  document.cookie = `${key}=${value};expires=${d.toGMTString()}`
}

/**
 * cookie 获取
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
  const cookieStr = unescape(document.cookie)
  const arr = cookieStr.split('; ')
  let cookieValue = ''
  for (var i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    if (temp[0] === key) {
      cookieValue = temp[1]
      break
    }
  }
  return cookieValue
}

/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

/**
 * 去掉字符左右空格
 * @param {String} str 字符
 */
export const strTrimLeftOrRight = str => {
  return str.replace(/(^\s*)|(\s*$)/g, "")
}

/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
  return str.includes(value)
}

/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strBeginWith = (str, value) => {
  return str.indexOf(value) === 0
}
