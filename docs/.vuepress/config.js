//这里是全局的配置文件
module.exports = {
  //一下三个属性是用来设置SEO的
  title:"青飞",
  description:"青飞的笔记",
  head: [
    ['meta', { name: 'author', content: '青飞' }],                                                        
    ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明, 青飞' }],
    ['link', { rel: 'icon', href: 'assets/img/favicon.ico' }],
  ],

  themeConfig: {  //这里面加入各种插件
    lastUpdated: '更行时间' ,  
    logo: '/assets/img/hero.png',  //log设置  
    // navbar: false,  

    nav: [    //导航栏设置
      { text: 'Home', link: '/' },  //单个导航栏
      { text: 'Guide', link: '/about/' },
      {                             //导航栏做下拉列表
        text: 'Languages',
        items: [
          { text: 'Group1',         //通过嵌套item做下拉列表分组  
            items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] },
          { text: 'Group2', 
            items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] }
        ]
      },
      { text: 'External', link: 'https://baidu.com' },
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
    sidebar:{             //通过对象的形式生成侧边栏
      // "/":[
      //   ""
      // ]                //此时路径越短的导航放在越下面，不然所有的都会匹配到那个路径
      "/css/":[
        'aaa',
        'bbb',
        'ccc'
      ],
      "/js/":[
        'aa',
        'bb',
        'cc'
      ],
      "/":[
        "",
        "about",
        "about2"
      ]
    }
  }
}