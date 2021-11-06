//这里是全局的配置文件

const moment = require('moment'); //显示日期的插件
moment.locale("zh-cn") //控制语言为中文

module.exports = {
  base: "/docs/",
  //一下三个属性是用来设置SEO的
  title: "青飞",
  description: "青飞的笔记",
  head: [
    ['meta', {
      name: 'author',
      content: '青飞'
    }],
    ['meta', {
      name: 'keywords',
      content: 'vuepress 介绍, vuepress 说明, 青飞'
    }],
    ['link', {
      rel: 'icon',
      href: '/assets/img/favicon.ico'
    }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL	") //通过moment插件管理室间格式
        }
      },

    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "新的风暴出现",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: { //这里面加入各种插件
    lastUpdated: '更行时间',
    logo: '/assets/img/hero.png', //log设置  
    // navbar: false,  

    nav: [ //导航栏设置
      {
        text: 'Home',
        link: '/'
      }, //单个导航栏
      {
        text: 'About',
        link: '/about/'
      },
      { //导航栏做下拉列表
        text: 'Languages',
        items: [{
            text: 'Group1', //通过嵌套item做下拉列表分组  
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/about/'
              },
            ]
          },
          {
            text: 'Group2',
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/about/'
              },
            ]
          }
        ]
      },
      {
        text: 'External',
        link: 'https://baidu.com'
      },
    ],
    // sidebar: 'auto'    //自动生成侧边栏
    // sidebar: [         //数组形式生成侧边栏
    //   '',
    //   'about',
    //   'about2'
    // ]
    // sidebar: [
    //   '',
    //   'about',
    //   {                     //数组嵌套对象
    //     title: '这里是CSS哦',   // 必要的
    //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/css/aaa',
    //       '/css/bbb',
    //       '/css/ccc'
    //     ]
    //   },
    // ]
    sidebar: { //通过对象的形式生成侧边栏
      // "/":[
      //   ""
      // ]                //此时路径越短的导航放在越下面，不然所有的都会匹配到那个路径
      "/css/": [
        'aaa',
        'bbb',
        'ccc'
      ],
      "/js/": [
        'aa',
        'bb',
        'cc'
      ],
      "/": [
        "",
        "about",
        "about2"
      ]
    }
  },


}