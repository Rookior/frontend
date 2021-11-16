console.log('hello World')
import './index.css';

const element = document.createElement('div');
element.innerHTML =  "webpack2222";


import Icon from './1.png';
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  document.body.appendChild(element);

import Vue from 'vue'
import App from './App.vue'


// 使用vue
const root = document.createElement('div');
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)