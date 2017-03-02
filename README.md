# vuedemo

> A Vue.js project

## 初始化项目

###安装环境
* node
* npm
* webpack
* vue-cli

###模板初始化

```
vue init webpack vuetest

```
###安装依赖包
``` bash
# install dependencies
npm install

```

###安装其他依赖包
```
  # Element 框架
  npm i element-ui -S
  # VueRouter
  npm install vue-router -D
  # superagment  
  npm install superagent -D
```

###项目运行
```

# serve with hot reload at localhost:8080 
可根据需要更改/config/index.js文件中dev项端口号：
dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true，
    ，，，
  }
  
npm run dev  
  
  
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
