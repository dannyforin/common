import axios from 'axios'
let Axios = axios.create()
Axios.defaults.timeout = 2000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
Axios.interceptors.request.use(config => {
  // 发送前 do something
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
Axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
})

export default Axios
