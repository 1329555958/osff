## 简介
致力于打造一款一站式（one-stop-frontend-framework）前端框架； 构建一个完全前后分离的前端框架，完全的静态资源，可以部署在nginx、node、Apache、tomcat等所有能够提供静态资源的web服务器；

## 构想
* 主要使用 mvc框架angularjs、页面框架AdminLTE、requirejs模块管理、构建工具grunt
* 将所有的url配置在一个文件中提供，方便进行统一控制、测试、也可来自不同服务器

## 启动步骤
* > npm install
* > bower install
* > npm start

## 设计说明
* `asset/views` 下面是对应的页面，url就是对应的文件名称(无后缀)
* `asset/js` 下面就是views下页面对应的依赖，根据名称查找

## 问题列表
* 请求后台服务时是否有身份标识？
* 是否需要记录用户状态？通过什么记录？
* 多系统时怎么共享状态？单点登录？
* 通过什么传递用户标识？cookie？安全性如何保证？

