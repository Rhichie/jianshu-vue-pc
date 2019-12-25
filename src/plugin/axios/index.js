import Vue from 'vue'
import { Message,Loading } from 'element-ui'
import axios from 'axios'
import Cookies from 'js-cookie'
import $router from '../../router'
let loading = null
axios.defaults.baseURL = '/kdk_api/'
axios.defaults.headers['Access-Token'] = localStorage['Access-Token']
axios.interceptors.request.use(function (config) {
  // Do something before request is sent

  if(!['getArticleListByTypes','/articleDetail/editArticle'].includes(config.url,0)){
    loading = Loading.service({
      lock: true,
      text: '加载中....',
      background: 'rgba(255,255,255, 0.8)',
      customClass: 'my-loading'
    });
  }

  config.headers['x-csrf-token'] = Cookies.get('csrfToken')
  config.headers['Access-Token'] = localStorage['Access-Token']
  return config
}, function (error) {
  if(loading){
    loading.close()
  }

  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  if(loading){
    loading.close()
  }
  // 业务失败
  if (res.data.code != 0) {
    Message.error(res.data.message)
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}, error => {
  if(loading){
    loading.close()
  }
  console.log(error.response.status)
  // 服务器错误
  if (error.response.status == 500) {
    Message.error('服务器错误');
  } else if (error.response.status == 401) {
    Message.error('请先登录');
    return
  }
  return Promise.reject(error)
})
Vue.prototype.$axios = axios
