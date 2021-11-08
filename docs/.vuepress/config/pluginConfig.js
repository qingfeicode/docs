const moment = require('moment'); 
const secret = require("./secret");
module.exports= {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format("LLLL	") //通过moment插件管理室间格式
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "新的风暴出现",
      buttonText: "刷新"
    },
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'qingfeicode',//自己
    repo: 'docs',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
  },
  '@vuepress/back-to-top':true
}