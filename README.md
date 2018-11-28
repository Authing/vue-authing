# vue-authing

这是 Authing SDK for Vue 的插件。

## 安装

``` shell
$ npm install vue-authing --save
```

## 使用

``` javascript
import Vue from 'vue';
import App from './App.vue'

import VueAuthing from 'vue-authing';

Vue.use(VueAuthing, {
	clientId: 'client_id',
	secret: 'secret'
});

new Vue({
    render: h => h(App),
}).$mount('#app')

```

注意在所有组件中都需要加这么一句代码以取得 Authing 实例:

``` javascript
async beforeCreate() {
    await this.$_authing;
    console.log(this.$authing);

    // e.g this.$authing.login
    // e.g this.$authing.register
}
```

获取Client ID和Client Secret，请[点击这里](https://docs.authing.cn/#/quick_start/howto)。
