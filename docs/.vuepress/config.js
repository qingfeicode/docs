//这里是全局的配置文件
const headConfig = require("./config/headConfig");
const pluginConfig = require("./config/pluginConfig")
const navConfig = require("./config/navConfig")
const sidebarConfig = require("./config/sidebarConfig")

const moment = require('moment'); //显示日期的插件
moment.locale("zh-cn") //控制语言为中文

module.exports = {
  base: "/docs/",
  //一下三个属性是用来设置SEO的
  title: "青飞",
  description: "青飞的笔记",
  head: headConfig,
  plugins: pluginConfig,
  themeConfig: { //这里面加入各种插件
    lastUpdated: '更行时间',
    logo: '/assets/img/hero.png', //log设置  
    // navbar: false,  

    nav: navConfig,
    
    sidebar: sidebarConfig
  }
}