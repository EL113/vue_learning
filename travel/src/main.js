// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//  这里定义了根组件实例，所有代码逻辑的开始
//  根组件实例：这里定义根组件的vue实例，el元素对应是最外层的index.html文件中id为app的标签，
//  通过components注册了app组件到根组件中，又定义template为app标签（代表app组件），
//  就把index文件中的id为app的标签换成了app组件，从而将index.html中的内容替换成了app组件所代表的内容
//  组件定义：用文件的方式定义一个组件，同vue.js对应的是，template标签标识组件页面，script标识js逻辑对象（data、method那些元素对象），style标识组件页面样式
//  路由：实例中的router就是一个路由，定义了url同组件之间的关系，app组件中有一个router-view标签，router将url对应的组件
//  替换到app组件的router-view上
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
